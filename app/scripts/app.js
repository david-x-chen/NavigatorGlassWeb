'use strict';

var app = angular
.module('navigatorGlassProjectApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'bootstrap.tabset',
  'ui.ace',
  'config',
  'LocalStorageModule',
  'ngCookies'
  ]);
app.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'loginController'
  })
  .when('/timeline', {
    templateUrl: 'views/timeline.html',
    controller: 'TimelineCtrl'
  })
  .when('/signup', {
    templateUrl: 'views/signup.html',
    controller: 'loginController'
  })
  .otherwise({
    redirectTo: '/'
  });

});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);
