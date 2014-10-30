'use strict';
/*
This is the Timeline Service that retrieves data from the API.
*/
angular.module('navigatorGlassProjectApp')
.service('TimelineService', function(HttpService) {
    return{
        getTimeline: function() {
            return HttpService.handle('GET','/Timeline');
        },

        updateCard: function(card) {
            return HttpService.handle('PUT', '/Timeline', card);
        },

        deleteCard: function(id) {
            return HttpService.handle('DELETE', '/Timeline/' + id);
        },

        createCard: function(card) {
            return HttpService.handle('POST', '/Timeline', card);
        }
    };
});