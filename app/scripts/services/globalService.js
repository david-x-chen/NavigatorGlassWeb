  'use strict';
/*
Service that does initialize some parameters like ApiUrl and the Url.
*/
  angular.module('navigatorGlassProjectApp')
  .service('Global',function($window,$rootScope,ENV){
    var global={};
    (function initConfig() {
      if (ENV) {
        global.ApiUrl = ENV.ApiUrl;
        global.Url = ENV.Url;
      } else {
        global.ApiUrl = 'http://navigatorglassweb.cloudapp.net:80/api';
        global.Url = 'http://navigatorglassweb.cloudapp.net';
      }
    })();

    return global;
  });