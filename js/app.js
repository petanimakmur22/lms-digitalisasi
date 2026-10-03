/* ===== MAIN APP ===== */

const App = {
  el: document.getElementById('app'),
  quizState: null,

  /* ===== RENDER ENGINE ===== */
  render(route, params = {}) {
    window.scrollTo(0, 0);
    switch (route) {
      case 'login': this.renderLogin(); break;
      case 'register': this.renderRegister(); break;
      case 'home': this.renderHome(); break;
      case 'modules': this.renderModules(); break;
      case 'module': this.renderModule(params.moduleId); break;
      case 'material': this.renderMaterial(params.moduleId, params.materialIndex); break;
      case 'quiz': this.renderQuiz(params.moduleId); break;
      case 'quiz-result': this.renderQuizResult(params.moduleId, params.score, params.total); break;
      case 'certificate': this.renderCertificate(); break;
      case 'profile': this.renderProfile(); break;
      default: this.renderHome();
    }
  },

  /* ===== LOGIN ===== */
  renderLogin() {
    this.el.innerHTML = `
      <div class="login-page fade-in">
        <div class="login-logo">📚</div>
        <div class="page-title">WORKSHOP<br>DIGITALISASI<br>PEMBELAJARAN</div>
        <p class="body-text mt-md">Learning Management System untuk peserta workshop guru dan tenaga kependidikan.</p>
        
        <form class="login-form" id="loginForm">
          <div class="input-group">
            <label>Email</label>
            <input type="email" class="input-field" id="loginEmail" placeholder="masukkan email Anda" required>
          </div>
          <div class="input-group">
            <label>Kata Sandi</label>
            <input type="password" class="input-field" id="loginPassword" placeholder="masukkan kata sandi" required>
          </div>
          <button type="submit" class="btn btn-primary">Masuk</button>
        </form>
        
        <p class="small-text text-center mt-xl">Belum punya akun? <a href="#" id="goRegister" style="color:var(--indigo);font-weight:600;text-decoration:none;">Daftar di sini</a></p>
      </div>
    `;

    document.getElementById('loginForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
      const btn = e.target.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = 'Memproses...';
      try {
        const user = await DB.loginUser(email, password);
        Router.navigate('home');
        this.showToast('👋 Selamat datang kembali, ' + user.name + '!');
      } catch (err) {
        const msg = err.code === 'auth/wrong-password' ? 'Kata sandi salah'
          : err.code === 'auth/user-not-found' ? 'Email tidak ditemukan'
          : err.code === 'auth/invalid-credential' ? 'Email atau kata sandi salah'
          : err.message || 'Gagal masuk';
        this.showToast('❌ ' + msg);
        btn.disabled = false;
        btn.textContent = 'Masuk';
      }
    });

    document.getElementById('goRegister').addEventListener('click', (e) => {
      e.preventDefault();
      Router.navigate('register');
    });
  },

  /* ===== REGISTER ===== */
  renderRegister() {
    this.el.innerHTML = `
      <div class="login-page fade-in">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px;">
          <button class="btn btn-icon" id="backToLogin">←</button>
          <span class="section-title">Daftar Akun</span>
        </div>
        
        <form class="login-form" id="registerForm">
          <div class="input-group">
            <label>Nama Lengkap</label>
            <input type="text" class="input-field" id="regName" placeholder="masukkan nama lengkap" required>
          </div>
          <div class="input-group">
            <label>Email</label>
            <input type="email" class="input-field" id="regEmail" placeholder="masukkan email Anda" required>
          </div>
          <div class="input-group">
            <label>Instansi / Sekolah</label>
            <input type="text" class="input-field" id="regInstitution" placeholder="nama sekolah atau instansi" required>
          </div>
          <div class="input-group">
            <label>Peran</label>
            <select class="input-field" id="regRole" required>
              <option value="" disabled selected>Pilih peran Anda</option>
              <option value="Guru">Guru</option>
              <option value="Kepala Sekolah">Kepala Sekolah</option>
              <option value="Tenaga Kependidikan">Tenaga Kependidikan</option>
              <option value="Pengawas Sekolah">Pengawas Sekolah</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>
          <div class="input-group">
            <label>Kata Sandi</label>
            <input type="password" class="input-field" id="regPassword" placeholder="buat kata sandi" required minlength="4">
          </div>
          <button type="submit" class="btn btn-primary">Daftar & Mulai Belajar</button>
        </form>
        
        <p class="small-text text-center mt-xl">Sudah punya akun? <a href="#" id="goLogin" style="color:var(--indigo);font-weight:600;text-decoration:none;">Masuk di sini</a></p>
      </div>
    `;

    document.getElementById('backToLogin').addEventListener('click', () => Router.navigate('login'));
    document.getElementById('goLogin').addEventListener('click', (e) => {
      e.preventDefault();
      Router.navigate('login');
    });

    document.getElementById('registerForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('regName').value;
      const email = document.getElementById('regEmail').value;
      const institution = document.getElementById('regInstitution').value;
      const role = document.getElementById('regRole').value;
      const password = document.getElementById('regPassword').value;
      const btn = e.target.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = 'Mendaftarkan...';
      try {
        const user = await DB.registerUser(name, email, password, institution, role);
        Router.navigate('home');
        this.showToast('🎉 Selamat datang, ' + user.name + '!');
      } catch (err) {
        const msg = err.code === 'auth/email-already-in-use' ? 'Email sudah terdaftar'
          : err.code === 'auth/weak-password' ? 'Kata sandi terlalu lemah (min 6 karakter)'
          : err.code === 'auth/invalid-email' ? 'Format email tidak valid'
          : err.message || 'Gagal mendaftar';
        this.showToast('❌ ' + msg);
        btn.disabled = false;
        btn.textContent = 'Daftar & Mulai Belajar';
      }
    });
  },

  /* ===== HOME ===== */
  renderHome() {
    const user = Auth.getUser();
    const progress = Auth.getOverallProgress();
    const colorClasses = ['indigo', 'amber', 'coral'];
    const arrowClasses = ['light', 'dark', 'light'];

    let modulesHTML = MODULES.map((mod, i) => {
      const modProgress = Auth.getProgress().modules[mod.id];
      const isUnlocked = Auth.isModuleUnlocked(mod.id);
      const materialsCount = mod.materials.length;
      const completedCount = modProgress.materialsCompleted.length;
      const progressPct = Math.round((completedCount / materialsCount) * 100);

      return `
        <div class="module-card card-${colorClasses[i]} ${isUnlocked ? 'card-clickable' : ''}" 
             ${isUnlocked ? `onclick="Router.navigate('module', {moduleId: ${mod.id}})"` : ''}>
          <div class="module-number">${mod.id}</div>
          <div class="module-badge badge-${arrowClasses[i] === 'light' ? 'light' : 'dark'}">
            ${isUnlocked ? (modProgress.completed ? '✅ SELESAI' : `MODUL ${mod.id}`) : '🔒 TERKUNCI'}
          </div>
          <div class="module-title">${mod.shortTitle}</div>
          <div class="module-desc">${mod.description.substring(0, 80)}...</div>
          <div class="module-footer">
            <div style="flex:1">
              <div class="progress-bar" style="${colorClasses[i] === 'amber' ? 'background:rgba(0,0,0,0.1)' : ''}">
                <div class="progress-fill" style="width:${progressPct}%;${colorClasses[i] === 'amber' ? 'background:var(--text)' : ''}"></div>
              </div>
              <div style="font-size:11px;margin-top:4px;opacity:0.7">${completedCount}/${materialsCount} materi</div>
            </div>
            <div class="card-arrow card-arrow-${arrowClasses[i]}" style="margin-left:16px">
              ${isUnlocked ? '→' : '🔒'}
            </div>
          </div>
        </div>
      `;
    }).join('');

    let certSection = '';
    if (progress.certificateEarned) {
      certSection = `
        <div class="card card-dark card-clickable mt-lg" onclick="Router.navigate('certificate')">
          <div class="card-row">
            <div class="card-icon card-icon-light">🏆</div>
            <div class="flex-1">
              <div class="card-title">Sertifikat Kelulusan</div>
              <div style="font-size:13px;opacity:0.7;margin-top:2px">Anda telah menyelesaikan semua modul!</div>
            </div>
            <div class="card-arrow card-arrow-light">→</div>
          </div>
        </div>
      `;
    }

    this.el.innerHTML = `
      <div class="page fade-in">
        <div class="welcome-hero">
          <div class="welcome-greeting">Selamat Datang 👋</div>
          <div class="welcome-name">${user.name}</div>
          <div class="welcome-progress-label">Progress Keseluruhan: ${progress.percentage}%</div>
          <div class="progress-bar">
            <div class="progress-fill" style="width:${progress.percentage}%"></div>
          </div>
          <div style="display:flex;justify-content:space-between;margin-top:8px;font-size:12px;opacity:0.7">
            <span>${progress.completedMaterials}/${progress.totalMaterials} materi</span>
            <span>${progress.modulesCompleted}/3 modul</span>
          </div>
        </div>

        <div style="display:flex;gap:12px;margin-bottom:24px;">
          <div class="card card-white" style="flex:1;text-align:center;padding:16px">
            <div style="font-size:28px">⭐</div>
            <div style="font-size:24px;font-weight:700;color:var(--amber)">${progress.totalStickers}</div>
            <div class="small-text">Stiker</div>
          </div>
          <div class="card card-white" style="flex:1;text-align:center;padding:16px">
            <div style="font-size:28px">📊</div>
            <div style="font-size:24px;font-weight:700;color:var(--indigo)">${progress.modulesCompleted}</div>
            <div class="small-text">Modul Selesai</div>
          </div>
          <div class="card card-white" style="flex:1;text-align:center;padding:16px">
            <div style="font-size:28px">${progress.certificateEarned ? '🏆' : '🎯'}</div>
            <div style="font-size:24px;font-weight:700;color:var(--coral)">${progress.certificateEarned ? '1' : '0'}</div>
            <div class="small-text">Sertifikat</div>
          </div>
        </div>

        <div class="section-title mb-lg">MODUL PEMBELAJARAN</div>
        <div class="page-content">
          ${modulesHTML}
          ${certSection}
        </div>
      </div>
      ${this.renderBottomNav('home')}
    `;
  },

  /* ===== MODULE DETAIL ===== */
  renderModule(moduleId) {
    const mod = MODULES.find(m => m.id === moduleId);
    if (!mod) return Router.navigate('home');
    
    const progress = Auth.getProgress().modules[moduleId];
    const colorClasses = { 1: 'indigo', 2: 'amber', 3: 'coral' };
    const color = colorClasses[moduleId];
    const quizUnlocked = Auth.isQuizUnlocked(moduleId);

    let materialsHTML = mod.materials.map((mat, i) => {
      const isCompleted = progress.materialsCompleted.includes(mat.id);
      const isUnlocked = Auth.isMaterialUnlocked(moduleId, i);
      
      const bgColors = { indigo: 'var(--indigo)', amber: 'var(--amber)', coral: 'var(--coral)' };
      
      return `
        <div class="materi-item ${isCompleted ? 'completed' : ''} ${!isUnlocked ? 'locked' : ''}" 
             ${isUnlocked ? `onclick="Router.navigate('material', {moduleId: ${moduleId}, materialIndex: ${i}})"` : ''}>
          <div class="materi-num" style="background:${isCompleted ? '#22C55E' : (isUnlocked ? bgColors[color] : '#E5E5E5')};color:${isCompleted || (isUnlocked && color !== 'amber') ? 'white' : 'var(--text)'}">
            ${isCompleted ? '✓' : (i + 1)}
          </div>
          <div class="materi-info">
            <div class="materi-title">${mat.title}</div>
            <div class="materi-status">
              ${isCompleted ? '✅ Selesai' : (isUnlocked ? '📖 Baca materi' : '🔒 Selesaikan materi sebelumnya')}
            </div>
          </div>
          <div class="materi-icon">${isCompleted ? '⭐' : (isUnlocked ? '→' : '🔒')}</div>
        </div>
      `;
    }).join('');

    // Quiz card
    let quizHTML = `
      <div class="card card-${quizUnlocked ? 'dark' : 'white'} mt-lg ${quizUnlocked && !progress.quizCompleted ? 'card-clickable' : ''}" 
           ${quizUnlocked && !progress.quizCompleted ? `onclick="Router.navigate('quiz', {moduleId: ${moduleId}})"` : ''}>
        <div class="card-row">
          <div class="card-icon ${quizUnlocked ? 'card-icon-light' : 'card-icon-dark'}">
            ${progress.quizCompleted ? '✅' : (quizUnlocked ? '📝' : '🔒')}
          </div>
          <div class="flex-1">
            <div class="card-title">Kuis Modul ${moduleId}</div>
            <div style="font-size:13px;opacity:0.7;margin-top:2px">
              ${progress.quizCompleted 
                ? `Skor: ${progress.quizScore}/${mod.quiz.length} (${Math.round(progress.quizScore/mod.quiz.length*100)}%)`
                : (quizUnlocked ? `${mod.quiz.length} pertanyaan • Mulai kuis` : 'Selesaikan semua materi untuk membuka kuis')}
            </div>
          </div>
          <div class="card-arrow ${quizUnlocked ? 'card-arrow-light' : 'card-arrow-dark'}">
            ${quizUnlocked ? '→' : '🔒'}
          </div>
        </div>
      </div>
    `;

    this.el.innerHTML = `
      <div class="page fade-in">
        <div class="page-header">
          <button class="btn btn-icon" onclick="Router.navigate('home')">←</button>
          <div class="flex-1">
            <div class="badge badge-${color}" style="margin-bottom:4px">MODUL ${moduleId}</div>
            <div class="section-title">${mod.shortTitle}</div>
          </div>
          <div style="font-size:32px">${mod.icon}</div>
        </div>

        <p class="body-text mb-xl">${mod.description}</p>

        <div class="section-title mb-md" style="font-size:16px">📚 MATERI</div>
        <div class="page-content">
          ${materialsHTML}
          ${quizHTML}
        </div>
      </div>
      ${this.renderBottomNav('modules')}
    `;
  },

  /* ===== MATERIAL CONTENT ===== */
  renderMaterial(moduleId, materialIndex) {
    const mod = MODULES.find(m => m.id === moduleId);
    if (!mod) return Router.navigate('home');
    
    const mat = mod.materials[materialIndex];
    if (!mat) return Router.navigate('module', { moduleId });

    const isCompleted = Auth.isMaterialCompleted(moduleId, mat.id);
    const isLastMaterial = materialIndex === mod.materials.length - 1;
    const hasNextMaterial = materialIndex < mod.materials.length - 1;
    const colorClasses = { 1: 'indigo', 2: 'amber', 3: 'coral' };
    const color = colorClasses[moduleId];

    this.el.innerHTML = `
      <div class="content-page fade-in">
        <div class="page-header">
          <button class="btn btn-icon" onclick="Router.navigate('module', {moduleId: ${moduleId}})">←</button>
          <div class="flex-1">
            <div class="badge badge-${color}">Modul ${moduleId} • Materi ${materialIndex + 1}</div>
            <div class="section-title mt-sm" style="font-size:16px">${mat.title}</div>
          </div>
        </div>

        <div class="content-body">
          ${mat.content}
        </div>
      </div>
      <div class="content-bottom-action">
        <button class="btn btn-primary" id="completeBtn">
          ${isCompleted 
            ? (hasNextMaterial ? 'Materi Selanjutnya →' : 'Kembali ke Modul')
            : '✅ Tandai Selesai & Lanjut'}
        </button>
      </div>
    `;

    document.getElementById('completeBtn').addEventListener('click', () => {
      if (!isCompleted) {
        const isNew = Auth.completeMaterial(moduleId, mat.id);
        if (isNew) {
          this.showSticker(mat.title, () => {
            if (hasNextMaterial) {
              Router.navigate('material', { moduleId, materialIndex: materialIndex + 1 });
            } else {
              Router.navigate('module', { moduleId });
              if (Auth.isQuizUnlocked(moduleId)) {
                setTimeout(() => this.showToast('🎉 Semua materi selesai! Kuis sudah terbuka.'), 500);
              }
            }
          });
        }
      } else {
        if (hasNextMaterial) {
          Router.navigate('material', { moduleId, materialIndex: materialIndex + 1 });
        } else {
          Router.navigate('module', { moduleId });
        }
      }
    });
  },

  /* ===== QUIZ ===== */
  renderQuiz(moduleId) {
    const mod = MODULES.find(m => m.id === moduleId);
    if (!mod) return Router.navigate('home');

    if (!this.quizState || this.quizState.moduleId !== moduleId) {
      this.quizState = {
        moduleId,
        currentQ: 0,
        answers: new Array(mod.quiz.length).fill(null),
        answered: new Array(mod.quiz.length).fill(false),
        score: 0
      };
    }

    const q = mod.quiz[this.quizState.currentQ];
    const qIdx = this.quizState.currentQ;
    const total = mod.quiz.length;
    const isAnswered = this.quizState.answered[qIdx];
    const selectedAnswer = this.quizState.answers[qIdx];
    const colorClasses = { 1: 'indigo', 2: 'amber', 3: 'coral' };

    let dotsHTML = mod.quiz.map((_, i) => {
      let cls = 'quiz-dot';
      if (i === qIdx) cls += ' active';
      else if (this.quizState.answered[i]) {
        cls += this.quizState.answers[i] === mod.quiz[i].correct ? ' answered' : ' wrong';
      }
      return `<div class="${cls}"></div>`;
    }).join('');

    let optionsHTML = q.options.map((opt, i) => {
      let cls = 'quiz-option';
      if (isAnswered) {
        if (i === q.correct) cls += ' correct';
        else if (i === selectedAnswer && i !== q.correct) cls += ' wrong';
      } else if (selectedAnswer === i) {
        cls += ' selected';
      }
      const letters = ['A', 'B', 'C', 'D'];
      return `
        <div class="${cls}" ${!isAnswered ? `onclick="App.selectQuizOption(${moduleId}, ${i})"` : ''}>
          <div class="quiz-option-letter">${letters[i]}</div>
          <div class="flex-1">${opt}</div>
        </div>
      `;
    }).join('');

    let feedbackHTML = '';
    if (isAnswered) {
      const isCorrect = selectedAnswer === q.correct;
      feedbackHTML = `
        <div class="quiz-feedback ${isCorrect ? 'correct' : 'wrong'}">
          <strong>${isCorrect ? '✅ Benar!' : '❌ Kurang tepat.'}</strong><br>
          ${q.explanation}
        </div>
      `;
    }

    let actionBtnHTML = '';
    if (isAnswered) {
      if (qIdx < total - 1) {
        actionBtnHTML = `<button class="btn btn-primary" onclick="App.nextQuizQuestion(${moduleId})">Pertanyaan Selanjutnya →</button>`;
      } else {
        actionBtnHTML = `<button class="btn btn-primary" onclick="App.finishQuiz(${moduleId})">Lihat Hasil</button>`;
      }
    } else if (selectedAnswer !== null) {
      actionBtnHTML = `<button class="btn btn-primary" onclick="App.confirmQuizAnswer(${moduleId})">Konfirmasi Jawaban</button>`;
    }

    this.el.innerHTML = `
      <div class="quiz-container fade-in">
        <div class="page-header">
          <button class="btn btn-icon" onclick="if(confirm('Yakin keluar dari kuis? Progress kuis akan hilang.')){App.quizState=null;Router.navigate('module',{moduleId:${moduleId}})}">←</button>
          <div class="flex-1">
            <div class="badge badge-${colorClasses[moduleId]}">Kuis Modul ${moduleId}</div>
          </div>
          <div style="font-size:14px;font-weight:600;color:var(--text-muted)">${qIdx + 1}/${total}</div>
        </div>

        <div class="quiz-progress">${dotsHTML}</div>

        <div class="quiz-question">${q.question}</div>

        ${optionsHTML}
        ${feedbackHTML}
      </div>
      <div class="content-bottom-action">
        ${actionBtnHTML}
      </div>
    `;
  },

  selectQuizOption(moduleId, optionIndex) {
    this.quizState.answers[this.quizState.currentQ] = optionIndex;
    this.renderQuiz(moduleId);
  },

  confirmQuizAnswer(moduleId) {
    const mod = MODULES.find(m => m.id === moduleId);
    const qIdx = this.quizState.currentQ;
    const q = mod.quiz[qIdx];
    this.quizState.answered[qIdx] = true;
    if (this.quizState.answers[qIdx] === q.correct) {
      this.quizState.score++;
    }
    this.renderQuiz(moduleId);
  },

  nextQuizQuestion(moduleId) {
    this.quizState.currentQ++;
    this.renderQuiz(moduleId);
  },

  finishQuiz(moduleId) {
    const mod = MODULES.find(m => m.id === moduleId);
    const score = this.quizState.score;
    const total = mod.quiz.length;
    const result = Auth.completeQuiz(moduleId, score, total);
    this.quizState = null;
    Router.navigate('quiz-result', { moduleId, score, total, passed: result.passed, allComplete: result.allComplete });
  },

  /* ===== QUIZ RESULT ===== */
  renderQuizResult(moduleId, score, total) {
    const params = Router.params;
    const passed = params.passed;
    const allComplete = params.allComplete;
    const percentage = Math.round((score / total) * 100);
    
    let emoji, message, submessage;
    if (percentage >= 80) {
      emoji = '🏆';
      message = 'Luar Biasa!';
      submessage = 'Anda menguasai materi dengan sangat baik!';
    } else if (percentage >= 60) {
      emoji = '🎉';
      message = 'Selamat, Lulus!';
      submessage = 'Anda berhasil menyelesaikan kuis ini.';
    } else {
      emoji = '💪';
      message = 'Belum Lulus';
      submessage = 'Coba baca kembali materinya dan ulangi kuis.';
    }

    let actionHTML = '';
    if (passed) {
      if (allComplete) {
        actionHTML = `
          <button class="btn btn-primary mt-xl" onclick="Router.navigate('certificate')">🏆 Lihat Sertifikat</button>
          <button class="btn btn-outline w-full mt-md" onclick="Router.navigate('home')">Kembali ke Beranda</button>
        `;
      } else {
        actionHTML = `
          <button class="btn btn-primary mt-xl" onclick="Router.navigate('home')">Lanjut ke Modul Berikutnya →</button>
        `;
      }
    } else {
      actionHTML = `
        <button class="btn btn-primary mt-xl" onclick="App.retakeQuiz(${moduleId})">🔄 Ulangi Kuis</button>
        <button class="btn btn-outline w-full mt-md" onclick="Router.navigate('module', {moduleId: ${moduleId}})">Baca Ulang Materi</button>
      `;
    }

    this.el.innerHTML = `
      <div class="quiz-result fade-in">
        <div class="quiz-result-emoji">${emoji}</div>
        <div style="font-size:24px;font-weight:700;margin-bottom:8px">${message}</div>
        <div class="body-text">${submessage}</div>
        
        <div style="margin:32px 0">
          <div class="quiz-result-score">${percentage}%</div>
          <div class="quiz-result-label">Skor Anda: ${score}/${total} benar</div>
        </div>

        <div style="display:flex;gap:12px;justify-content:center;margin-bottom:24px">
          <div class="badge ${passed ? 'badge-success' : 'badge-coral'}">${passed ? '✅ LULUS' : '❌ BELUM LULUS'}</div>
          <div class="badge badge-dark">Passing: 60%</div>
        </div>

        ${allComplete ? `
          <div class="card card-sage" style="text-align:left;margin-bottom:16px">
            <div style="font-size:20px;margin-bottom:8px">🎊</div>
            <div class="card-title">Selamat! Semua Modul Selesai!</div>
            <div style="font-size:13px;margin-top:4px;opacity:0.8">Anda berhak mendapatkan Sertifikat Kelulusan Workshop Digitalisasi Pembelajaran.</div>
          </div>
        ` : ''}

        ${actionHTML}
      </div>
    `;
  },

  retakeQuiz(moduleId) {
    // Reset quiz score
    const progress = Auth.getProgress();
    progress.modules[moduleId].quizScore = null;
    progress.modules[moduleId].quizCompleted = false;
    progress.modules[moduleId].completed = false;
    progress.certificateEarned = false;
    progress.certificateDate = null;
    Auth.saveProgress(progress);
    this.quizState = null;
    Router.navigate('quiz', { moduleId });
  },

  /* ===== MODULES LIST ===== */
  renderModules() {
    const colorClasses = ['indigo', 'amber', 'coral'];
    
    let modulesHTML = MODULES.map((mod, i) => {
      const modProgress = Auth.getProgress().modules[mod.id];
      const isUnlocked = Auth.isModuleUnlocked(mod.id);
      const completedCount = modProgress.materialsCompleted.length;
      const totalCount = mod.materials.length;

      return `
        <div class="card card-${colorClasses[i]} ${isUnlocked ? 'card-clickable' : ''}" 
             ${isUnlocked ? `onclick="Router.navigate('module', {moduleId: ${mod.id}})"` : ''}
             style="padding:20px">
          <div class="card-row">
            <div class="card-icon card-icon-${colorClasses[i] === 'amber' ? 'dark' : 'light'}" style="font-size:28px">
              ${mod.icon}
            </div>
            <div class="flex-1">
              <div style="font-size:11px;font-weight:700;text-transform:uppercase;opacity:0.7;margin-bottom:2px">
                ${isUnlocked ? (modProgress.completed ? '✅ SELESAI' : `MODUL ${mod.id}`) : '🔒 TERKUNCI'}
              </div>
              <div class="card-title">${mod.shortTitle}</div>
              <div style="font-size:12px;opacity:0.7;margin-top:4px">${completedCount}/${totalCount} materi${modProgress.quizCompleted ? ' • Kuis ✓' : ''}</div>
            </div>
            <div class="card-arrow card-arrow-${colorClasses[i] === 'amber' ? 'dark' : 'light'}">
              ${isUnlocked ? '→' : '🔒'}
            </div>
          </div>
        </div>
      `;
    }).join('');

    this.el.innerHTML = `
      <div class="page fade-in">
        <div class="page-title mb-xl">MODUL<br>PEMBELAJARAN</div>
        <p class="body-text mb-xl">Selesaikan setiap modul secara berurutan untuk mendapatkan sertifikat kelulusan.</p>
        <div class="page-content" style="gap:12px">
          ${modulesHTML}
        </div>
      </div>
      ${this.renderBottomNav('modules')}
    `;
  },

  /* ===== CERTIFICATE ===== */
  renderCertificate() {
    const user = Auth.getUser();
    const progress = Auth.getProgress();
    
    if (!progress.certificateEarned) {
      this.el.innerHTML = `
        <div class="page fade-in">
          <div class="page-header">
            <button class="btn btn-icon" onclick="Router.navigate('home')">←</button>
            <div class="section-title">Sertifikat</div>
          </div>
          <div class="text-center" style="padding:48px 0">
            <div style="font-size:80px;margin-bottom:16px">🔒</div>
            <div class="section-title">Sertifikat Belum Tersedia</div>
            <p class="body-text mt-md">Selesaikan semua modul (Modul 1, 2, dan 3) beserta kuisnya untuk mendapatkan Sertifikat Kelulusan.</p>
            <button class="btn btn-primary mt-xl" onclick="Router.navigate('home')">Lanjutkan Belajar</button>
          </div>
        </div>
      `;
      return;
    }

    const certDate = new Date(progress.certificateDate);
    const dateStr = certDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    const certId = `CERT-${user.id}-${certDate.getTime().toString(36).toUpperCase()}`;

    // Build quiz scores
    let scoresHTML = MODULES.map(mod => {
      const modP = progress.modules[mod.id];
      return `<div class="badge badge-${mod.id === 1 ? 'indigo' : mod.id === 2 ? 'amber' : 'coral'}">Modul ${mod.id}: ${modP.quizScore}/${mod.quiz.length}</div>`;
    }).join('');

    this.el.innerHTML = `
      <div class="certificate-page fade-in">
        <div class="page-header">
          <button class="btn btn-icon" onclick="Router.navigate('home')">←</button>
          <div class="section-title flex-1">Sertifikat</div>
        </div>

        <div class="certificate-card" id="certificateCard">
          <div class="cert-logo">🏆</div>
          <div class="cert-title">Sertifikat Kelulusan</div>
          <div class="cert-heading">Workshop Digitalisasi Pembelajaran</div>
          
          <div class="cert-recipient">Diberikan kepada</div>
          <div class="cert-name">${user.name}</div>
          
          <div class="cert-desc">
            Telah berhasil menyelesaikan seluruh rangkaian Workshop Digitalisasi Pembelajaran yang meliputi:
          </div>

          <div style="text-align:left;margin-bottom:20px;font-size:13px;line-height:1.8">
            <div>✅ Modul 1: Inspirasi Penggunaan Bahan Ajar Interaktif Berbasis Digital</div>
            <div>✅ Modul 2: Pengembangan dan Pembuatan Media Pembelajaran Interaktif</div>
            <div>✅ Modul 3: Inspirasi Asesmen Berbasis Digital</div>
          </div>

          <div class="cert-modules">${scoresHTML}</div>

          <div style="border-top:1px solid #eee;padding-top:16px">
            <div class="cert-desc" style="margin-bottom:8px">
              Instansi: ${user.institution}<br>
              Peran: ${user.role}
            </div>
            <div class="cert-date">Tanggal: ${dateStr}</div>
            <div class="cert-id">ID: ${certId}</div>
          </div>
        </div>

        <button class="btn btn-primary mt-xl" onclick="App.downloadCertificate()">📥 Simpan Sertifikat</button>
        <button class="btn btn-outline w-full mt-md" onclick="Router.navigate('home')">Kembali ke Beranda</button>
      </div>
    `;
  },

  downloadCertificate() {
    this.showToast('📸 Gunakan screenshot untuk menyimpan sertifikat Anda!');
  },

  /* ===== PROFILE ===== */
  renderProfile() {
    const user = Auth.getUser();
    const progress = Auth.getOverallProgress();
    const fullProgress = Auth.getProgress();

    let modulesDetailHTML = MODULES.map(mod => {
      const modP = fullProgress.modules[mod.id];
      const total = mod.materials.length;
      const done = modP.materialsCompleted.length;
      return `
        <div class="card card-white" style="padding:16px">
          <div class="flex items-center justify-between mb-sm">
            <div style="font-size:14px;font-weight:600">${mod.icon} Modul ${mod.id}</div>
            <div class="badge ${modP.completed ? 'badge-success' : 'badge-dark'}" style="font-size:11px">
              ${modP.completed ? 'Selesai' : `${done}/${total}`}
            </div>
          </div>
          <div class="progress-bar progress-bar-dark">
            <div class="progress-fill" style="width:${Math.round(done/total*100)}%"></div>
          </div>
          ${modP.quizCompleted ? `<div class="small-text mt-sm">Kuis: ${modP.quizScore}/${mod.quiz.length} (${Math.round(modP.quizScore/mod.quiz.length*100)}%)</div>` : ''}
        </div>
      `;
    }).join('');

    this.el.innerHTML = `
      <div class="page fade-in">
        <div class="page-header">
          <div class="section-title flex-1">PROFIL</div>
        </div>

        <div class="profile-header">
          <div class="profile-avatar">${user.name.charAt(0).toUpperCase()}</div>
          <div class="section-title">${user.name}</div>
          <div class="small-text mt-sm">${user.email}</div>
          <div class="badge badge-indigo mt-sm">${user.role}</div>
          <div class="small-text mt-sm">${user.institution}</div>
        </div>

        <div class="profile-stats">
          <div class="stat-card">
            <div class="stat-value">${progress.percentage}%</div>
            <div class="stat-label">Progress</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${progress.totalStickers}</div>
            <div class="stat-label">Stiker</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${progress.modulesCompleted}/3</div>
            <div class="stat-label">Modul</div>
          </div>
        </div>

        <div class="section-title mb-md" style="font-size:16px">Detail Progress</div>
        <div class="page-content" style="gap:12px">
          ${modulesDetailHTML}
        </div>

        <button class="btn btn-outline w-full mt-xl" onclick="(async()=>{if(confirm('Yakin ingin keluar?')){await DB.logoutUser();Router.navigate('login')}})()">
          Keluar
        </button>
        <button class="btn w-full mt-md" style="color:var(--coral);font-size:13px" onclick="if(confirm('Reset semua progress? Data pembelajaran akan dihapus.')){Auth.resetProgress();Router.navigate('home');App.showToast('Progress telah direset.')}">
          Reset Progress
        </button>
      </div>
      ${this.renderBottomNav('profile')}
    `;
  },

  /* ===== BOTTOM NAV ===== */
  renderBottomNav(active) {
    const items = [
      { id: 'home', icon: '🏠', label: 'Beranda' },
      { id: 'modules', icon: '📚', label: 'Modul' },
      { id: 'certificate', icon: '🏆', label: 'Sertifikat' },
      { id: 'profile', icon: '👤', label: 'Profil' }
    ];
    return `
      <nav class="bottom-nav">
        ${items.map(item => `
          <button class="nav-item ${active === item.id ? 'active' : ''}" 
                  onclick="Router.navigate('${item.id}')">
            ${item.icon}
            <span>${item.label}</span>
          </button>
        `).join('')}
      </nav>
    `;
  },

  /* ===== STICKER / GOOD JOB OVERLAY ===== */
  showSticker(materialTitle, callback) {
    const overlay = document.getElementById('sticker-overlay');
    const stickers = ['🌟', '⭐', '🏅', '👏', '🎖️', '💫', '✨', '🥇'];
    const randomSticker = stickers[Math.floor(Math.random() * stickers.length)];
    
    overlay.innerHTML = `
      <div class="sticker-content">
        <div class="sticker-emoji">${randomSticker}</div>
        <div class="sticker-text">Good Job!</div>
        <div class="sticker-sub">Materi "${materialTitle}" selesai!</div>
        <button class="sticker-btn" id="stickerClose">Lanjutkan</button>
      </div>
    `;
    overlay.classList.remove('hidden');
    
    document.getElementById('stickerClose').addEventListener('click', () => {
      overlay.classList.add('hidden');
      if (callback) callback();
    });
  },

  /* ===== TOAST NOTIFICATION ===== */
  showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }
};

/* Init is handled in index.html after DB.init() */
