/* =====================================================
   AUTH MODULE — Wrapper over DB layer
   =====================================================
   Backward-compatible API: all Auth.xxx() calls still
   work, but now they delegate to the DB module which
   handles both Firebase and localStorage.
   ===================================================== */

const Auth = {
  STORAGE_KEY: 'digilearn_user',
  PROGRESS_KEY: 'digilearn_progress',

  /* ===== USER ===== */
  getUser()      { return DB.getCurrentUser(); },
  isLoggedIn()   { return DB.isLoggedIn(); },
  logout()       { DB.logoutUser(); localStorage.removeItem(this.STORAGE_KEY); },

  /* ===== PROGRESS (sync wrappers) ===== */
  initProgress() {
    if (!localStorage.getItem(this.PROGRESS_KEY)) {
      localStorage.setItem(this.PROGRESS_KEY, JSON.stringify(DB._defaultProgress()));
    }
  },

  getProgress()           { return DB.getProgress(); },
  saveProgress(p)         { DB.saveProgress(p); },
  completeMaterial(m, id) { return DB.completeMaterial(m, id); },
  isMaterialCompleted(m, id) { return DB.isMaterialCompleted(m, id); },
  isMaterialUnlocked(m, i)   { return DB.isMaterialUnlocked(m, i); },
  isModuleUnlocked(m)        { return DB.isModuleUnlocked(m); },
  isQuizUnlocked(m)          { return DB.isQuizUnlocked(m); },
  getOverallProgress()       { return DB.getOverallProgress(); },

  completeQuiz(moduleId, score, total) {
    return DB.completeQuiz(moduleId, score, total);
  },

  resetProgress() {
    DB.resetProgress();
  }
};
