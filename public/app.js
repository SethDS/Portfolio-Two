angular.module('myApp', ['ui.router']).config(function($urlRouterProvider, $stateProvider){

    $urlRouterProvider.otherwise('/portfolio');

    $stateProvider
        .state('portfolio', {
            url: '/portfolio',
            templateUrl: './portfolio.html',
            controller: 'portCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: './about.html',
            controller: 'aboutCtrl'
        })
        .state('project', {
            url: '/portfolio/:id',
            templateUrl: './project.html',
            controller: 'projectCtrl'
        })

});