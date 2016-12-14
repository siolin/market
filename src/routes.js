export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('productList', {
      url: '/',
      component: 'productList',
      resolve: {
        products(ProductsService) {
          return ProductsService.getProducts();
        }
      }
    })
    .state('product', {
      url: '/product/{productId}',
      component: 'productDetail',
      resolve: {
        product(ProductsService, $stateParams) {
          return ProductsService.getProduct($stateParams.productId);
        },
        comments($stateParams, ProductsService) {
          return ProductsService.getComments($stateParams.productId);
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
    })
    .state('logout', {
      url: '/logout',
      component: 'logout'
    });
}
