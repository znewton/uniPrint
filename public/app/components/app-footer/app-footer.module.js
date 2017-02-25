angular.module('appFooter', []).component('appFooter',{
	templateUrl: 'app/components/app-footer/app-footer.template.html',
	controller: function AppFooterController($scope) {
		$scope.contributers = [
			{
				name: 'Tristan Duyvejonck',
				email: 'tduyve@gmail.com',
				github: 'duyve'
			},
			{
				name: 'Zach Newton',
				email: 'znewton13@gmail.com',
				github: 'duyve'
			},
			{
				name: 'Cole Mulligan',
				email: '7cmulligan7@gmail.com',
				github: 'cmulligan'
			}
		]
	}
});
