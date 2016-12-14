export class LoginController {
  constructor($state, authService) {
    'ngInject';
    this.$state = $state;
    this.authService = authService;
  }

  login(e) {
    e.preventDefault();
    this.errorMessage = undefined;
    this.authService.login({
      username: this.username,
      password: this.password
    }).then(data => {
      if (data.success) {
        this.$state.go('list');
      } else {
        this.errorMessage = data.message;
      }
    });
  }
}
