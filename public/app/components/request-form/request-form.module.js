angular.module('requestForm', []).component('requestForm',{
	templateUrl: 'app/components/request-form/request-form.template.html',

	controller: function RequestFormController($scope) {
		$scope.showPrompt = function(ev) {
			// Appending dialog to document.body to cover sidenav in docs app
			var confirm = $mdDialog.prompt()
				.title('What would you name your dog?')
				.textContent('Bowser is a common name.')
				.placeholder('Dog name')
				.ariaLabel('Dog name')
				.initialValue('Buddy')
				.targetEvent(ev)
				.ok('Okay!')
				.cancel('I\'m a cat person');

			$mdDialog.show(confirm).then(function(result) {
				$scope.status = 'You decided to name your dog ' + result + '.';
			}, function() {
				$scope.status = 'You didn\'t name your dog.';
			});
		};
	}
});
