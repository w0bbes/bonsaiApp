angular.module('bonsaiService', ['ngResource']).
	factory('bonsaiService', function($q,$resource) {
		var bonsaiResource = $resource('http://localhost:8888/api/bonsais',{},{
			get:{
				method: 'GET',
				isArray: true
			}
		});
	return {
		get:function(){
			var q = $q.defer();
			bonsaiResource.get({

			},
			function(resp){
				q.resolve(resp);
			},function(httpResponse){
				q.reject(httpResponse);
			});
			return q.promise;
		}
		//find by id
	};
});