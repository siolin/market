import {AddCartButtonController} from './addCartButton.controller';
import addCartButtonTemplate from './addCartButton.html';

export const addCartButton = {
  bindings: {
    image: '<',
    product: '<',
    title: '<'
  },
  template: addCartButtonTemplate,
  controller: AddCartButtonController
};
