angular.module('try').controller('appController', function($http,$location,$routeParams,$scope){

	$http.get("https://api.stackexchange.com/2.2/users?fromdate=1298764800&todate=1298851200&order=desc&sort=reputation&site=stackoverflow").then(successCallBack, errorCallBack);

			function successCallBack(response, status, config, statusText) {
				$scope.notFound = true;
				var localItems  = response.data;
				$scope.posts = localItems.items;
			}

			function errorCallBack(response, status, config, statusText) {
				alert("Request Error");
			}
			
			$scope.showDetails = showDetails;
			$scope.param1 = $routeParams.user_id;

			function showDetails(id) {

				$location.path('dev/:' + id);
			}

})