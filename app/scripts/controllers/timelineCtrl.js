'use strict';

angular.module('navigatorGlassProjectApp')
.controller('TimelineCtrl',function(HttpService,$scope,TimelineService,LocationService,TemplateService){
	TimelineService.getTimeline().success(function(result){
		console.log("Timeline"+result);
	});
	TemplateService.getTemplates().success(function(result){
		console.log("Templates"+result);
	});
	LocationService.getLocations().success(function(result){
		console.log("Locations"+result);
	});

	$scope.timelineTabs = [
	{ title: 'Timeline', template: 'timeline.tpl' },
	{ title: 'Templates', template: 'timeline-template.tpl' },
	{ title: 'Location', template: 'location-items.tpl' },
	{ title: 'Subscription', template: 'subscription.tpl' }
	];

	$scope.onTimelineTabClick = function (tab) {
		if (tab.isNonReload) {
			tab.isNonReload = null;
			return;
		}
		switch (tab.title) {
			case 'Timeline':
			loadDefault();
			break;
			case 'Templates':
			loadDefault();
			break;
			case 'Location':
			loadDefault();
			break;
			default:
		}
	};

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