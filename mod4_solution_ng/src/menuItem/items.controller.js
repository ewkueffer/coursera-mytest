(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['MenuDataService', 'menuItems', 'shortcatname'];
function ItemsController(MenuDataService, menuItems, shortcatname) {
  var items = this;
  console.log("started ItemsController ...menuItems: " + menuItems);
  items.menuItems = menuItems.menu_items;
  items.catname = menuItems.category.name;
  items.shortcatname = shortcatname.value;
}

})();
