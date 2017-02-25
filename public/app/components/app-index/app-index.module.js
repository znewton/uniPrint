angular.module('appIndex', ['itemCard']).component('appIndex',{
	templateUrl: 'app/components/app-index/app-index.template.html',
	controller: function AppIndexController($scope, $timeout) {
		var fakeDBItems = [
			{
				name: 'Cube',
				thumbnailURL: 'assets/thumbnails/cube.jpg',
				fileSize: '5mb',
				fileURL: 'file_url_location.stl',
				dimensionX: '5',
				dimensionY: '5',
				colors: [
					'#cc0000', '#00cc00', '#0000cc'
				]
			},
			{
				name: 'Sphere',
				thumbnailURL: 'assets/thumbnails/cube.jpg',
				fileSize: '5mb',
				fileURL: 'file_url_location.stl',
				dimensionX: '5',
				dimensionY: '5',
				colors: [
					'#cc0000', '#00cc00', '#0000cc'
				]
			},
			{
				name: 'Cone',
				thumbnailURL: 'assets/thumbnails/cube.jpg',
				fileSize: '5mb',
				fileURL: 'file_url_location.stl',
				dimensionX: '5',
				dimensionY: '5',
				colors: [
					'#cc0000', '#00cc00', '#0000cc'
				]
			},
			{
				name: 'Prism',
				thumbnailURL: 'assets/thumbnails/cube.jpg',
				fileSize: '5mb',
				fileURL: 'file_url_location.stl',
				dimensionX: '5',
				dimensionY: '5',
				colors: [
					'#cc0000', '#00cc00', '#0000cc'
				]
			},
			{
				name: 'Blob',
				thumbnailURL: 'assets/thumbnails/cube.jpg',
				fileSize: '5mb',
				fileURL: 'file_url_location.stl',
				dimensionX: '5',
				dimensionY: '5',
				colors: [
					'#cc0000', '#00cc00', '#0000cc'
				]
			},
			{
				name: 'Hectagon',
				thumbnailURL: 'assets/thumbnails/cube.jpg',
				fileSize: '5mb',
				fileURL: 'file_url_location.stl',
				dimensionX: '5',
				dimensionY: '5',
				colors: [
					'#cc0000', '#00cc00', '#0000cc'
				]
			},
			{
				name: 'Pyramid',
				thumbnailURL: 'assets/thumbnails/cube.jpg',
				fileSize: '5mb',
				fileURL: 'file_url_location.stl',
				dimensionX: '5',
				dimensionY: '5',
				colors: [
					'#cc0000', '#00cc00', '#0000cc'
				]
			},
			{
				name: 'Cylinder',
				thumbnailURL: 'assets/thumbnails/cube.jpg',
				fileSize: '5mb',
				fileURL: 'file_url_location.stl',
				dimensionX: '5',
				dimensionY: '5',
				colors: [
					'#cc0000', '#00cc00', '#0000cc'
				]
			}
		];
		$scope.cardItems = [];
		$scope.loading = true;
		$timeout(function() {
			for( var i = 0; i < fakeDBItems.length; i++) {
				$scope.cardItems.push(fakeDBItems[i]);
			}
			$scope.loading = false;
			console.log($scope.cardItems);
		}, 200);
	}
});
