
angular.module('marvelApp.controllers', [])

/*
     * Developer: Saif Ali
     * Name: Home Controller
     * Desc: Controller for the home page.
     * Date: 20-09-2016
*/

.controller('homeCtrl', function ($scope, story) {

    $scope.attributionText = "";
    $scope.characters = [];

    // Randomly selected story id
    var storyId = 18539; 


    //------------ Get story by story ID -------

    story.getStory(storyId).success(function(data){

        $scope.attributionText = data.attributionText;
        $scope.stories = data.data.results;

    }).error(function(data){
        console.log(data);
    }).finally(function(){

    });

    //------------ Get character by story ID -------

    story.getStoryCharaters(storyId).success(function(data){

        $scope.characters = data.data.results;

    }).error(function(data){
        console.log(data);
    }).finally(function(){

    });
});
