import {ProductDetailController} from './productDetail.controller';
import productDetailTemplate from './productDetail.html';

export const productDetail = {
  bindings: {
    products: '<',
    comments: '<'
  },
  template: productDetailTemplate,
  controller: ProductDetailController
};
