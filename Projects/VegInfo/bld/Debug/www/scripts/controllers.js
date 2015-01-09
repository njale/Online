'use strict';

/* Controllers */

var vegInfoControllers = angular.module('vegInfoControllers', []);

vegInfoControllers.controller('LocationInfoCtrl', ['$scope', function ($scope) {
    $scope.Fylke = "AKERSHUS";
    $scope.Kommune = 'BÆRUM';
    $scope.Vegreferanse = "163086";
    $scope.Vegnavn = "KV 4696 HP1 m199";
    $scope.Lengdegrad = "10.53642342695936";
    $scope.Breddegrad = "63.41487102189043";
    $scope.Avvik = "20-50m";
}]);

//vegInfoControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
//  function ($scope, $routeParams, $http) {
//      $http.get('phones/' + $routeParams.phoneId + '.json').success(function (data) {
//          $scope.phone = data;
//          $scope.mainImageUrl = data.images[0];
//      });

//      $scope.setImage = function(imageUrl) {
//          $scope.mainImageUrl = imageUrl;
//      }
//  }]);

//vegInfoControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', function ($scope, $routeParams, Phone) {
//    $scope.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
//        $scope.mainImageUrl = phone.images[0];
//    });

//    $scope.setImage = function (imageUrl) {
//        $scope.mainImageUrl = imageUrl;
//    }
//}]);
