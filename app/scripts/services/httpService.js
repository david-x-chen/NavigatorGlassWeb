'use strict';
/*
Service used to make different HTTP requests.
*/
angular.module('navigatorGlassProjectApp')
.service('HttpService',function($http,Global){
    return {
        handle: function(method, url, data, params) {
            return $http({
                method: method,
                url: Global.ApiUrl + url,
                data: data,
                params: params
            });
        }
    };
});