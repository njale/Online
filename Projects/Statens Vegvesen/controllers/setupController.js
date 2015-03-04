(function ()
{
    "use strict";

    var app = angular.module("vegvesenApp");

    app.controller("setupController", function ($scope, $location)
    {
        document.addEventListener('deviceready', onDeviceReady.bind(this), false);

        function onDeviceReady()
        {
            // Handle the Cordova pause and resume events
            document.addEventListener('pause', onPause.bind(this), false);
            document.addEventListener('resume', onResume.bind(this), false);

            $scope.$apply(function() {$location.path("/startup");});
        };




        //var test = fileService.ReadSettingsfile(null, function () { console.log("Failed to open settings file"); });
        //console.log(test);
    });




    function onPause()
    {
        // TODO: This application has been suspended. Save application state here.
        console.log("Paused");
    };

    function onResume()
    {
        // TODO: This application has been reactivated. Restore application state here.
        console.log("Resume");
    };

})();