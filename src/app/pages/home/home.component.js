import {HomeController} from './home.controller';
import homeTemplate from './home.html';

export const home = {
  bindings: {
    products: '<'
  },
  template: homeTemplate,
  controller: HomeController
};
