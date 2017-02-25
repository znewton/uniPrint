app.config(function($routeProvider, $mdThemingProvider) {
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

	$mdThemingProvider.theme('default')
		.primaryPalette('blue-grey')
		// If you specify less than all of the keys, it will inherit from the
		// default shades
		.accentPalette('light-blue');


});