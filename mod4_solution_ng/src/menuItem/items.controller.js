(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['MenuDataService', 'menuitems', 'shortcatname'];
function ItemsController(MenuDataService, menuitems, shortcatname) {
  var items = this;
  console.log("started ItemsController ...menuitems: " + menuitems);
  items.menuitems = menuitems.menu_items;
  items.catname = menuitems.category.name;
  items.shortcatname = shortcatname.value;
}

})();
