(function () {   // by ewkueffer, 19.02.2017
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope']; // to protect from minification

function LunchCheckController ($scope, $filter) {
  $scope.foodItems = "";
  $scope.checkTooMuch = function(){
    var foodString = $scope.foodItems;
    console.log("This is the list got: [" + foodString + "]");

    var foodArray = foodString.split(',');
    var filteredFoodArray = [];
    foodArray.forEach(function(item){
      if(item.trim() != '' ){
        filteredFoodArray.push(item.trim());
      }
    });
    $scope.msgColor = "green";
    console.log(filteredFoodArray + " length: " + filteredFoodArray.length);
    if ( filteredFoodArray.length > 3){
      $scope.resultMsg = "Too much!";
    } else if ( filteredFoodArray.length > 0){
      $scope.resultMsg = "Enjoy!";
    } else { // no element
      $scope.resultMsg = "Please enter data first";
      $scope.msgColor = "red";
    }
    $scope.noteMsg = " ";
    if(foodArray.length != filteredFoodArray.length){
      console.log("items found: " + foodArray.length + " considering: " + filteredFoodArray.length);
      $scope.noteMsg = "Please note that empty items will be ignored!";
    }
    console.log($scope.resultMsg);
  }

  $scope.resetLunchCheck = function(){
    $scope.msgColor = "";
    $scope.noteMsg = "";
    $scope.resultMsg = "";
  }
}

})();
