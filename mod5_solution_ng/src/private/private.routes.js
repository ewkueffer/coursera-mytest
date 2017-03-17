(function() {
  'use strict';

  angular.module('private')
  .config(routeConfig);

  /**
   * Configures the routes and views
   */
  routeConfig.$inject = ['$stateProvider'];
  function routeConfig ($stateProvider) {
    // Routes
    $stateProvider
      .state('private', {
        absract: true,
        templateUrl: 'src/private/private.html'
      })
      .state('private.signup', {
        url: '/private/sign-up',
        templateUrl: 'src/private/sign-up/sign-up.html'
      })
      .state('private.myinfo', {
        url: '/private/my-info',
        templateUrl: 'src/private/my-info/my-info.html'
      });

}

})();
