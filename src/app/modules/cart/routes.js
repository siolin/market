export default routes;

/** @ngInject */
function routes($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');

  $stateProvider
    .state('cart', {
      url: '/cart',
      component: 'cart'
    });
}
