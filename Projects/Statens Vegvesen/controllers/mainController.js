(function ()
{
    "use strict";

    var app = angular.module("vegvesenApp");

    app.controller("mainController", function ($location)
    {
        $location.path("/setup");
    });
})();