/**
 * Created by Seth on 4/29/2017.
 */
angular.module('myApp').service('mainService', function(){

    var service = this;

    this.getProject = function(id){
      return service.project[id - 1];
        console.log(id);
    };

    this.projects = [
        {
            name: 'VentureBound',
            stack: 'Full Stack',
            id: 1
        },
        {
            name: 'Top Secret',
            stack: 'Front End',
            id: 2
        },
        {
            name: 'VentureBound',
            stack: 'Front End',
            id: 3
        },
        {
            name: 'VentureBound',
            stack: 'Front End',
            id: 4
        },
        {
            name: 'VentureBound',
            stack: 'Front End',
            id: 5
        },
        {
            name: 'VentureBound',
            stack: 'Front End',
            id: 6
        }
    ]
});