import {ProductDetailController} from './productDetail.controller';
import productDetailTemplate from './productDetail.html';

export const productDetail = {
  bindings: {
    product: '<',
    comments: '<'
  },
  template: productDetailTemplate,
  controller: ProductDetailController
};
