'use strict';

angular.module('navigatorGlassProjectApp')
.controller('TimelineCtrl',function(HttpService,$scope,TimelineService,LocationService){
	TimelineService.getTimeline().success(function(result){
		console.log("Timeline"+result);
	});

	$scope.loadDefault =function() {
		console.log("I'm switching");
	}
	// $scope.activeTab = 'tab1';
  //     	$scope.tabTemplates = {
  //       tab1: 'views/timelineTemplate.html' ,
  //       tab2: 'views/locationTemplate.html' ,
  //       tab3: 'views/templateTemplate' ,
  //       tab4: 'views/subscriptionTemplate.html'
  //     	};

  //     	$scope.switchTabTo = function (tabId) {
  //       $scope.activeTab = tabId;
  //    };
});