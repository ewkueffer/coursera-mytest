(function () {
"use strict";

angular.module('private')
.service('PrivateService', PrivateService);

PrivateService.$inject = [];
function PrivateService() {
  var service = this;
  var userDataArray = [{firstName: 'Bob',
                        lastName: 'Smith',
                        email: 'bob@yyy.com',
                        phone: '556667777',
                        menushortname: 'S'}];

  service.getUserData = function (email) {
    console.log("get userData for email: " + email);
    for (var i=0; i <  userDataArray.length; i++){
      if (userDataArray[i].email === email) {
        return userDataArray[i];
      }
    }
  };

  service.setUserData = function (userData) {
    console.log("set userData: " + userData);
    var found = false;
    // if (oldUserData != undefined){
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
