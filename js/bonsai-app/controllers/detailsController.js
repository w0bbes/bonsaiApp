app.controller("detailsController", function($scope, $http, bonsaiService, $routeParams) {

    $scope.treeId = $routeParams.bonsaiId;

    bonsaiService.get(function(data) {
        $scope.tree = data.bomen;

        angular.forEach($scope.tree, function(val, index) {
            if (val.id == $routeParams.bonsaiId) {
                $scope.name = val.name;

            }
        });
    });

});