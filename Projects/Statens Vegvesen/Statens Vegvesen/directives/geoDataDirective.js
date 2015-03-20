(function () {
    "use strict";
    console.log("Creating directive");
    var app = angular.module("vegvesenApp");
    app.directive("geoData", function ($compile, $templateCache) {

        return {
            link: function (scope, element, attrs) {
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