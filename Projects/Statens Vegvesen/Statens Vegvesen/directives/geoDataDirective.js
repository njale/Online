(function () {
    "use strict";
    console.log("Creating directive");
    var app = angular.module("vegvesenApp");
    app.directive("geoData", function ($compile, $templateCache) {

        //var template = "<ul><li ng-repeat='key in Object.keys(geoData)'>{{10+10}}</li></ul>" +
        //    "<button ng-click='getLocation()' class='btn btn-xs btn-primary'>Refresh</button>"; 

        return {
            link: function (scope, element, attrs) {
                //scope.geoData = scope[attrs["geoData"]];


                scope.$watch("changed", function (newValue, oldValue) {
                    scope.geoData = scope[attrs["geoData"]];
                    var data = $templateCache.get("geolocation.html");
                    element.html(data);
                    $compile(element.contents())(scope);
                });

            },
            restrict: "A"
        }
    });
}())