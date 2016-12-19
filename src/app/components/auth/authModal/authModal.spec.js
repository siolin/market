import angular from 'angular';
import 'angular-mocks';
import {authModal} from './authModal.component';

describe('Auth Button component', () => {
  beforeEach(() => {
    angular
      .module('auth', ['app/components/auth/authModal/authModal.html'])
      .component('authModal', authModal);
    angular.mock.module('auth');
  });

  it('should render correctly', angular.mock.inject(($rootScope, $compile) => {
    const $scope = $rootScope.$new();
    const element = $compile('<auth-modal></auth-modal>')($scope);
    const div = element.find('div');
    expect(div).toBeDefined();
  }));
});
