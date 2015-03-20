var myapp = angular.module('myapp',['ui.router','ViewControllers']);

myapp.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/home");

	$stateProvider
		.state('home',{
			url:"/",
			templateUrl: "/",
			controller: "ViewControllerHome"
		})
		.state('view1',{
			url:"/view1",
			templateUrl: "view1.html",
			controller: "ViewController1"
		})
		.state('view2',{
			url:"/view2",
			templateUrl: "view2.html",
			controller: "ViewController2"
		})
		.state('dummyview', {
			url: "/dummyview",
			templateUrl: "dummyview.html",
			controller: "DummyController"

		})
		.state('serviceview',{
			url: "/serviceview",
			templateUrl: "serviceview.html",
			controller: "ServiceController"
		})
		.state('addobjects',{
			url: "/addobjects",
			templateUrl: "addobjects.html",
			controller: "AddObjController"
		})
		.state('directiveView',{
			url: "/directiveview",
			templateUrl: "directive-view.html",
			directive: "viewDirective"
		});
});

myapp.service('MyService', ['$rootScope', function($rootScope){
	var service = {
		objects: [{x: 'wxy', y: 'xyz'}, {x: 'abc', y: 'pqr'}],

		addObject: function(obj){
			service.objects.push(obj);
			$rootScope.$broadcast('objects.update');
			console.log("in broadcast"+service.objects.length);
		}
	};

	return service;
}]);

