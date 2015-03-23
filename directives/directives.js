// the directive module is used with the constroller module to control 
// behaviour of html pages(views)

var viewDirectives = angular.module('directives.ViewDirectives',[]);

// basic directive 
viewDirectives.directive('myDirectiveView', [function(){
	return function($scope){
		console.log($scope.message);
	}
}]);

//directive that does something when the mouse enters the div
viewDirectives.directive('enter', function(){
	return function($scope, $element){
		$element.bind('mouseenter', function(){
			console.log('In the div');
			$element.addClass("my-color")
		});
	};
});

// directive that does somehting when mouse leaves the div
viewDirectives.directive('leave', function(){
	return function($scope, $element){
		$element.bind('mouseleave', function(){
			console.log('left the div');
			$element.removeClass("my-color");
		});
	};
});

// the directive can be s=used as an attribute in an html tag
viewDirectives.directive('superman', function(){
	return{
		restrict: "A",
		link: function(){
			alert("I am superman");
		}
	}
});

// directive has to be used as a class like css class
viewDirectives.directive('flash', function(){
	return{
		restrict: "C",
		link: function(){
			alert("I am flash");
		}
	};
});

// custom element. You need to write a template not a link function
viewDirectives.directive("batman", function(){
	return{
		restrict: "E",
		template: "<div><h3>I am Batman</h3></div>"
	}
})