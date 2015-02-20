'use strict';

/* Controllers */

var app = angular.module('vegInfoApp', []);

//app.controller('LocationInfoCtrl', ['$scope', 'locationConfig', function ($scope, locationConfig) {
app.controller('LocationInfoCtrl', ['$scope', function ($scope) {

    var onSuccess = function (position) {
        alert('Latitude: ' + position.coords.latitude + '\n' +
            'Longitude: ' + position.coords.longitude + '\n' +
            'Accuracy: ' + position.coords.accuracy);
    };

    // onError Callback receives a PositionError object
    function onError(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    }
    
    $scope.message = "Starting up again";

    //var locationOptions = {
    //    timeout: locationConfig.timeout,
    //    enableHighAccuracy: locationConfig.enableHighAccuracy
    //};

    //navigator.geolocation.getCurrentPosition(onSuccess, onError, locationOptions);
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    
    $scope.Fylke = "AKERSHUS";
    $scope.Kommune = 'BÆRUM';
    $scope.Vegreferanse = "163086";
    $scope.Vegnavn = "KV 4696 HP1 m199";
    $scope.Lengdegrad = "10.53642342695936";
    $scope.Breddegrad = "63.41487102189043";
    $scope.Avvik = "20-50m";
}]);

app.controller('StartupCtrl', [
    '$scope', function ($scope) {
        $scope.message = "Starting up";
    }
]);

app.controller('notFoundController', [
    '$scope', function ($scope) {
        $scope.message = "Not found";
    }
]);

