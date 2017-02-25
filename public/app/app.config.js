app.config(function($routeProvider) {
	$routeProvider
		.when("/", {
			template: "<home></home>"
		})
		.otherwise({redirectTo:'/404'});
});