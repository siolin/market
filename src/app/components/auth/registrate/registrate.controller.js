export class RegistrateController {
  constructor($state, authService) {
    'ngInject';
    this.$state = $state;
    this.authService = authService;
  }

  registrate(e) {
    e.preventDefault();
    if (this.password === this.confirmPassword) {
      this.errorMessage = undefined;
      this.authService.registrate({
        username: this.username,
        password: this.password
      }).then(data => {
        if (data.success) {
          this.$state.go('list');
        } else {
          this.errorMessage = data.message;
        }
      });
    } else {
      this.errorMessage = 'Проверте правильность введеного пароля';
    }
  }
}
