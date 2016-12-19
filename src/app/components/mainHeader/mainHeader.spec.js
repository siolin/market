import angular from 'angular';
import 'angular-mocks';
import {mainHeader} from './mainHeader.component';

describe('MainHeader component', () => {
  beforeEach(() => {
    angular
      .module('auth', ['app/components/mainHeader/mainHeader.html'])
      .component('mainHeader', mainHeader);
    angular.mock.module('auth');
  });

  it('should render correctly', angular.mock.inject(($rootScope, $compile) => {
    const $scope = $rootScope.$new();
    const element = $compile('<main-header></main-header>')($scope);
    const a = element.find('a');
    expect(a.html().trim()).toEqual('Market');
  }));
});
