'use strict';
angular.module('try',['ngRoute']).
	config(
		function($routeProvider){

			$routeProvider.
			when("", {
				templateUrl:"developers.html"
			}).

			when("/dev/:id", {
				templateUrl:"devPage.html",
				controller: 'devPageController'
			}).

			otherwise({
				templateUrl: "developers.html"
			})
	});