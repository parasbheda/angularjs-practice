var viewControllers = angular.module('controllers.ViewControllers',['services.ViewServices']);

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

// controller that uses a service "MyService"
viewControllers.controller('ServiceController',['$scope','MyService', 
	function($scope, MyService){
		$scope.$on('objects.update', function(event){
			$scope.objects = MyService.objects;
		});
		$scope.objects = MyService.objects;
	}]);

// controller that uses a service "MyService"
viewControllers.controller('AddObjController',['$scope', 'MyService',
	function($scope, MyService){
		$scope.addObj = function(xvalue, yvalue){
			console.log(xvalue+' '+yvalue);
			var obj = {x: xvalue, y: yvalue};
			MyService.addObject(obj);
		};
	}]);

// used with a directive. the scope variables exposed in here
// can be used in the directive too.
viewControllers.controller('DirectiveController',['$scope', function($scope){
	$scope.message = 'Hello';
	console.log("controller");
}]);

viewControllers.controller('IsolateScopeController', ['$scope', function($scope){
	console.log("isolate controller");
	$scope.logChore = function(chore){
		console.log("done function");
		alert(chore+" is done.");
	};

	$scope.changeChore = function(chore){
		console.log("change function");
		alert(chore+" is changed");
	}

	$scope.sendMessage = function(message){
		console.log("in send Message fuunction");
		alert(message);
	}

	$scope.fruitName = 'Apple';
}]);
