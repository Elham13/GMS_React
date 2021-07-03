class Auth {
  constructor() {
    this.authenticated = false;
    this.adminAuth = false;
    this.user = JSON.parse(localStorage.getItem("userInfo"));
    if (this.user) {
      if (this.user.role === "admin") this.adminAuth = true;
    }
    if (this.user) this.authenticated = true;
  }

  login(cb) {
    cb();
  }

  logout(cb) {
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }

  isAdmin() {
    return this.adminAuth;
  }
}

export default new Auth();
