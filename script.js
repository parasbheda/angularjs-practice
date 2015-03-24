var myapp = angular.module('myapp',['ui.router','controllers.ViewControllers', 'directives.ViewDirectives']);

myapp.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state('home',{
			url:"/home",
			templateUrl: "/home.html",
			controller: "ViewControllerHome"
		})
		.state('view1',{
			url:"/view1",
			templateUrl: "http://localhost:1337/pages//view1.html",
			controller: "ViewController1"
		})
		.state('view2',{
			url:"/view2",
			templateUrl: "http://localhost:1337/pages/view2.html",
			controller: "ViewController2"
		})
		.state('dummyview', {
			url: "/dummyview",
			templateUrl: "http://localhost:1337/pages//dummyview.html",
			controller: "DummyController"

		})
		.state('serviceview',{
			url: "/serviceview",
			templateUrl: "http://localhost:1337/pages//serviceview.html",
			controller: "ServiceController"
		})
		.state('addobjects',{
			url: "/addobjects",
			templateUrl: "http://localhost:1337/pages//addobjects.html",
			controller: "AddObjController"
		})
		.state('directiveView',{
			url: '/directiveView',
			templateUrl: "http://localhost:1337/pages/directive-view.html",
			controller: 'DirectiveController'
		}).
		state('isolatescopedirective',{
			url: '/isolateScope',
			templateUrl: "http://localhost:1337/pages/isolatescope-directive.html",
			controller: "IsolateScopeController"
		})
		.state('promiseresolve',{
			url: '/promise-resolve',
			templateUrl: "http://localhost:1337/pages/promise-resolve.html",
			controller: "PromiseResolveController"
		});
});

