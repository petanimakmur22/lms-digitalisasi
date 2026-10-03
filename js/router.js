/* ===== SPA ROUTER ===== */

const Router = {
  currentRoute: null,
  params: {},

  init() {
    window.addEventListener('popstate', () => this.handleRoute());
    this.handleRoute();
  },

  navigate(route, params = {}) {
    this.params = params;
    history.pushState({ route, params }, '', `#${route}`);
    this.handleRoute();
  },

  handleRoute() {
    const hash = window.location.hash.slice(1) || 'home';
    const state = history.state;
    
    if (state && state.params) {
      this.params = state.params;
    }

    this.currentRoute = hash;

    if (!Auth.isLoggedIn() && hash !== 'login' && hash !== 'register') {
      this.navigate('login');
      return;
    }

    if (Auth.isLoggedIn() && (hash === 'login' || hash === 'register')) {
      this.navigate('home');
      return;
    }

    App.render(hash, this.params);
  }
};
