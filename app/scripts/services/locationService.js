'use strict';

angular.module('navigatorGlassProjectApp')
.service('LocationService',function(HttpService){
	return{
			getLocations: function(){
				return HttpService.handle('GET','/Location');
			}
		}
	});