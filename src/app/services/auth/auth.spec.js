import angular from 'angular';
import 'angular-mocks';
import 'angular-local-storage';
import {AuthService} from './auth.service';

describe('Products service', () => {
  beforeEach(angular.mock.module('LocalStorageModule'));

  it('should add token in localStorage', angular.mock.inject(($http, localStorageService) => {
    const authService = new AuthService($http, localStorageService);
    const token = 'token';
    expect(authService.addToken(token)).toBe(true);
  }));

  it('should remove token from localStorage', angular.mock.inject(($http, localStorageService) => {
    const authService = new AuthService($http, localStorageService);
    const token = 'token';
    authService.addToken(token);
    expect(authService.logout()).toBe(true);
  }));

  it('should get token', angular.mock.inject(($http, localStorageService) => {
    const authService = new AuthService($http, localStorageService);
    const token = 'token';
    authService.addToken(token);
    expect(authService.getToken()).toMatch('token');
  }));

  it('should chech auth', angular.mock.inject(($http, localStorageService) => {
    const authService = new AuthService($http, localStorageService);
    const token = 'token';
    authService.addToken(token);
    expect(authService.checkAuth()).toBe(true);
  }));

  it('should return obj with token after auth', angular.mock.inject(($http, localStorageService, $httpBackend) => {
    const authService = new AuthService($http, localStorageService);
    const backend = $httpBackend;
    backend
      .expect("POST", "http://smktesting.herokuapp.com/api/login/")
      .respond({success: true, token: "03f3802e241b86afc287ae9479a6f6f556e5ca5a"});
    authService.login();
    $httpBackend.flush();
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }));

  it('should return obj with token after ragisration', angular.mock.inject(($http, localStorageService, $httpBackend) => {
    const authService = new AuthService($http, localStorageService);
    const backend = $httpBackend;
    backend
      .expect("POST", "http://smktesting.herokuapp.com/api/register/")
      .respond({});
    authService.registrate();
    $httpBackend.flush();
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }));
});
