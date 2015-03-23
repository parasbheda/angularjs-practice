var viewDirectives = angular.module('directives.ViewDirectives',[]);

viewDirectives.directive('myDirectiveView', [function(){
	return function($scope){
		console.log($scope.message);
	}
}]);