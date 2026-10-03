/* =====================================================
   DATABASE LAYER — Google Sheets + localStorage
   =====================================================
   
   Prioritas:
   1. Google Sheets (jika SHEETS_CONFIGURED = true)
      → data tersimpan di spreadsheet, bisa dilihat admin
      → localStorage sebagai cache untuk kecepatan
   2. localStorage only (fallback jika belum setup)
   
   ===================================================== */

const DB = {
  _initialized: false,
  _useSheets: false,
  _syncing: false,

  /* ===== INITIALIZATION ===== */
  async init() {
    if (this._initialized) return;

    if (typeof SHEETS_CONFIGURED !== 'undefined' && SHEETS_CONFIGURED) {
      // Test connection to Google Sheets API
      try {
        const res = await this._callApi({ action: 'ping' });
        if (res.success) {
          this._useSheets = true;
          console.log('✅ Google Sheets database connected');
        }
      } catch (err) {
        console.warn('⚠️ Google Sheets unreachable, using localStorage:', err.message);
        this._useSheets = false;
      }
    } else {
      console.log('ℹ️ Google Sheets not configured — using localStorage mode');
    }

    this._initialized = true;
  },

  isFirebaseMode() { return false; }, // backward compat
  isSheetsMode() { return this._useSheets; },

  /* ===== API CALLER ===== */
  async _callApi(data) {
    const url = SHEETS_CONFIG.apiUrl;
    
    // Use URL params for GET compatibility (Apps Script quirk)
    const params = new URLSearchParams();
    for (const [key, val] of Object.entries(data)) {
      params.set(key, typeof val === 'object' ? JSON.stringify(val) : val);
    }
    
    const response = await fetch(url + '?' + params.toString(), {
      method: 'GET',
      redirect: 'follow'
    });
    
    if (!response.ok) throw new Error('HTTP ' + response.status);
    return await response.json();
  },

  /* =====================================================
     USER / AUTH OPERATIONS
     ===================================================== */

  async registerUser(name, email, password, institution, role) {
    if (this._useSheets) {
      const res = await this._callApi({
        action: 'register',
        name, email, password, institution, role
      });
      if (!res.success) throw new Error(res.error);
      
      // Cache locally
      localStorage.setItem('digilearn_user', JSON.stringify(res.user));
      localStorage.setItem('digilearn_progress', JSON.stringify(this._defaultProgress()));
      return res.user;
    } else {
      // localStorage fallback
      const userData = {
        name, email: email.toLowerCase().trim(), institution, role,
        registeredAt: new Date().toISOString(),
        id: 'DL-' + Date.now().toString(36).toUpperCase()
      };
      const users = JSON.parse(localStorage.getItem('digilearn_users') || '[]');
      if (users.find(u => u.email === userData.email)) {
        throw new Error('Email sudah terdaftar');
      }
      userData._pw = btoa(password);
      users.push(userData);
      localStorage.setItem('digilearn_users', JSON.stringify(users));
      const { _pw, ...cleanUser } = userData;
      localStorage.setItem('digilearn_user', JSON.stringify(cleanUser));
      localStorage.setItem('digilearn_progress', JSON.stringify(this._defaultProgress()));
      return cleanUser;
    }
  },

  async loginUser(email, password) {
    if (this._useSheets) {
      const res = await this._callApi({
        action: 'login',
        email, password
      });
      if (!res.success) throw new Error(res.error);
      
      localStorage.setItem('digilearn_user', JSON.stringify(res.user));
      localStorage.setItem('digilearn_progress', JSON.stringify(res.progress));
      return res.user;
    } else {
      const users = JSON.parse(localStorage.getItem('digilearn_users') || '[]');
      const user = users.find(u => u.email === email.toLowerCase().trim());
      if (!user) throw new Error('Email tidak ditemukan');
      if (user._pw && atob(user._pw) !== password) throw new Error('Kata sandi salah');
      const { _pw, ...cleanUser } = user;
      localStorage.setItem('digilearn_user', JSON.stringify(cleanUser));
      const allProgress = JSON.parse(localStorage.getItem('digilearn_all_progress') || '{}');
      localStorage.setItem('digilearn_progress', JSON.stringify(allProgress[email] || this._defaultProgress()));
      return cleanUser;
    }
  },

  async logoutUser() {
    // Sync progress sebelum logout
    if (this._useSheets) {
      try { await this._syncToSheets(); } catch(e) {}
    }
    localStorage.removeItem('digilearn_user');
    localStorage.removeItem('digilearn_progress');
  },

  getCurrentUser() {
    const data = localStorage.getItem('digilearn_user');
    return data ? JSON.parse(data) : null;
  },

  isLoggedIn() {
    return this.getCurrentUser() !== null;
  },

  /* =====================================================
     PROGRESS OPERATIONS
     ===================================================== */

  _defaultProgress() {
    return {
      modules: {
        1: { completed: false, materialsCompleted: [], quizScore: null, quizCompleted: false },
        2: { completed: false, materialsCompleted: [], quizScore: null, quizCompleted: false },
        3: { completed: false, materialsCompleted: [], quizScore: null, quizCompleted: false }
      },
      certificateEarned: false,
      certificateDate: null,
      totalStickers: 0,
      lastUpdated: new Date().toISOString()
    };
  },

  getProgress() {
    const data = localStorage.getItem('digilearn_progress');
    if (data) return JSON.parse(data);
    const def = this._defaultProgress();
    localStorage.setItem('digilearn_progress', JSON.stringify(def));
    return def;
  },

  async saveProgress(progress) {
    progress.lastUpdated = new Date().toISOString();
    localStorage.setItem('digilearn_progress', JSON.stringify(progress));

    // Save per-user for localStorage multi-user
    const user = this.getCurrentUser();
    if (user) {
      const allProgress = JSON.parse(localStorage.getItem('digilearn_all_progress') || '{}');
      allProgress[user.email] = progress;
      localStorage.setItem('digilearn_all_progress', JSON.stringify(allProgress));
    }

    // Sync to Google Sheets (debounced, non-blocking)
    this._scheduleSheetsSync();
  },

  /* ===== Debounced sync to Sheets ===== */
  _syncTimer: null,
  _scheduleSheetsSync() {
    if (!this._useSheets) return;
    clearTimeout(this._syncTimer);
    this._syncTimer = setTimeout(() => this._syncToSheets(), 2000); // 2 detik debounce
  },

  async _syncToSheets(event, eventDetail) {
    if (!this._useSheets || this._syncing) return;
    this._syncing = true;
    try {
      const user = this.getCurrentUser();
      const progress = this.getProgress();
      if (!user) return;
      
      await this._callApi({
        action: 'saveProgress',
        email: user.email,
        userName: user.name,
        progress: JSON.stringify(progress),
        event: event || '',
        eventDetail: eventDetail || ''
      });
    } catch (err) {
      console.warn('Sheets sync gagal (akan coba lagi):', err.message);
    } finally {
      this._syncing = false;
    }
  },

  async completeMaterial(moduleId, materialId) {
    const progress = this.getProgress();
    const mod = progress.modules[moduleId];
    if (!mod.materialsCompleted.includes(materialId)) {
      mod.materialsCompleted.push(materialId);
      progress.totalStickers++;
      await this.saveProgress(progress);
      // Sync immediately for important events
      this._syncToSheets('materi_selesai', 'Modul ' + moduleId + ': ' + materialId);
      return true;
    }
    return false;
  },

  async completeQuiz(moduleId, score, total) {
    const progress = this.getProgress();
    const mod = progress.modules[moduleId];
    mod.quizScore = score;
    mod.quizCompleted = true;
    const passingScore = Math.ceil(total * 0.6);
    const passed = score >= passingScore;
    if (passed) mod.completed = true;

    const allComplete = Object.values(progress.modules).every(m => m.completed);
    if (allComplete) {
      progress.certificateEarned = true;
      progress.certificateDate = new Date().toISOString();
    }

    await this.saveProgress(progress);
    this._syncToSheets(
      allComplete ? 'sertifikat' : 'kuis_selesai',
      'Modul ' + moduleId + ': ' + score + '/' + total + (passed ? ' (LULUS)' : ' (BELUM LULUS)')
    );

    return { passed, allComplete };
  },

  async resetProgress() {
    const def = this._defaultProgress();
    await this.saveProgress(def);
    this._syncToSheets('reset', 'Progress direset');
  },

  /* ===== Helper methods (backward compat) ===== */
  isMaterialCompleted(moduleId, materialId) {
    return this.getProgress().modules[moduleId].materialsCompleted.includes(materialId);
  },

  isMaterialUnlocked(moduleId, materialIndex) {
    if (materialIndex === 0) return true;
    const mod = this.getProgress().modules[moduleId];
    const module = MODULES.find(m => m.id === moduleId);
    return mod.materialsCompleted.includes(module.materials[materialIndex - 1].id);
  },

  isModuleUnlocked(moduleId) {
    if (moduleId === 1) return true;
    return this.getProgress().modules[moduleId - 1].completed;
  },

  isQuizUnlocked(moduleId) {
    const mod = this.getProgress().modules[moduleId];
    const module = MODULES.find(m => m.id === moduleId);
    return mod.materialsCompleted.length === module.materials.length;
  },

  getOverallProgress() {
    const progress = this.getProgress();
    let totalMaterials = 0, completedMaterials = 0;
    MODULES.forEach(m => {
      totalMaterials += m.materials.length;
      completedMaterials += progress.modules[m.id].materialsCompleted.length;
    });
    return {
      percentage: totalMaterials > 0 ? Math.round((completedMaterials / totalMaterials) * 100) : 0,
      completedMaterials, totalMaterials,
      modulesCompleted: Object.values(progress.modules).filter(m => m.completed).length,
      totalModules: 3,
      certificateEarned: progress.certificateEarned,
      totalStickers: progress.totalStickers
    };
  },

  /* ===== ADMIN: Get all users (for admin.html) ===== */
  async getAllUsersWithProgress() {
    if (this._useSheets) {
      const res = await this._callApi({ action: 'getAllUsers' });
      if (!res.success) throw new Error(res.error);
      return res.data;
    } else {
      const users = JSON.parse(localStorage.getItem('digilearn_users') || '[]');
      const allProgress = JSON.parse(localStorage.getItem('digilearn_all_progress') || '{}');
      return users.map(u => {
        const { _pw, ...cleanUser } = u;
        return { user: cleanUser, progress: allProgress[u.email] || this._defaultProgress() };
      });
    }
  },

  async getActivityLog(limit) {
    // Activity log hanya tersedia di spreadsheet (sheet "Log")
    return [];
  }
};
