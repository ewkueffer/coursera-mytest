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
    controller: WarningDirectiveController,
    controllerAs: 'ctl',
    bindToController: true,
    link: WarningDirectiveLink
  };
  return ddo;
}

function WarningDirectiveLink(scope, element, attrs, controller) {
  console.log("Controller instance is: ", controller);
  console.log("Element is: ", element);

  scope.$watch('ctl.listEmpty()', function (newValue, oldValue) {
    console.log("Old value: ", oldValue);
    console.log("New value: ", newValue);

    if (newValue === true) {
      displayWarning();
    } else {
      removeWarning();
    }
  });
  function displayWarning() {
    console.log("displayWarning");
    // Using Angluar jqLite
    // var warningElem = element.find("div");
    // warningElem.css('display', 'block');
    // If jQuery included before Angluar
    var warningElem = element.find("div.warn");
    warningElem.slideDown(10);
  }

  function removeWarning() {
    console.log("removeWarning");
    // Using Angluar jqLite
    // var warningElem = element.find("div");
    // warningElem.css('display', 'none');
    // If jQuery included before Angluar
    var warningElem = element.find("div.warn");
    warningElem.slideUp(10);
  }
}

function WarningDirectiveController() {
  var ctl = this;
  ctl.listEmpty = function () {
    console.log("listEmpty? ctl.showWarn: " + ctl.showWarn + " ctl.found: " + ctl.found);
    if (!ctl.showWarn ){ // be sure that it will not display any warning too early
      return false;
    } else if (ctl.found != null && ctl.found != undefined && ctl.found.length > 0){
      return false;
    } else {
      return true;
    }
  };
}

NarrowItDownController.$inject = ['MenuSearchService', '$timeout'];
function NarrowItDownController(MenuSearchService, $timeout) {
  var ctl = this;

  ctl.searchTerm = "";
  // ctl.found = [{short_name: "A", name: "Any", description: "..."}, {short_name: "B", name: "Bla", description: "..."}];
  ctl.found = [];
  ctl.showWarn = false;
  console.log("started NarrowItDownController");

  ctl.searchMenu = function(){
    enableWarnings();
    console.log("started searchMenu ... for searchTerm: " + ctl.searchTerm);
    ctl.removeAllItems();
    if (ctl.searchTerm != ""){
      ctl.found = MenuSearchService.getMatchedMenuItems(ctl.searchTerm);
      console.log("finished to search: [" + ctl.found + "]");
      // $timeout(function () {
      //   processDisplayWarning();
      // }, 2000);
    }
  };

  ctl.removeItem = function (itemIndex) {
    console.log("remove itemIndex: "+ itemIndex);
    MenuSearchService.removeItem(itemIndex);
    // processDisplayWarning();
  };

  ctl.removeAllItems = function (){
    console.log("remove all");
    MenuSearchService.removeAllItems();
  }

  function enableWarnings(){ // the first time
    ctl.showWarn = true;
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
