(function(){
	var app = angular.module('try');

    app.controller('devPageController', function ($scope, $routeParams, $location) {
        var id = $routeParams.user_id.substr(1);

        $scope.developer = $scope.posts.find(function(element) {
        	return element.user_id == id;
        });

        if($scope.developer === undefined) 
        {
        	$location.path("");
        }

    });
    
})();