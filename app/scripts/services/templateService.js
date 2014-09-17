'use strict';

angular.module('navigatorGlassProjectApp')
.service('TemplateService',function(HttpService) {
    return {
        getTemplates: function() {
            return HttpService.handle('GET','/Template');
        }
    };
});