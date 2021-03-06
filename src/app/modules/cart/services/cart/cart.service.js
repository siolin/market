export class CartService {
  constructor($http, $log, localStorageService, $rootScope) {
    'ngInject';
    this.$http = $http;
    this.$log = $log;
    this.$rootScope = $rootScope;
    this.localStorageService = localStorageService;
    this.JSON = JSON;
  }

  addProduct(id, title, img) {
    const data = {
      price: 230,
      count: 1,
      title,
      img
    };
    const totalPrice = data.price * data.count;
    data.totalPrice = totalPrice;
    const cart = this.localStorageService.get('cart') || {};
    cart[id] = data;
    this.localStorageService.set('cart', cart);
    this.$rootScope.$broadcast('cartUpdate');
  }

  getProducts() {
    return this.localStorageService.get('cart');
  }

  checkProduct(product) {
    const cart = this.localStorageService.get('cart');
    for (const id in cart) {
      if (parseInt(id, 10) === parseInt(product, 10)) {
        return true;
      }
    }
    return false;
  }

  countPoducts() {
    const data = this.localStorageService.get('cart');
    if (data) {
      return Object.keys(data).length;
    }
    return 0;
  }

  updateProduct(id, count) {
    const data = this.localStorageService.get('cart');
    data[id].count = count;
    data[id].totalPrice = data[id].price * count;
    this.localStorageService.set('cart', data);
  }

  deleteProduct(productId) {
    const data = this.localStorageService.get('cart');
    for (const id in data) {
      if (parseInt(id, 10) === parseInt(productId, 10)) {
        delete data[id];
      }
    }
    this.localStorageService.set('cart', data);
    this.$rootScope.$broadcast('cartUpdate');
    return true;
  }
}
