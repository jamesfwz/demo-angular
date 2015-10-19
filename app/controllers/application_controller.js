'use strict';

var demoApp = angular.module('demoApp', ['ngRoute'])

demoApp.config(function ($routeProvider) {
  $routeProvider.
      when('/', {
        templateUrl: 'templates/datatables/index.html',
        controller: 'datatablesIndexCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
});