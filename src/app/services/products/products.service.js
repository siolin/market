export class ProductsService {
  constructor($http, $log) {
    'ngInject';
    this.$http = $http;
    this.$log = $log;
  }

  getProducts() {
    return this.$http.get('http://smktesting.herokuapp.com/api/products/').then(
      data => {
        return data.data;
      },
      error => {
        this.$log.log(error);
      });
  }

  getProduct(id) {
    return this.$http.get('http://smktesting.herokuapp.com/api/products/').then(
      data => {
        for (const product of data.data) {
          if (product.id === parseInt(id, 10)) {
            return product;
          }
        }
      },
      error => {
        this.$log.log(error);
      });
  }

  getComments(id) {
    return this.$http.get(`http://smktesting.herokuapp.com/api/reviews/${id}`).then(
      data => {
        return data.data;
      },
      error => {
        this.$log.log(error);
      });
  }
}
