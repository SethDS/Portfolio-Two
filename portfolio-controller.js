/**
 * Created by Seth on 4/29/2017.
 */
angular.module('myApp').controller('portCtrl', function($scope, mainService){

    $scope.projects = [
        {
            name: 'VentureBound',
            stack: 'Full Stack'
        },
        {
            name: 'Top Secret',
            stack: 'Front End'
        },
        {
            name: 'VentureBound',
            stack: 'Front End'
        },
        {
            name: 'VentureBound',
            stack: 'Front End'
        },
        {
            name: 'VentureBound',
            stack: 'Front End'
        },
        {
            name: 'VentureBound',
            stack: 'Front End'
        }
    ]
});