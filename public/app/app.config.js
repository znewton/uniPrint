app.config(function($routeProvider, $mdThemingProvider) {
	$routeProvider
		.when("/", {
			template: "<home></home>"
		})
		.when("/index", {
			template: "<index></index>"
		})
        .when("/login", {
            template: "<login></login>"
        })
        .when("/signUp", {
            template: "<sign-up></sign-up>"
        })
        .when("/forgotPassword", {
            template: "<forgot-password></forgot-password>"
        })
        .when("/userProfile", {
            template: "<user-profile></user-profile>"
        })
		.otherwise({redirectTo:'/404'});

	$mdThemingProvider.theme('default')
		.primaryPalette('blue-grey')
		// If you specify less than all of the keys, it will inherit from the
		// default shades
		.accentPalette('light-blue');


});