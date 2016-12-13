import angular from 'angular';

import 'angular-ui-router';
import routesConfig from './routes';

/* Components */
import {mainHeader} from './app/components/mainHeader/mainHeader.component';
import {authButton} from './app/components/auth/authButton/authButton.component';
import {authModal} from './app/components/auth/authModal/authModal.component';

/* Pages */
import {home} from './app/pages/home/home.component';

import './index.scss';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .component('home', home)
  .component('mainHeader', mainHeader)
  .component('authModal', authModal)
  .component('authButton', authButton);
