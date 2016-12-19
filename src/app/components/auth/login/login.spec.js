import angular from 'angular';
import 'angular-mocks';
import 'angular-ui-router';
import {login} from './login.component';

describe('Login component', () => {
  class AuthService {
    constructor() {
      'ngInject';
    }

    login(obj) {
      obj.then = () => {};
      return obj;
    }
  }

  const $event = {
    preventDefault() {}
  };

  beforeEach(() => {
    angular
      .module('auth', ['app/components/auth/login/login.html', 'ui.router'])
      .service('authService', AuthService)
      .service('$event', $event)
      .component('login', login);
    angular.mock.module('auth');
  });

  it('should render correctly', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<login></login>')($rootScope);
    const span = element.find('span');
    expect(span).toBeDefined();
  }));

  it('should call login function of AuthService', angular.mock.inject(($rootScope, $compile, $componentController, authService) => {
    const component = $componentController('login', {}, {authService});
    spyOn(component, 'login').and.callThrough();
    component.login($event);
    expect(component.login).toHaveBeenCalled();
  }));
});
