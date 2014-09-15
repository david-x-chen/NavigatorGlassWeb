'use strict';

angular.module('navigatorGlassProjectApp')
	.service('Global',function($window,$rootScope){
		var global={};

		 function initConfig() {
            if (window.config) {
                global.ApiUrl = window.config.ApiUrl;
               // global.ApiToken = window.config.ApiToken;
               // global.UserId = window.config.UserId;
                global.Url = window.config.Url;
            } else {
                global.ApiUrl = 'http://navigatorglassweb.cloudapp.net:80/api/';
               // global.ApiToken = 'testapikey';
               // global.UserId = 6;
                global.Url = 'http://navigatorglassweb.cloudapp.net';
            }
        }
        initConfig();
        return global;
	});