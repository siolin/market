export class AuthModalController {
  constructor($http, $log, $cookies, localStorageService, $state, $rootScope) {
    'ngInject';
    this.$http = $http;
    this.$log = $log;
    this.$cookies = $cookies;
    this.localStorageService = localStorageService;
    this.$state = $state;
    this.$rootScope = $rootScope;
    this.api = {
      base: 'http://smktesting.herokuapp.com',
      registrate: '/api/register/',
      login: '/api/login/'
    };
  }

  registrate(e) {
    e.preventDefault();
    if (this.password === this.confirmPassword) {
      this.errorMessage = undefined;
      const req = {
        method: 'POST',
        url: `${this.api.base}${this.api.registrate}`,
        data: {
          username: this.username,
          password: this.password
        }
      };
      this.$http(req).then(
        data => {
          if (data.data.success === true) {
            this.$cookies.put('token', data.data.token);
            this.localStorageService.set('token', data.data.token);
            this.$rootScope.auth = true;
            this.$state.go('home');
          } else {
            this.errorMessage = data.data.message;
          }
        },
        error => {
          this.$log.log(error);
          this.erroMassega = 'Попробуйте позже';
        });
    } else {
      this.errorMessage = 'Проверте правильность введеного пароля';
    }
  }

  login(e) {
    e.preventDefault();
    this.$log.log('login');
    const req = {
      method: 'POST',
      url: `${this.api.base}${this.api.login}`,
      data: {
        username: this.username,
        password: this.password
      }
    };
    this.$http(req).then(
      data => {
        if (data.data.success === true) {
          this.$cookies.remove('token');
          this.$cookies.put('token', data.data.token);
          this.localStorageService.remove('token');
          this.localStorageService.set('token', data.data.token);
          this.$rootScope.auth = true;
          this.$state.go('home');
        } else {
          this.errorMessage = data.data.message;
        }
      },
      error => {
        this.$log.log(error);
        this.erroMassega = 'Попробуйте позже';
      });
  }
}
