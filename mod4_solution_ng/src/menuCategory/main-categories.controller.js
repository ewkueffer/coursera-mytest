(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoriesController', MainCategoriesController);

MainCategoriesController.$inject = ['items'];
function MainCategoriesController(items) {
  var categories = this;
  console.log("started MainCategoriesController ...");
  categories.items = items;
}

})();
