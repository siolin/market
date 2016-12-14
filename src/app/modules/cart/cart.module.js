import angular from 'angular';

/* Components */
import {cartButton} from './components/cartButton/cartButton.component';
import {addCartButton} from './components/addCartButton/addCartButton.component';

/* Services */
import {CartService} from './services/cart/cart.service';

export const cart = 'cart';

angular
  .module(cart, ['ui.router', 'LocalStorageModule'])
  .service('CartService', CartService)
  .component('cartButton', cartButton)
  .component('addCartButton', addCartButton);
