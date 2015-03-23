var viewDirectives = angular.module('directives.ViewDirectives',[]);

viewDirectives.directive('myDirectiveView', [function(){
	return function($scope){
		console.log($scope.message);
	}
}]);

viewDirectives.directive('enter', function(){
	return function($scope, $element){
		$element.bind('mouseenter', function(){
			console.log('In the div');
			$element.addClass("my-color")
		});
	};
});

viewDirectives.directive('leave', function(){
	return function($scope, $element){
		$element.bind('mouseleave', function(){
			console.log('left the div');
			$element.removeClass("my-color");
		});
	};
});