export class AuthButtonController {
  constructor($cookies, localStorageService, $state, $rootScope) {
    'ngInject';
    this.$cookies = $cookies;
    this.localStorageService = localStorageService;
    this.$state = $state;
    this.$rootScope = $rootScope;

    this.state = {
      logIn: 'Вход',
      registrate: 'Регистрация',
      logOut: 'Выход'
    };
  }

  logout(e) {
    e.preventDefault();
    this.$cookies.remove('token');
    this.localStorageService.remove('token');
    this.$rootScope.auth = false;
    this.$state.go('home');
  }
}
