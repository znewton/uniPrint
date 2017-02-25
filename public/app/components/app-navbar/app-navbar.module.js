angular.module('appNavbar', []).component('appNavbar',{
	templateUrl: 'app/components/app-navbar/app-navbar.template.html',
	controller: function AppNavbarController($scope) {
		$scope.user = {
			fullName: 'Joe User'
		};
		$scope.name = 'Joe User';
	}
});
