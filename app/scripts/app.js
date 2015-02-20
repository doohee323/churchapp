'use strict';

/**
 * @ngdoc overview
 * @name concordchurchApp
 * @description
 * # concordchurchApp
 *
 * Main module of the application.
 */

var config = {
//	api_url:'http://192.168.43.23:3005'
	api_url:'http://52.0.156.206:3000/'
};
 
angular
  .module('concordchurchApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ngMaterial',
    'locketAdminUtils'
  ]).constant('config', config)
.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$provide',
  function ($stateProvider, $urlRouterProvider, $httpProvider, $provide) {
  
  	$httpProvider.defaults.useXDomain = true;
  	$httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
	//delete $httpProvider.defaults.headers.common['X-Requested-With'];
  
	$stateProvider.state('index', {
  		url: "",
		templateUrl: 'views/main.html',
		controller: 'MainCtrl'
	}).state('words', {
		url: '/words',
		templateUrl: 'views/words.html',
		controller: 'WordsCtrl'
	}).state('video', {
		url: '/video',
		templateUrl: 'views/video.html',
		controller: 'VideoCtrl'
	});
	
  /**
   * @description
   * register $http interceptor factory
   */
  $httpProvider.interceptors.push('httpinterceptor');
  
}]);

angular.module('concordchurchApp').factory('$exceptionHandler', function () {
  return function (exception, cause) {
  	if(exception.message == "Cannot read property 'resolve' of undefined") {
  		console.log(exception.message);
  		return;
  	} else if(exception.message && exception.message.startsWith('[$resource:badcfg]')){
			//localStorage.setItem("__SESSION_INFO", JSON.stringify({}));
  		//if(parent) {
  		//	parent.document.location = '/mpage';
  		//} else {
  		//	document.location = '/mpage';
  		//}
	    exception.message += ' (caused by "' + cause + '")';
  	} else {
	  	var errorInfo = {title: exception.message,
	        date: moment().utc().toDate().format('YYYYMMDD HH:mm:ss:SS'),
	        stack: exception.stack
	      };
	  	console.log(errorInfo.stack);
	    $.ajax({
	      type: "POST",
	      url: "http://192.168.1.5:3005/loggingFromClient",
	      data: errorInfo
	    }).done(function(data) {
	  		console.log('sent error message to the server!' + JSON.stringify(errorInfo));
	    }).fail(function(data) {
	  		console.log('can\'t send error message to the server!' + data);
	    }).always(function(data) {
			});   			    
  	}
    //throw exception;
  };
});
