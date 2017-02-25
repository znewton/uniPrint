app.config(function($routeProvider) {
	$routeProvider
		.when("/", {
			template: "<home></home>"
		})
        .when("/login", {
            template: "<login></login>"
        })
        .when("/signUp", {
            template: "<sign-up></sign-up>"
        })
		.otherwise({redirectTo:'/404'});
});