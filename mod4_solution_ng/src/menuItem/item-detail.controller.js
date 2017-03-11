(function () {
'use strict';

angular.module('Data')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['$stateParams', 'menuItems'];
function ItemDetailController($stateParams, menuItems) {
  var itemDetail = this;
  console.log("started ItemDetailController ...menuItems: " + menuItems.menu_items[$stateParams.itemId].name);
  console.log(" itemId: " + $stateParams.itemId);
  var item = menuItems.menu_items[$stateParams.itemId];
  itemDetail.name = item.name;
  itemDetail.short_name = item.short_name;
  itemDetail.description = item.description;
}

})();
