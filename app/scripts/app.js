'use strict';

var app = angular.module('navigatorGlassProjectApp', 
  [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'bootstrap.tabset',
    'ui.ace',
    'ui.bootstrap',
    'config',
    'LocalStorageModule',
    'ngCookies',
    'navigatorGlassMock',
    'blockUI',
    'toaster',
    'mm.foundation'
  ]);

app.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
  })
  .when('/timeline', {
    templateUrl: 'views/timeline.html',
    controller: 'TimelineCtrl'
  })
  .when('/signup', {
    templateUrl: 'views/signup.html',
    controller: 'AuthCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});

app.config(function (blockUIConfig) {
  blockUIConfig.delay = 0;//remove delay
  blockUIConfig.message = ''; //remove message because using image
  blockUIConfig.cssClass = 'block-ui spinner-container';
  blockUIConfig.autoBlock = true;
  blockUIConfig.autoInjectBodyBlock = false;
});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);


