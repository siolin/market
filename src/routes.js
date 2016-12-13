export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home',
      resolve: {
        products($http, $log) {
          return $http.get('http://smktesting.herokuapp.com/api/products/').then(
            data => {
              $log.log(data);
            },
            error => {
              $log.log(error);
            });
        }
      }
    })
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
    });
}
