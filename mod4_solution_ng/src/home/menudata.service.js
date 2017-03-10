(function () {
'use strict';

angular.module('MenuApp')
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;

  service.getAllCategories  = function () {
    console.log("started getAllCategories ...");
    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function (response){
      console.log(response.data[0]);
      return response.data;
    }).catch(function (error) {
      console.log("Something went wrong.");
      console.log(response.data);
    });
  }

  // service.getAllCategoriesTest  = function () {
  //   console.log("started getAllCategories faked...");
  //   var items = [];
  //   items.push({
  //     name: "Sugar",
  //     short_name: "s" });
  //   items.push({
  //     name: "Coffee",
  //     short_name: "c" });
  //     console.log("items loged: " + items[1].name);
  //   return items;
  // };

  service.getItemsForCategory = function (categoryShortName) {
    console.log("started getItemsForCategory ... categoryShortName: " + categoryShortName);
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"), ///menu_items.json?category=
      params: {
        category: categoryShortName
      }
    }).then(function (response){
      console.log("length: " + response.data.menu_items.length);
      console.log(response.data.menu_items[0]);
      // return response.data.menu_items;
      return response.data;
    }).catch(function (error) {
      console.log("Something went wrong.");
      console.log(response.data);
    });

  };
}


})();
