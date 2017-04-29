angular.module('myApp', ['ui.router']).config(function($urlRouterProvider, $stateProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('portfolio', {
            url: '/',
            templateUrl: './portfolio.html',
            controller: 'portCtrl'
        })
});