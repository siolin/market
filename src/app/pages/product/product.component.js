import {ProductController} from './product.controller';
import productTemplate from './product.html';

export const product = {
  bindings: {
    product: '<',
    comments: '<'
  },
  template: productTemplate,
  controller: ProductController
};
