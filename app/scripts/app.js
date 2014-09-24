'use strict';

angular
.module('navigatorGlassProjectApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'bootstrap.tabset',
  'ui.ace'
  ])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/Timeline', {
    templateUrl: 'views/timeline.html',
    controller: 'TimelineCtrl'
  })
  .when('/Login', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
