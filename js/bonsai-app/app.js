var app = angular.module('bonsaiApp', ['ngResource', 'ngRoute', 'bonsaiService']);
// todo switch to $stateProvider
app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/bonsai', {
            templateUrl: 'partials/bonsai-list.html'
        }).
        when('/bonsai/:bonsaiId', {
            templateUrl: 'partials/bonsai-details.html',
            controller: 'detailsController'
        }).
        when('/register', {
            templateUrl: 'register.html',
            controller: 'registerController'
        }).
        when('register/thanks', {
            templateUrl: 'registerThanks.html',
            controller: 'registerController'
        }).
        otherwise({
            redirectTo: '/bonsai'
        });
    }
]);