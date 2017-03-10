(function () {
'use strict';

// angular.module('Data')
angular.module('MenuApp')
.component('itemList', {
  templateUrl: 'src/menuList/templates/items.template.html',
  bindings: {
    menuitems: '<'
  }
});

})();
