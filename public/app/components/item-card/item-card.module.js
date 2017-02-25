angular.module('itemCard', []).component('itemCard',{
	templateUrl: 'app/components/item-card/item-card.template.html',
	bindings: {
		itemInfo: '='
	},
	controller: function ItemCardController($scope) {
	}
});
