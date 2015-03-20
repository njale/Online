(function () {
    "use strict";

    var app = angular.module("vegvesenApp");
    app.controller("startupController", function ($scope, locationService) {

        $scope.changed = false;
        $scope.getLocation = function () {
            function failFunc(positionError) {

                var explanantion;
                switch (positionError.code) {

                    case PositionError.PERMISSION_DENIED:
                        explanantion = "Please enable location services on device.";
                        break;

                    case PositionError.POSITION_UNAVAILABLE:
                        explanantion = "Location not available. Please try again later.";
                        break;

                    case PositionError.TIMEOUT:
                        explanantion = "Retrival of position timed out. Please try again later.";
                        break;

                    default:
                        explanantion = "Retrieval of position failed";
                        break;
                }

                var alertMessage = String.format('{0}Error-code: {1}\n\n{2}', positionError.message, positionError.code, explanantion);
                navigator.notification.alert(alertMessage);

                console.log("Failed to retrieve location "+ positionError.message);
            }

            locationService.GetLocation(
                function (locationData) {
                    if (JSON.stringify($scope.locationData) !== JSON.stringify(locationData)) {
                        $scope.locationData = locationData;
                        $scope.changed = !$scope.changed;
                    }
                }, failFunc);

        }


        $scope.locationData = $scope.getLocation();
    });
}());