import angular from 'angular';

import 'angular-ui-router';
import 'angular-cookies';
import 'angular-local-storage';
import routesConfig from './routes';

/* Modules */
import {cartModule} from './app/modules/cart/cart.module';

/* Components */
import {mainHeader} from './app/components/mainHeader/mainHeader.component';
import {authButton} from './app/components/auth/authButton/authButton.component';
import {authModal} from './app/components/auth/authModal/authModal.component';

import {login} from './app/components/auth/login/login.component';
import {registrate} from './app/components/auth/registrate/registrate.component';
import {logout} from './app/components/auth/logout/logout.component';

/* Services */
import {AuthService} from './app/services/auth/auth.service';
import {ProductsService} from './app/services/products/products.service';

/* Pages */
import {list} from './app/pages/list/list.component';
import {product} from './app/pages/product/product.component';

import './index.scss';

angular
  .module('app', ['ui.router', 'LocalStorageModule', 'ngCookies', cartModule])
  .config(routesConfig)
  .service('authService', AuthService)
  .service('ProductsService', ProductsService)
  .component('list', list)
  .component('product', product)
  .component('login', login)
  .component('registrate', registrate)
  .component('logout', logout)
  .component('mainHeader', mainHeader)
  .component('authModal', authModal)
  .component('authButton', authButton);

angular.module('app').config(['$httpProvider', $httpProvider => {
  $httpProvider.interceptors.push('request');
}]);

angular.module('app').factory('request', ['$log', 'localStorageService', ($log, localStorageService) => {
  const request = {
    request(config) {
      const token = localStorageService.get('token');
      if (token) {
        config.headers.Authorization = `Token ${localStorageService.get('token')}`;
      }
      return config;
    }
  };
  return request;
}]);
