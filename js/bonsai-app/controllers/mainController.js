app.controller("mainController", function($scope, $http, bonsaiService) {

    $scope.init = function() {
        bonsaiService.get(function(data) {
            $scope.name = data.name;
            $scope.datails = data.details;
        });
    };

});