import angular from 'angular';
import 'angular-mocks';
import {ProductsService} from './products.service';

describe('Products service', () => {
  it('should return products', angular.mock.inject($http => {
    const productService = new ProductsService($http);
    expect(productService.getProducts()).toEqual(jasmine.any(Object));
  }));

  it('should return comments', angular.mock.inject($http => {
    const productService = new ProductsService($http);
    expect(productService.getComments(1)).toEqual(jasmine.any(Object));
  }));

  it('should add comments', angular.mock.inject($http => {
    const productService = new ProductsService($http);
    expect(productService.addComment(1)).toEqual(jasmine.any(Object));
  }));
});
