import angular from 'angular';

import 'angular-ui-router';
// import routesConfig from './routes';

/* Components */
import {mainHeader} from './app/components/mainHeader/mainHeader.component';
import {authButton} from './app/components/auth/authButton/authButton.component';

import './index.scss';

angular
  .module('app', ['ui.router'])
  // .config(routesConfig)
  .component('mainHeader', mainHeader)
  .component('authButton', authButton);
