'use strict';
/*
This is the Template Service that retrieves data from the API.
*/
angular.module('navigatorGlassProjectApp')
.service('TemplateService',function(HttpService) {
    return {
        getTemplates: function() {
            return HttpService.handle('GET','/Template');
        }
    };
});