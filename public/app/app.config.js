app.config(function($routeProvider) {
	$routeProvider
		.when("/", {
			template: "<home></home>"
		})
        .when("/login", {
            template: "<login></login>"
        })
        .when("/sign_up", {
            template: "<sign_up></sign_up>"
        })
		.otherwise({redirectTo:'/404'});
});