import {ProductListController} from './productList.controller';
import productListTemplate from './productList.html';

export const productList = {
  bindings: {
    products: '<'
  },
  template: productListTemplate,
  controller: ProductListController
};
