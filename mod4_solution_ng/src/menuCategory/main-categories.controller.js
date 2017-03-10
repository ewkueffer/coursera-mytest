(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoriesController', MainCategoriesController);


MainCategoriesController.$inject = ['MenuDataService', 'items'];
function MainCategoriesController(MenuDataService, items) {
  var categories = this;
  console.log("started MainCategoriesController ...");
  categories.items = items;
}

})();
