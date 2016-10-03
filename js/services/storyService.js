
angular.module('marvelApp.storyServices', [])

/*
	* Developer: Saif Ali
	* Service to get story and its characters from Marvel API
*/

    .factory('story', function ($http, marvelApi, hashEncode) {
        return {

            // Time stamp
            ts: function(){
                
                return Date.now() / 1000 | 0;
            },

            /*
             * Desc: Fetches story filtered by a story id
             * Date: 20-20-2016
            */

            getStory: function (storyId) {

                
                return $http({

                    method: 'GET',
                    url: marvelApi.url + storyId +'?ts=' + this.ts() + '&apikey=' + marvelApi.key + '&hash=' + hashEncode.getHashCode()
                });
            },

             /*
             * Desc: Fetches lists of characters filtered by a story id
             * Date: 20-20-2016
            */

            getStoryCharaters: function (storyId) {
                
                return $http({

                    method: 'GET',
                    url: marvelApi.url + storyId +'/characters?ts=' + this.ts() + '&apikey=' + marvelApi.key + '&hash=' + hashEncode.getHashCode()
                });
            }
        };
    });