app.config(function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl : "<home></home>"
		})
		.otherwise({redirectTo:'/404'});
});