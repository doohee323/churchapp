'use strict';

angular.module('concordchurchApp')
.factory('LogsService', function ($resource, config) {
	try {
		if(Android != null && Android) {
			var factory = {}; 
			factory.R = {};
	    factory.R.get = function(id, callback) {
				var rslt = {};
				rslt.rows = Android.getLogsByReadAt(JSON.stringify(id));
				callback(JSON.parse(rslt));
			}
	    return factory;
		}
	} catch (e) {
	  return {
	    R: $resource("/bbs/:id", {
	    	id:"@id"
			})
		};
	}
});
