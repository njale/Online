// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function ()
{
    "use strict";

    var app = angular.module("vegvesenApp", ["ngRoute", "fileServices"]);


    app.config(function ($routeProvider)
    {
        $routeProvider.when("/setup", { templateUrl: "views/setup.html" });
        $routeProvider.when("/startup", { templateUrl: "views/startup.html" });
        $routeProvider.otherwise({ templateUrl: "views/setup.html" });

    });

    app.controller("mainController", function ($scope, $location, fileService)
    {
        //var test = fileService.ReadSettingsfile(null, function () { console.log("Failed to open settings file"); });
        //console.log(test);

        document.addEventListener('deviceready', onDeviceReady.bind(this), false);

        function onDeviceReady()
        {
            // Handle the Cordova pause and resume events
            document.addEventListener('pause', onPause.bind(this), false);
            document.addEventListener('resume', onResume.bind(this), false);

            $location.path("/startup");
            console.log($location.path());
        };
    });
    

    function onPause()
    {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume()
    {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();