export class ProductsService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  getProducts() {
    return this.$http.get('http://smktesting.herokuapp.com/api/products/').then(
      data => {
        return data.data;
      }
    );
  }

  getProduct(id) {
    return this.$http.get('http://smktesting.herokuapp.com/api/products/').then(
      data => {
        for (const product of data.data) {
          if (product.id === parseInt(id, 10)) {
            return product;
          }
        }
      }
    );
  }

  getComments(id) {
    return this.$http.get(`http://smktesting.herokuapp.com/api/reviews/${id}`).then(
      data => {
        return data.data;
      }
    );
  }

  addComment(id, data) {
    return this.$http.post(`http://smktesting.herokuapp.com/api/reviews/${id}`, data).then(
      data => {
        return data.data;
      }
    );
  }
}
