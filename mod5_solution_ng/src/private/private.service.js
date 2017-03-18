(function () {   // by ewkueffer, 18.03.2017
"use strict";

angular.module('private')
.service('PrivateService', PrivateService);

PrivateService.$inject = [];
function PrivateService() {
  var service = this;
  var userDataArray = [];
  // var userDataArray = [{firstname: 'Bob',
  //                       lastname: 'Smith',
  //                       email: 'bob@yyy.com',
  //                       phone: '556667777',
  //                       menushortname: 'S'}];

  service.getUserData = function (email) {
    console.log("get userData for email: " + email);
    if (email == undefined){
      return userDataArray[0];
    }
    for (var i=0; i <  userDataArray.length; i++){
      if (userDataArray[i].email === email) {
        return userDataArray[i];
      }
    }
  };

  service.setUserData = function (userData) {
    console.log("set userData: " + userData);
    for (var i=0; i <  userDataArray.length; i++){
      if (userDataArray[i].email === userData.email) {
        console.log("found user data, remove it first");
          userDataArray.splice(i, 1);
          break;
      }
    }
    console.log("store user data for email: " + userData.email);
    userDataArray.push(userData);
  };
}

})();
