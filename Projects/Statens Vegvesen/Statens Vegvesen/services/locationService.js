(function () {
    "use strict";

    var module = angular.module("locationServices", []);
    module.factory("locationService", function ()
    {
        function getCurrentLocation(successFunc, failFunc) {
            var locationOptions = { timeout: 3000, enableHighAccuracy: true };

            function locationSuccess(loc) {
                // We received something from the API, so first get the timestamp in a date object so we can work with it 
                var date = new Date(loc.timestamp);
                var result = {
                    Date: date.toLocaleString(),
                    Latitude: loc.coords.latitude,
                    Longtitude: loc.coords.longitude,
                    Altitude: loc.coords.altitude,
                    Accuracy: loc.coords.accuracy,
                    AltitudeAccuracy: loc.coords.altitudeAccuracy,
                    Heading: loc.coords.heading,
                    Speed: loc.coords.speed
                };

                successFunc(result);
            }

            navigator.geolocation.getCurrentPosition(locationSuccess, failFunc, locationOptions);
        }

        return {
            GetLocation: getCurrentLocation
        };
    });
})();