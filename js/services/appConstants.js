angular.module('marvelApp.appConstants', [])
	
/*
	* Developer: Saif Ali
	* Service to define a constant with marvel endpoint and key
*/

	.constant('marvelApi', {
	    
	    url: 'http://gateway.marvel.com/v1/public/stories/',
	    key: '7dc26e935d2f59562dfd577822dfc0ef',
        
	})