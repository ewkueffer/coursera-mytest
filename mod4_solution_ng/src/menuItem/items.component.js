(function () {
'use strict';

angular.module('Data')
.component('itemList', {
  templateUrl: 'src/menuItem/items.template.html',
  bindings: {
    menuitems: '<'
  }
});

})();
