var app = angular.module('bonsaiApp', ['ngResource', 'ngRoute', 'bonsaiService']);

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
        otherwise({
            redirectTo: '/bonsai'
        });
    }
]);

