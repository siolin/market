import angular from 'angular';
import 'angular-mocks';
import {authButton} from './authButton.component';

describe('Auth Button component', () => {
  class AuthService {
    constructor() {
      'ngInject';
    }

    checkAuth() {
      return true;
    }
  }

  beforeEach(() => {
    angular
      .module('auth', ['app/components/auth/authButton/authButton.html'])
      .service('authService', AuthService)
      .component('authButton', authButton);
    angular.mock.module('auth');
  });

  it('should render correctly', angular.mock.inject(($rootScope, $compile) => {
    const $scope = $rootScope.$new();
    const element = $compile('<auth-button></auth-button>')($scope);
    const a = element.find('a');
    expect(a).toBeDefined();
  }));

  it('should render with links', angular.mock.inject(($rootScope, $compile, $componentController) => {
    const component = $componentController('authButton', {}, {});
    spyOn(component, 'checkAuth').and.callThrough();
    component.checkAuth();
    expect(component.checkAuth).toHaveBeenCalled();
  }));
});
