
var viewSwitchApp = angular.module('viewSwitchApp', [])

viewSwitchApp.controller('mainController', function($scope) {
        $scope.message = 'Everyone come and see how good I look!';
    });

    viewSwitchApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    viewSwitchApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });

viewSwitchApp.config(function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: 'index.html',
            controller: 'mainController'
        })
        .when('/about', {
            templateUrl: 'index.html',
            controller: 'mainController'
        })
        .when('/blog', {
            templateUrl: 'blog.html',
            controller: 'mainController'
        })
        .when('/portfolio', {
            templateUrl: 'portfolio.html',
            controller: 'mainController'
        })
        .when('/contact', {
            templateUrl: 'contact.html',
            controller: 'mainController'
        })
})