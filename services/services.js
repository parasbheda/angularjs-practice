var viewServices = angular.module("services.ViewServices",[])

viewServices.service('MyService', ['$rootScope', function($rootScope){
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

viewServices.service('PromiseResolveService',['$rootScope', function($rootScope){
	var service = {
		feedbacks:[],

		addNewFeedback: function(feedback){
			service.feedbacks.push(feedback);
			$rootScope.$broadcast('feedbacks.update');
			console.log('feed back has been added');
		}
	}

	return service;
}]);
