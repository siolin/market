export class CartButtonController {
  constructor($log, CartService, $scope) {
    'ngInject';
    this.$log = $log;
    this.$scope = $scope;
    this.window = window;
    this.CartService = CartService;
  }

  $onInit() {
    this.count = this.CartService.countPoducts();
    this.$scope.$on('cartUpdate', () => {
      this.count = this.CartService.countPoducts();
    });
  }
}
