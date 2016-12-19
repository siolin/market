import angular from 'angular';
import 'angular-mocks';
import 'angular-ui-router';
import {registrate} from './registrate.component';

describe('Registrate component', () => {
  class AuthService {
    constructor() {
      'ngInject';
    }

    registrate(obj) {
      obj.then = () => {};
      return obj;
    }
  }

  const $event = {
    preventDefault() {}
  };

  beforeEach(() => {
    angular
      .module('auth', ['app/components/auth/registrate/registrate.html', 'ui.router'])
      .service('authService', AuthService)
      .service('$event', $event)
      .component('registrate', registrate);
    angular.mock.module('auth');
  });

  it('should render correctly', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<registrate></registrate>')($rootScope);
    const span = element.find('span');
    expect(span).toBeDefined();
  }));

  it('should call registrate function of AuthService', angular.mock.inject(($rootScope, $compile, $componentController) => {
    const component = $componentController('registrate', {}, {});
    spyOn(component, 'registrate').and.callThrough();
    component.registrate($event);
    expect(component.registrate).toHaveBeenCalled();
  }));
});
