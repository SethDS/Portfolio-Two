/**
 * Created by Seth on 5/1/2017.
 */
angular.module('myApp').controller('projectCtrl', function($scope, mainService, $stateParams){

    $scope.project = [];

    $scope.getProject = function(id){
       $scope.project =  mainService.getProject(id);
    };

    $scope.getProject($stateParams.id);

    $scope.showInfo = function(){
        var star = document.getElementsByClassName('project-star');

        star[0].style.display = 'inline';
    };
});