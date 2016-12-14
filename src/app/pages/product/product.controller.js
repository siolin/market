export class ProductController {
  constructor(ProductsService, $state, authService) {
    'ngInject';
    this.ProductsService = ProductsService;
    this.$state = $state;
    this.authService = authService;
    this.auth = authService.checkAuth();
  }

  addComment(e) {
    e.preventDefault();
    this.ProductsService.addComment(this.product.id, {
      rate: this.rate,
      text: this.comment
    }).then(data => {
      if (data.success) {
        this.$state.reload('product');
      }
    });
  }
}
