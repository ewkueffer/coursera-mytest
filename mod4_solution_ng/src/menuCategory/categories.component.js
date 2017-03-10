(function () {
'use strict';

angular.module('MenuApp')
.component('catList', {
  templateUrl: 'src/menuCategory/categories.template.html',
  bindings: {
    items: '<'
  }
});

})();
