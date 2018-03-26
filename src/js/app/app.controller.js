angular.module('try').controller('appController', function($http,$location,$routeParams,$scope){

	$http.get("json/posts.json").then(successCallBack, errorCallBack);

			function successCallBack(response, status, config, statusText) {
				$scope.notFound = true;
				var items  = response.data;
				$scope.posts = items;
			}

			function errorCallBack(response, status, config, statusText) {
				alert("Request Error");
			}
			
			$scope.showDetails = showDetails;
			$scope.param1 = $routeParams.id;

			function showDetails(id) {

				$location.path('dev/:' + id);
			}

})angular.module('try').controller('appController', function($scope){


})