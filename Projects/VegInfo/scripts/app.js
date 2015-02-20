'use strict';

/* Create all modules */
var vegInfoApp = angular.module('vegInfoApp', ['ngRoute']);
//var vegInfoApp = angular.module('vegInfoApp');

//vegInfoApp.constant("locationConfig", {
//    "timeout": 15000,
//    "enableHighAccuracy": true
//});

vegInfoApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/startup.html',
        controller: 'LocationInfoCtrl'
    })
    .otherwise({ templateUrl: 'pages/startup.html', controller: 'LocationInfoCtrl' });
});
