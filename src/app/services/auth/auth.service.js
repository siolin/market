export class AuthService {
  constructor($http, localStorageService, $log) {
    'ngInject';
    this.$http = $http;
    this.$log = $log;
    this.localStorageService = localStorageService;

    this.api = {
      base: 'http://smktesting.herokuapp.com',
      registrate: '/api/register/',
      login: '/api/login/'
    };
  }

  logout() {
    return this.localStorageService.remove('token');
  }

  checkAuth() {
    return Boolean(this.localStorageService.get('token'));
  }

  getToken() {
    return this.localStorageService.get('token');
  }

  login(data) {
    return this.$http({
      method: 'POST',
      url: `${this.api.base}${this.api.login}`,
      data
    }).then(
      authInfo => {
        if (authInfo.data.success === true) {
          if (this.localStorageService.set('token', authInfo.data.token)) {
            const results = {
              success: true
            };
            return results;
          }
        } else {
          const results = {
            success: false,
            message: authInfo.data.message
          };
          return results;
        }
      });
  }

  registrate(data) {
    return this.$http({
      method: 'POST',
      url: `${this.api.base}${this.api.registrate}`,
      data
    }).then(
      authInfo => {
        if (authInfo.data.success === true) {
          if (this.localStorageService.set('token', authInfo.data.token)) {
            const results = {
              success: true
            };
            this.$log.log(results);
            return results;
          }
        } else {
          const results = {
            success: false,
            message: authInfo.data.message
          };
          this.$log.log(results);
          return results;
        }
      });
  }
}
