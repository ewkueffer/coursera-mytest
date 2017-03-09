(function () {
'use strict';

angular.module('MenuApp')
.component('catList', {
  templateUrl: 'src/menuList/templates/categories.template.html',
  bindings: {
    items: '<'
  }
});

})();
