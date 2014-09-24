'use strict';
/*
This is the Timeline Service that retrieves data from the API.
*/
angular.module('navigatorGlassProjectApp')
.service('TimelineService', function(HttpService) {
    return{
        getTimeline: function() {
            return HttpService.handle('GET','/Timeline');
        }
    };
});