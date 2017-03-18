(function () {
"use strict";

angular.module('private')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['user'];
function MyInfoController(user) {
  var $ctrl = this;
  $ctrl.user = user;
}

})();
