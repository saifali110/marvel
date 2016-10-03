var hashService = angular.module('marvelApp.hashEncodeService', [])

hashService.factory('hashEncode', function() {

/*
	* Developer: Saif Ali
	* Generates Md5 encrypted hash
*/
	return {

		getHashCode: function(){

			var timeStamp = Date.now() / 1000 | 0;
	        var publicKey = '7dc26e935d2f59562dfd577822dfc0ef';
	        var privateKey = '6cb7a5a3645c5bf3c4091c261d9404081382613d';
	        var hashKey = timeStamp + privateKey + publicKey;
	        return md5(hashKey);
		}
	}

});



