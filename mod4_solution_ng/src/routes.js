(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/home/home.template.html'
  })
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuCategory/main-categories.template.html',
    controller: 'MainCategoriesController as categories',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/items/{categoryId}',
    templateUrl: 'src/menuItem/main-items.template.html',
    controller: "ItemsController as items",
    resolve: {
      menuitems: ['$stateParams','MenuDataService',
      function ($stateParams,MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.categoryId);
      }],
      shortcatname: ['$stateParams', function($stateParams) {
        return {value: $stateParams.categoryId};
      }]
    }
  })
  .state('items.itemDetail', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/menuItem/item-detail.template.html',
    controller: "ItemDetailController as itemDetail"
  });

}

})();
