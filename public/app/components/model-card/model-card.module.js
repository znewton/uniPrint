angular.module('modelCard', ['requestForm']).component('modelCard',{
	templateUrl: 'app/components/model-card/model-card.template.html',
	bindings: {
		modelInfo: '='
	},

	controller: function ModelCardController($scope, $mdDialog) {
		$scope.showRequestForm = function(ev) {
			$mdDialog.show({
				controller: DialogController,
				template: '<request-form></request-form>',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose:true,
				fullscreen: true // Only for -xs, -sm breakpoints.
			})
				.then(function(answer) {
					console.log("Answer: " + answer);
				}, function() {
					$scope.status = 'You cancelled the dialog.';
				});
		};

		function DialogController($scope, $mdDialog) {
			$scope.hide = function() {
				$mdDialog.hide();
			};

			$scope.cancel = function() {
				$mdDialog.cancel();
			};

			$scope.answer = function(answer) {
				$mdDialog.hide(answer);
			};
		}
	}
});
