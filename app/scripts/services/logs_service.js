'use strict';

angular.module('concordchurchApp')
.factory('LogsService', function ($resource, config) {
debugger;
	if(Android) {
		Android.cacheJson(JSON.stringify($scope.words));
	} else {
	  return {
	    R: $resource("/bbs/:id", {
	    	id:"@id"
			})
		};
	}
});
