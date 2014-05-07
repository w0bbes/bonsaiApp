angular.module('bonsaiService', ['ngResource']).
	factory('bonsaiService', function($resource) {
		return $resource('bonsai.json');
});