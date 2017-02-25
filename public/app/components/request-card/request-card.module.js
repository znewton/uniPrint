angular.module('requestCard', []).component('requestCard',{
	templateUrl: 'app/components/request-card/request-card.template.html',
	bindings: {
		requestInfo: '='
	},
	controller: function RequestCardController($scope) {
		$scope.model = {};
		this.init = function(modelID) {
			$scope.model = fake_db_print_models[modelID];
		};
		this.openModelView = function() {

		};
	}
});
