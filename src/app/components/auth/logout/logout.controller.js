export class LogoutController {
  constructor($state, authService) {
    'ngInject';
    authService.logout();
    $state.go('productList');
  }
}
