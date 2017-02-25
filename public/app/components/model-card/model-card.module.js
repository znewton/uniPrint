angular.module('modelCard', []).component('modelCard',{
	templateUrl: 'app/components/model-card/model-card.template.html',
	bindings: {
		modelInfo: '='
	},
	controller: function ModelCardController($scope) {
	}
});
