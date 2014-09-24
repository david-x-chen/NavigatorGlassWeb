  'use strict';
/*
Service that does initialize some parameters like ApiUrl and the Url.
*/
  angular.module('navigatorGlassProjectApp')
  .service('Global',function($window,$rootScope){
    var global={};

    (function initConfig() {
      if (window.config) {
        global.ApiUrl = window.config.ApiUrl;
        global.Url = window.config.Url;
      } else {
        global.ApiUrl = 'http://navigatorglassweb.cloudapp.net:80/api';
        global.Url = 'http://navigatorglassweb.cloudapp.net';
      }
    })();

    return global;
  });