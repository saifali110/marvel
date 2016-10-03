
/** 
    *Declare app level module which depends on filters, and services
**/

angular.module('marvelApp', [

	'ngRoute',
    'marvelApp.appConstants',
    'marvelApp.hashEncodeService',
    'marvelApp.storyServices',
    'marvelApp.controllers'
])
.config(['$routeProvider', function ($routeProvider) {
        
    $routeProvider.when('/home', {
    	
    	templateUrl: 'partials/home.html', 
    	controller: 'homeCtrl'
    });
    
    $routeProvider.otherwise({redirectTo: '/home'});
}]);