(function ()
{
    "use strict";

    var app = angular.module("vegvesenApp");

    app.controller("loginController", function ($scope, $location, settingsService)
    {
        $scope.username = "njaleide@hotmail.com";
        $scope.password = "password";
        $scope.authenticationError = null;

        $scope.authenticate = function(userName, password) {
            if(password == "password")
            {
                $scope.authenticationError = null;
                var settings = {
                    UserName: userName,
                    Password: password
                };

                settingsService.SaveSettingsFile(settings, function () {
                    $scope.$apply(function () { $location.path("/startup"); });
                },
                function(result) {
                    $scope.authenticationError = "Failed to save settings: " +  result;
                });
                
            }
            else
            {
                $scope.authenticationError = "Invalid credentials";
            };

        };
    });
})();