'use strict';
/*
  Subscription Service  Manages Google Glass Registered Subscriptions 
*/
angular.module('navigatorGlassProjectApp')
.service('SubscriptionService',function(HttpService) {
    return {
        getSubscriptions: function() {
            return HttpService.handle('GET','/subscription');
        }
    };
});