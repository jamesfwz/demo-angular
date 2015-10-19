'use strict';

var host = "http://demo-site-angular.herokuapp.com/"
var demoApp = angular.module('demoApp', ['ngRoute','datatableServices','infinite-scroll'])

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