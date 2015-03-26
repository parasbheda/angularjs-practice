var myapp = angular.module('myapp',['ui.router','controllers.ViewControllers', 'directives.ViewDirectives', 'ngRoute']);

myapp.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state('home',{
			url:"/",
			templateUrl: "pages/home.html",
			controller: "ViewControllerHome"
		})
		.state('view1',{
			url:"/view1",
			templateUrl: "http://localhost:1337/pages/view1.html",
			controller: "ViewController1"
		})
		.state('view2',{
			url:"/view2",
			templateUrl: "http://localhost:1337/pages/view2.html",
			controller: "ViewController2"
		})
		.state('dummyview', {
			url: "/dummyview",
			templateUrl: "http://localhost:1337/pages/dummyview.html",
			controller: "DummyController"

		})
		.state('serviceview',{
			url: "/serviceview",
			templateUrl: "http://localhost:1337/pages/serviceview.html",
			controller: "ServiceController"
		})
		.state('addobjects',{
			url: "/addobjects",
			templateUrl: "http://localhost:1337/pages/addobjects.html",
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

// resolve example. When you change state you go into the config and 
// load the things that are mentioned in the resolve.
// myapp.config(function($routeProvider){
// 	console.log('in config');
// 	console.log(document.URL);
// 	$routeProvider
// 		.when('/pages/home.html/view2', 
// 		{
// 			templateUrl: '/pages/view2.html',
// 			controller: 'ViewController2',
// 			resolve:  {
// 				myapp: function($q, $timeout){
// 					console.log('inside config function');
// 					var defer = $q.defer();
// 					// $timeout(function(){
// 					 	//defer.resolve();
// 					// }, 2000);
// 					return defer.promise;
// 				}
// 			}
// 		});
// });

//looks like for some readson not able to get the routeProvider to work
// will have to look into the .when() function. I seems that there is some url 
// problem. Will have to look into that.