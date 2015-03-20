var viewControllers = angular.module('ViewControllers',[]);

viewControllers.controller('ViewController1',['$scope',
	function($scope){
		$scope.message = 'welcome to view1';
	}]);

viewControllers.controller('ViewController2',['$scope',
	function($scope){
		$scope.message = 'welcome to view2';
	}]);

viewControllers.controller('ViewControllerHome',['$scope','$state',
	function($scope, $state){
		$scope.message = 'welcome to home page';

		$scope.changeState = function(){
			$scope.message = '';
			$state.go('dummyview');
		}
	}]);

viewControllers.controller('DummyController', ['$scope','$state','$timeout',
	function($scope, $state, $timeout){
		$timeout(function(){$state.go('view1')}, 5000);
		
	}]);

viewControllers.controller('ServiceController',['$scope','MyService', 
	function($scope, MyService){
		$scope.$on('objects.update', function(event){
			$scope.objects = MyService.objects;
		});
		$scope.objects = MyService.objects;
	}]);

viewControllers.controller('AddObjController',['$scope', 'MyService',
	function($scope, MyService){
		$scope.addObj = function(xvalue, yvalue){
			console.log(xvalue+' '+yvalue);
			var obj = {x: xvalue, y: yvalue};
			MyService.addObject(obj);
		};
	}]);

viewControllers.controller('DirectiveController',[function(){
	var con = this;
	console.log(con);
	con.message = 'Hello';
	console.log(con);
}]);

viewControllers.directive('myDirectiveView', [function(){
	return function(scope){
		console.log(scope);
		console.log('Hello'+scope.con);
	};
}]);