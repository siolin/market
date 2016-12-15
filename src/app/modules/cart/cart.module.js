import angular from 'angular';

import routes from './routes';

/* Components */
import {cartButton} from './components/cartButton/cartButton.component';
import {addCartButton} from './components/addCartButton/addCartButton.component';

/* Pages */
import {cart} from './pages/cart/cart.component';

/* Services */
import {CartService} from './services/cart/cart.service';

export const cartModule = 'cartModule';

angular
  .module(cartModule, ['ui.router', 'LocalStorageModule'])
  .config(routes)
  .service('CartService', CartService)
  .component('cart', cart)
  .component('cartButton', cartButton)
  .component('addCartButton', addCartButton);
