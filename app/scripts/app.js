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
var serviceBase = 'http://6b74cc2ca3764a3db82c8499ef1795aa.cloudapp.net/';

app.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'test'
});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);