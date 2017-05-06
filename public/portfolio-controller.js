/**
 * Created by Seth on 4/29/2017.
 */
angular.module('myApp').controller('portCtrl', function($scope, mainService){

    $scope.projects = mainService.projects;
});