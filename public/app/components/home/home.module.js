angular.module('home', []).component('home',{
	templateUrl: 'app/components/home/home.template.html',
	controller: function homeController() {
			this.name = "World";
		}
});
