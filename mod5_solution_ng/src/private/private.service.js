(function () {   // by ewkueffer, 18.03.2017
"use strict";

angular.module('private')
.service('PrivateService', PrivateService);

PrivateService.$inject = [];
function PrivateService() {
  var service = this;
  service.userData = {};

  service.getUserData = function (email) {
    console.log("get userData for email: " + email);
    if (service.userData != {}){
      console.log(" getUserData for firstname: " + service.userData.firstname);
      // make sure that a copy is done to avoid that a change on the reference is done without saving
      return Object.assign({}, service.userData);
    }
    return service.userData;
  };

  service.setUserData = function (userData) {
    console.log("store user data for email: " + userData.email + " firstname: " + userData.firstname);
    service.userData = userData;
  };
}
// function PrivateService() {
//   var service = this;
//   var userDataArray = [];
//   // var userDataArray = [{firstname: 'Bob',
//   //                       lastname: 'Smith',
//   //                       email: 'bob@yyy.com',
//   //                       phone: '556667777',
//   //                       menushortname: 'S'}];
//
//   service.getUserData = function (email) {
//     console.log("get userData for email: " + email);
//     if (email === undefined){
//       if (userDataArray.length > 0){
//         // make sure that a copy is done to avoid that a change on the reference is done without saving
//         return Object.assign({}, userDataArray[0]);
//       }
//       return userDataArray[0];
//     }
//     for (var i=0; i <  userDataArray.length; i++){
//       if (userDataArray[i].email === email) {
//         return Object.assign({}, userDataArray[i]);
//       }
//     }
//   };
//
//   service.setUserData = function (userData) {
//     console.log("set userData: " + userData);
//     // for (var i=0; i <  userDataArray.length; i++){
//     //   if (userDataArray[i].email === userData.email) {
//     //     console.log("found user data, remove it first");
//     //       userDataArray.splice(i, 1);
//     //       break;
//     //   }
//     // }
//     userDataArray.splice(0, 1);
//     console.log("store user data for email: " + userData.email);
//     userDataArray.push(userData);
//   };
// }
})();
