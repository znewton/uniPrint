angular.module('modelIndex', ['modelCard']).component('modelIndex',{
	templateUrl: 'app/components/model-index/model-index.template.html',
	controller: function ModelIndexController($scope, $timeout) {

		$scope.models = {};
		$scope.loading = true;

		$timeout(function() {
			for(var key in fake_db_print_models) {
				if(fake_db_print_models.hasOwnProperty(key)) {
					$scope.models[key] = fake_db_print_models[key];
				}
			}
			$scope.loading = false;
			console.log($scope.models);
		}, 200);

	}
});
