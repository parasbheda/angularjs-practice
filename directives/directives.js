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
});

// using a directive as an element. Create the html element in template
// use the scope attribute to set different scopes for the multiple of these elements
// so that each of this element can be controlled differently. for example in below
// we have used done to control one button and change to control the other button.
viewDirectives.directive('kid', function(){
	return{
		restrict: "E",
		scope:{done:'&', change:'&'},
		template: '<input type="text" ng-model="chore" />{{chore}}<br></br><button class="btn btn-primary" ng-click="done({chore:chore})">I am done</button>'+
		'<button class="btn btn-danger" ng-click="change({chore:chore})">I am changed</button>'
	}
});

// the '&' sign allows you to invoke an expression, or call an expression,
// evaluate an expression, whatever, on the parent scope of whatever the directive is on the inside of.
// one more example on resetrice and '&'

viewDirectives.directive('phone', function(){
	return {
		restrict: 'E',
		scope:{send:'&'},
		template: '<input type="text" ng-model="text"></input><button class="btn btn-primary" ng-click="send({message:text})">Send Message</button>'
	}
});
// the link https://egghead.io/lessons/angularjs-isolate-scope-expression-binding#/tab-code has detailed explanation
// and sample code for isolated scope and '&'

// the '=' in the scope helps us get rid of expressions(double curlies). It is bound like an object. The binding is both ways.
viewDirectives.directive('fruit', function(){
	return {
		restrict: 'E',
		scope: {name:'='},
		template: '<div>{{name}}</div>'
	} 
});

// example displaying intercation of directive with other directives.
viewDirectives.directive('superhero', function(){
	return{
		restrict: 'E',
		scope:{},
		controller: function($scope){
			$scope.abilities = [];

			this.addStrength = function(){
				$scope.abilities.push('strength');
			};

			this.addSpeed = function(){
				$scope.abilities.push('speed');
			};

			this.addFlight = function(){
				$scope.abilities.push('flight');
			}
		},

		link: function(scope, element){
			element.addClass("btn");
			element.addClass("btn-primary");
			element.bind("mouseenter", function(){
				console.log(scope.abilities);
			})
		}
	};
});

viewDirectives.directive('strength', function(){
	return{
		require: 'superhero',
		link: function(scope, element, attrs, superheroController){
			superheroController.addStrength();
		}
	};
});

viewDirectives.directive('speed', function(){
	return{
		require: 'superhero',
		link: function(scope, element, attrs, superheroController){
			superheroController.addSpeed();
		}
	};
});

viewDirectives.directive('flight', function(){
	return{
		require: 'superhero',
		link: function(scope, element, attrs, superheroController){
			superheroController.addFlight();
		}
	};
});

viewDirectives.directive('panel', function(){
	return{
		restrict: 'E',
		transclude: true,
		template: '<div class="panel panel-default panel-heading" ng-transclude >I am a panel</div>'
	}
});

