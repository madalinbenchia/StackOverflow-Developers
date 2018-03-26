(function(){
	var app = angular.module('try');

    app.controller('devPageController', function ($scope, $routeParams, $location) {
        var id = $routeParams.id.substr(1);

        $scope.developer = $scope.posts.find(function(element) {
        	return element.id == id;
        });

        if($scope.developer === undefined) 
        {
        	$location.path("");
        }

    });
    
})();