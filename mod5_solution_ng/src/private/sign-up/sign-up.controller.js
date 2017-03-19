(function () {
"use strict";

angular.module('private')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['PrivateService','MenuService'];
function SignUpController( PrivateService, MenuService) {
  var $ctrl = this;
  $ctrl.user = {};
  // $ctrl.user.firstname = 'sss';
  // $ctrl.user.menushortname = 'A1';
  // $ctrl.user.email = 'xx@yy.com';
  $ctrl.user.firstname = '';
  $ctrl.user.menushortname = '';
  $ctrl.user.email = '';
  $ctrl.wrongshortname = false;
  $ctrl.reqCompleted = false;

  $ctrl.user = PrivateService.getUserData();

  $ctrl.submit = function (){
    console.log("do the submit");
    $ctrl.wrongshortname = false;
    $ctrl.reqCompleted = false;
    var promise =  MenuService.getMenuItem($ctrl.user.menushortname);

    promise.then(function (response) {
      console.log("menuItem name: " + response.name);
      $ctrl.user.menuItem = response;
      PrivateService.setUserData($ctrl.user);
      $ctrl.reqCompleted = true;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
      $ctrl.wrongshortname = true;
      $ctrl.reqCompleted = true;
    });
  }

  $ctrl.reset = function () {
    $ctrl.wrongshortname = false;
    $ctrl.reqCompleted = false;  
  }


}

})();
