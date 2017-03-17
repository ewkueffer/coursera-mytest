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
                        phone: '556667777'}];

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
    if (service.getUserData(userData.email) == undefined){
      userDataArray.push(userData);
    }
  };
}

})();
