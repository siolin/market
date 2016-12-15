export class CartController {
  constructor($log, CartService) {
    'ngInject';
    this.$log = $log;
    this.CartService = CartService;
  }

  up(index) {
    const product = this.products[index];
    product.count += 1;
    product.countDown = {
      visibility: 'visible'
    };
    this.totalPrice();
    this.updateCart(index, product.count);
  }

  down(index) {
    const product = this.products[index];
    product.count -= 1;
    if (product.count === 0) {
      product.countDown = {
        visibility: 'hidden'
      };
      this.totalPrice();
      this.updateCart(index, product.count);
      return;
    }
    this.totalPrice();
    this.updateCart(index, product.count);
  }

  totalPrice() {
    this.total = 0;
    for (const prop in this.products) {
      if (prop) {
        this.total += this.products[prop].count * this.products[prop].price;
      }
    }
  }

  updateCart(id, count) {
    this.CartService.updateProduct(id, count);
    this.products = this.CartService.getProducts();
  }

  deleteProduct(id) {
    if (this.CartService.deleteProduct(id)) {
      this.products = this.CartService.getProducts();
    }
    this.totalPrice();
  }

  $onInit() {
    this.total = 0;
    this.products = this.CartService.getProducts();
    this.totalPrice();
  }
}
