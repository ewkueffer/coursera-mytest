(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['menuItems', 'shortcatname'];
function ItemsController(menuItems, shortcatname) {
  var items = this;
  console.log("started ItemsController ...menuItems: " + menuItems);
  items.menuItems = menuItems.menu_items;
  items.catname = menuItems.category.name;
  items.shortcatname = shortcatname.value;
}

})();
