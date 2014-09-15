'use strict';

angular.module('navigatorGlassProjectApp')
	.service('TimelineService',function(HttpService){
		return{
			getTimeline: function(){
				return HttpService.handle('GET','/Timeline');
			}
		}
	});