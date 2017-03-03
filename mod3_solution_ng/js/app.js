(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctl = this;

  ctl.test = function(){
    console.log("started test ... ")
    MenuSearchService.getMatchedMenuItems("chicken");
  };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  var foundItems = [];

  service.getMatchedMenuItems = function (searchTerm) {
    console.log("started getMatchedMenuItems ..., searchTerm: " + searchTerm);
    function getAllMenuItems(){
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      });
      return response;
    };
    var promise = getAllMenuItems();
    promise.then(function(response){
      service.allMenuItems = response.data;
      console.log(" number of items: " + service.allMenuItems.menu_items.length);
      for (var i =0; i< service.allMenuItems.menu_items.length; i++){
        var descr = service.allMenuItems.menu_items[i].description;
        // console.log("description: " + descr);
        if (descr.indexOf(searchTerm) > -1){
          console.log("found in item shortName: " + service.allMenuItems.menu_items[i].short_name + ", " + descr);
          foundItems.push(service.allMenuItems.menu_items[i]);
        }
      }
    })
    .catch(function (error) {
      console.log("Something went wrong.");
      console.log(response.data);
    });

    return foundItems;
  }



}




})();
