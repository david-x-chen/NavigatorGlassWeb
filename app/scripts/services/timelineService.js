'use strict';
/*
This is the Timeline Service that retrieves data from the API.
*/
angular.module('navigatorGlassProjectApp')
.service('TimelineService', function(HttpService) {
    return{
        getTimeline: function() {
            return HttpService.mockHandle('GET','/timeline');
        },

        updateCard: function(card) {
            return HttpService.mockHandle('PUT', '/timeline', card);
        },

        deleteCard: function(id) {
            return HttpService.mockHandle('DELETE', '/timeline/' + id);
        },

        createCard: function(card) {
            return HttpService.mockHandle('POST', '/timeline', card);
        }
    };
});