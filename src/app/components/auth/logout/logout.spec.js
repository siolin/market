import angular from 'angular';
import 'angular-mocks';
import 'angular-ui-router';
import {logout} from './logout.component';

describe('Logout component', () => {
  class AuthService {
    constructor() {
      'ngInject';
    }

    logout() {}
}

  beforeEach(() => {
    angular
      .module('auth', ['app/components/auth/login/login.html', 'ui.router'])
      .service('authService', AuthService)
      .component('logout', logout);
    angular.mock.module('auth');
  });

  it('should render correctly', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<logout></logout>')($rootScope);
    expect(element).toBeDefined();
  }));
});
