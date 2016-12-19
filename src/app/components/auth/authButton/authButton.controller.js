export class AuthButtonController {
  constructor(authService) {
    'ngInject';
    this.authService = authService;
  }

  checkAuth() {
    return this.authService.checkAuth();
  }
}
