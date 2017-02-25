angular.module('home', []).component('home',{
	templateUrl: 'app/home/home.template.html',
	controller: function homeController() {
		this.name = "World";
	}
});
