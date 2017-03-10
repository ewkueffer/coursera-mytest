(function () {
'use strict';

angular.module('Data')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['$stateParams', 'menuitems'];
function ItemDetailController($stateParams, menuitems) {
  var itemDetail = this;
  console.log("started ItemDetailController ...menuitems: " + menuitems.menu_items[$stateParams.itemId].name);
  console.log(" itemId: " + $stateParams.itemId);
  var item = menuitems.menu_items[$stateParams.itemId];
  itemDetail.name = item.name;
  itemDetail.short_name = item.short_name;
  itemDetail.description = item.description;
}

})();
