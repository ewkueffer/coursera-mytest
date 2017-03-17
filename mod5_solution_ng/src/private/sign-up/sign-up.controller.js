(function () {
"use strict";

angular.module('private')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['PrivateService'];
function SignUpController( PrivateService) {
  var $ctrl = this;
  $ctrl.user = {};
  // $ctrl.any;
  $ctrl.user.firstname = 'sss';



  $ctrl.submit = function (){
    console.log("do the submit");
    PrivateService.setUserData( $ctrl.user );
  }

  $ctrl.getUserData = function (email) {
    // $ctrl.reg = PrivateService.getUserData(email);
    // return $ctrl.reg;
  }
}

})();
