(function () {
"use strict";

angular.module('private')
.component('myInfoComp', {
  templateUrl: 'src/public/menu-item/menu-item.html',
  bindings: {
    menuItem: '<'
  },
  controller: MyInfoComponentController
});

MyInfoComponentController.$inject = ['ApiPath'];
function MyInfoComponentController(ApiPath) {
  var $ctrl = this;
  console.log("MyInfoComponentController stated");
  $ctrl.basePath = ApiPath;
}

})();
