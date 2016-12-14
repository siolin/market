import {ListController} from './list.controller';
import listTemplate from './list.html';

export const list = {
  bindings: {
    products: '<'
  },
  template: listTemplate,
  controller: ListController
};
