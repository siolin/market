export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('productList', {
      url: '/list',
      component: 'home',
      resolve: {
        products($http, $log) {
          return $http.get('http://smktesting.herokuapp.com/api/products/').then(
            data => {
              return data.data;
            },
            error => {
              $log.log(error);
            });
        }
      }
    })
    // .state('productList.product', {
    //   url: '/{productId}',
    //   component: 'productDetail',
    //   resolve: {
    //     comments($stateParams, $log, $http) {
    //       return $http.get(`http://smktesting.herokuapp.com/api/reviews/${$stateParams.productId}`).then(
    //         data => {
    //           return data.data;
    //         },
    //         error => {
    //           $log.log(error);
    //         }
    //       );
    //     },
    //     products($stateParams, $http, $log) {
    //       return $http.get('http://smktesting.herokuapp.com/api/products/').then(
    //         data => {
    //           return data.data[$stateParams.productId];
    //         },
    //         error => {
    //           $log.log(error);
    //         });
    //     }
    //   }
    // })
    .state('registrate', {
      url: '/registrate',
      component: 'authModal',
      resolve: {
        modalName() {
          return 'registrate';
        }
      }
    })
    .state('login', {
      url: '/login',
      component: 'authModal',
      resolve: {
        modalName() {
          return 'login';
        }
      }
    })
    .state('logout', {
      url: '/logout',
      component: 'logout'
    });
}
