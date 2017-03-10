(function () {
'use strict';

// angular.module('Data')
angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['MenuDataService', 'menuitems'];
function ItemsController(MenuDataService, menuitems) {
  var items = this;
  console.log("started ItemsController ...menuitems: " + menuitems);
  items.menuitems = menuitems;
}

})();
