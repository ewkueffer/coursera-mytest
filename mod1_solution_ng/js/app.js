(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope, $filter) {
  $scope.foodItems = "";
  $scope.checkTooMuch = function(){
    var foodString = $scope.foodItems;
    console.log("This is the list got:" + foodString);

    var foodArray = foodString.split(',');
    var filteredFoodArray = [];
    foodArray.forEach(function(item){
      if(item.trim() != '' ){
        filteredFoodArray.push(item.trim());
      }
    });
    console.log(filteredFoodArray + "  " + filteredFoodArray.length);
    if ( filteredFoodArray.length > 3){
      $scope.resultMsg = "Too much!";
    } else if ( filteredFoodArray.length > 0){
      $scope.resultMsg = "Enjoy!";
    } else { // no element
      $scope.resultMsg = "Please enter data first";
    }
    $scope.noteMsg = " ";
    if(foodArray.length != filteredFoodArray.length){
      console.log("found" + foodArray.lenth + "  " + filteredFoodArray.length);
      $scope.noteMsg = "Please note that empty items will be ignored!";
    }
    console.log($scope.resultMsg);
  }

  // $scope.name = "Yaakov";
  //
  // $scope.upper = function () {
  //   var upCase = $filter('uppercase');
  //   $scope.name = upCase($scope.name);
  // };
}

})();
