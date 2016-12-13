import angular from 'angular';

import 'angular-ui-router';
import 'angular-cookies';
import 'angular-local-storage';
import routesConfig from './routes';

/* Components */
import {mainHeader} from './app/components/mainHeader/mainHeader.component';
import {authButton} from './app/components/auth/authButton/authButton.component';
import {authModal} from './app/components/auth/authModal/authModal.component';

import {login} from './app/components/auth/login/login.component';
import {registrate} from './app/components/auth/registrate/registrate.component';
import {logout} from './app/components/auth/logout/logout.component';

/* Services */
import {AuthService} from './app/services/auth/auth.service';

/* Pages */
import {home} from './app/pages/home/home.component';
import {productDetail} from './app/pages/productDetail/productDetail.component';

import './index.scss';

angular
  .module('app', ['ui.router', 'LocalStorageModule', 'ngCookies'])
  .config(routesConfig)
  .service('authService', AuthService)
  .component('home', home)
  .component('productDetail', productDetail)
  .component('login', login)
  .component('registrate', registrate)
  .component('logout', logout)
  .component('mainHeader', mainHeader)
  .component('authModal', authModal)
  .component('authButton', authButton);
