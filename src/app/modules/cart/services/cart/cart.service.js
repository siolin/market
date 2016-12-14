export class CartService {
  constructor($http, $log, localStorageService) {
    'ngInject';
    this.$http = $http;
    this.$log = $log;
    this.localStorageService = localStorageService;
    localStorageService.set('cart', '');
  }

  addProduct(id) {
    const cart = this.localStorageService.get('cart');
    return this.localStorageService.set('cart', `${cart}${id};`);
  }
}
