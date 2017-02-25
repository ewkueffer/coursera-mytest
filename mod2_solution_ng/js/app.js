(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;
  toBuyList.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
  toBuyList.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;
  boughtList.boughtItems = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;
  // List of shopping items
  var toBuyItems = [{name: "cookies", quantity: 20},
                    {name: "pizza ", quantity: 1},
                    {name: "bootles of water", quantity: 5},
                    {name: "bootles of beer", quantity: 10},
                    {name: "bootles of red wine", quantity: 2},
                    {name: "bootles of milk", quantity: 3}  ];
  var boughtItems = [];

  service.removeItem = function (itemIndex) {
    console.log("to remove index: " + itemIndex + " item: " + toBuyItems[itemIndex].name);
    boughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };
  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
