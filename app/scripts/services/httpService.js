'use strict';


angular.module('navigatorGlassProjectApp')
	.service('HttpService',function($http,Global){
		return {
            handle: function(method, url, headers, data, params) {
                return $http({
                    method: method,
                    url: Global.ApiUrl + url,
                    headers: {
                        
                    },
                    data: data,
                    params: params
                });
            }
        };
    });