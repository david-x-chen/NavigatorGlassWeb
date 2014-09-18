'use strict';

angular.module('navigatorGlassProjectApp')
.controller('TimelineCtrl',function(HttpService,$scope,TimelineService,LocationService){
  TimelineService.getTimeline().success(function(result){
    console.log("Timeline"+result);
  });
});