export class AddCartButtonController {
  constructor($log, CartService) {
    'ngInject';
    $log.log(this);
    this.$log = $log;
    this.CartService = CartService;
  }

  addProduct(id) {
    this.CartService.addProduct(id);
  }
}
