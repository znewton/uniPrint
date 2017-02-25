angular.module('requestIndex', ['requestCard', 'modelCard']).component('requestIndex',{
	templateUrl: 'app/components/request-index/request-index.template.html',
	controller: function RequestIndexController($scope, $timeout) {

		$scope.requests = {};
		$scope.loading = true;

		$timeout(function() {
			for(var key in fake_db_print_requests) {
				if(fake_db_print_requests.hasOwnProperty(key)) {
					$scope.requests[key] = fake_db_print_requests[key];
				}
			}
			$scope.loading = false;
			console.log($scope.requests);
		}, 200);
	}
});
