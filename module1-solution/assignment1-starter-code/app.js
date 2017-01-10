(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope','$filter'];
function LunchCheckController($scope,$filter) {

  $scope.lunchItme = "Soup,salads,chicken";
  $scope.messageToDisplay="";
  $scope.outMessage = function () {
  $scope.style="color:Green";
  $scope.txtstyle="border-color:Green"
if ($scope.lunchItme) {


    var message="";

    var Items = $scope.lunchItme.split(',').clean("");
    if (Items.length>3) {
     $scope.messageToDisplay="Too much!";
    }
    else {
     $scope.messageToDisplay="Enjoy!";
    }}
    else {
       $scope.messageToDisplay="Please enter data first"
       $scope.style="color:Red";
      $scope.txtstyle="border-color:Red"
    }

  };

}
Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};



})();
