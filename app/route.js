// Routing for single page application
(function () {
    'use strict';
    var app = angular.module("HMSApp", ['ngRoute']);

    app.config(function ($routeProvider) {
        //Default page
        $routeProvider.when('/', {
            templateUrl: '/app/Pages/WelcomePage.html',
            controller: 'WelcomePage'
        })
        //Women Literacy page
        $routeProvider.when('/WomenLiteracy', {
            templateUrl: '/app/Pages/WomenLiteracy.html',
            controller: 'WelcomePage'
        })
        //Literacy Data page
        $routeProvider.when('/WomenLiteracyData', {
            templateUrl: '/app/Pages/WomenLiteracyData.html',
            controller: 'WomenLiteracyData'
        })
        //Children Malnutrition page
        $routeProvider.when('/ChildrenMalnutrition', {
            templateUrl: '/app/Pages/ChildrenMalnutrition.html',
            controller: ''
        })
        
  .otherwise({ redirectTo: '/' });

    });

})();