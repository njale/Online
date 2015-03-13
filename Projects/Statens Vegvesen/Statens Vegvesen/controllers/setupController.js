(function () {
    "use strict";

    var app = angular.module("vegvesenApp");

    app.controller("setupController", function ($scope, $location, settingsService, appSettings) {
        document.addEventListener('deviceready', onDeviceReady.bind(this), false);

        function onDeviceReady() {
            // Handle the Cordova pause and resume events
            document.addEventListener('pause', onPause.bind(this), false);
            document.addEventListener('resume', onResume.bind(this), false);

            getCredentials();
        };

        function getCredentials() {
            settingsService.ReadSettingsfile(onGetCredentials, onGetCredentialsFailed);
        };


        function onGetCredentials(result) {
            $scope.$apply(function () {
                console.log("Retrieved credentials: " + result);
                var settings = JSON.parse(result);

                if (settings.Password !== appSettings.Password)
                    $location.path("/login");
                else
                    $location.path("/startup");
            });
        }

        function onGetCredentialsFailed(fileError) {
            console.log("Failed to get credentials: " + fileError);
            $scope.$apply(function () { $location.path("/login"); });
        }


    });

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
        console.log("Paused");
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
        console.log("Resume");
    };

})();