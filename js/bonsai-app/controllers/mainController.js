app.controller("mainController", function($scope, $http, bonsaiService) {

    $scope.filterText = null;
    $scope.availableFamilies = [];
    $scope.familyFilter = null;

    $scope.init = function() {

        bonsaiService.get(function(data) {

            $scope.trees = data.bomen;

            angular.forEach($scope.trees, function(val, index) {

                angular.forEach(val.details, function(fam, index) {

                    var exists = false;

                    angular.forEach($scope.availableFamilies, function(avFamily, index) {
                        if (avFamily == fam) {
                            exists = true;
                        }
                    });

                    if (exists === false) {

                        $scope.availableFamilies.push(fam);

                    }

                });
            });
        });
    };

});