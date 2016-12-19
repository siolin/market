import angular from 'angular';
import 'angular-mocks';
import {ProductsService} from './products.service';

describe('Products service', () => {
  it('should return products', angular.mock.inject(($httpBackend, $http) => {
    const productService = new ProductsService($http);
    $httpBackend
      .expect('GET', "http://smktesting.herokuapp.com/api/products/")
      .respond({data: [{id: 1}, {id: 2}]});
    productService.getProducts();
    $httpBackend.flush();
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }));

  it('should return comments', angular.mock.inject(($httpBackend, $http) => {
    const productService = new ProductsService($http);
    $httpBackend
      .expect('GET', "http://smktesting.herokuapp.com/api/reviews/2")
      .respond({data: [{id: 1}, {id: 2}]});
    productService.getComments(2);
    $httpBackend.flush();
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }));

  it('should return products', angular.mock.inject(($httpBackend, $http) => {
    const productService = new ProductsService($http);
    const data = {
      text: 'lorem',
      rate: '2'
    };
    $httpBackend
      .expect('POST', "http://smktesting.herokuapp.com/api/reviews/2", data)
      .respond({data: [{id: 1}, {id: 2}]});
    productService.addComment(2, data);
    $httpBackend.flush();
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }));
});
