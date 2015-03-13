// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function ()
{
    "use strict";

    var app = angular.module("vegvesenApp", ["ngRoute", "settingsServices"]);
    app.constant("appSettings", {"Password": "password3"});

    app.config(function ($routeProvider)
    {
        $routeProvider.when("/setup", { templateUrl: "views/setup.html" });
        $routeProvider.when("/login", { templateUrl: "views/login.html" });
        $routeProvider.when("/startup", { templateUrl: "views/startup.html" });
        //$routeProvider.otherwise({ templateUrl: "views/setup.html" });
    });
})();