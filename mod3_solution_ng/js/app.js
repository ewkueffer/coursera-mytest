(function () {
'use strict';

// set https
angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'itemsFoundList.html',
    scope: {
      found: '<',
      showWarn: '<show',
      onRemove: '&'
    },
    controller: DummyDirectiveController,
    controllerAs: 'ctl',
    bindToController: true,
  };
  return ddo;
}

function DummyDirectiveController() {
}

NarrowItDownController.$inject = ['MenuSearchService', '$timeout'];
function NarrowItDownController(MenuSearchService, $timeout) {
  var ctl = this;

  ctl.searchTerm = "";
  // ctl.found = [{short_name: "A", name: "Any", description: "..."}, {short_name: "B", name: "Bla", description: "..."}];
  ctl.found = [];
  ctl.showWarn = false;

  ctl.searchMenu = function(){
    console.log("started searchMenu ... for searchTerm: " + ctl.searchTerm);
    ctl.removeAllItems();
    if (ctl.searchTerm != ""){
      removeWarning();
      ctl.found = MenuSearchService.getMatchedMenuItems(ctl.searchTerm);
      console.log("finished to search: [" + ctl.found + "]");
      $timeout(function () {
        console.log("timeout");
        processDisplayWarning();
      }, 2000);
    } else {
      displayWarning();
    }
  };

  ctl.removeItem = function (itemIndex) {
    console.log("remove itemIndex: "+ itemIndex);
    MenuSearchService.removeItem(itemIndex);
    processDisplayWarning();
  };

  ctl.removeAllItems = function (){
    console.log("remove all");
    MenuSearchService.removeAllItems();
  }

  function processDisplayWarning(){
    console.log("processDisplayWarning");
    if (MenuSearchService.isFoundItemsEmpty()){
      displayWarning();
    } else {
      removeWarning();
    }
  }

  function displayWarning() {
    console.log("displayWarning");
    ctl.showWarn = true;
  }

  function removeWarning() {
    console.log("removeWarning");
    ctl.showWarn = false;
  }
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

  service.removeItem = function (itemIndex) {
    foundItems.splice(itemIndex, 1);
  };

  service.removeAllItems = function () {
    //  foundItems = [];
    while (foundItems.length > 0){
      foundItems.pop();
    }
  };

  service.getFoundItems = function () {
    return foundItems;
  };

  service.isFoundItemsEmpty = function () {
    return foundItems.length == 0;
  }
}

})();
