export class AddCartButtonController {
  constructor($log, CartService) {
    'ngInject';
    this.$log = $log;
    this.JSON = JSON;
    this.CartService = CartService;
    // this.buttonDisable = this.checkProductInCart();
    // $log.log(this);
  }

  addProduct() {
    this.CartService.addProduct(this.product, this.ptitle, this.image);
    this.buttonDisable = true;
  }

  // checkProductInCart() {
  //   return this.CartService.checkProduct(this.product);
  // }

  $onInit() {
    this.buttonDisable = this.CartService.checkProduct(this.product);
  }
}
