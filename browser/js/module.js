'use strict';

var juke = angular.module('juke', ['ui.router']);

juke.run(['$rootScope', function ($rootScope) {

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {

        console.error('Error transitioning from "' + fromState.name + '" to "' + toState.name + '":', error);

    });

}]);

juke.config(function($urlRouterProvider, $locationProvider){
  $urlRouterProvider.when('/','/albums');
  $urlRouterProvider.when('/artist/:artistId','/artist/:artistId/album');

  $locationProvider.html5Mode(true);
})
