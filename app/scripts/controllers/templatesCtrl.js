angular.module('navigatorGlassProjectApp')
    .controller('TemplatesCtrl',function(HttpService,$scope,$sce,TemplateService){
    	// TemplateService.getTemplates().success(function(result){
    	// 	//console.log("Templates"+result);
    	// 	$scope.templateTimelines= result;
    	// 	console.log($scope.templateTimelines);
    	// });
    function setTimelineItemOutput(item) {
        if (item.html && item.html.length > 0) {
            item.output = item.htmlState = $sce.trustAsHtml(item.html);
        } else {
            item.output = item.textState = item.text;
        }
        return item;
    }

    $scope.loadTemplates = function() {
       TemplateService.getTemplates().success(function(result){
           // console.log("Templates"+result);
           $scope.templateTimelines= result;
           // console.log($scope.templateTimelines.length);

           for (var i = 0; i < $scope.templateTimelines.length; i++) {
              // console.log($scope.templateTimelines[i]);
              setTimelineItemOutput($scope.templateTimelines[i]);
          };
      });
                    // angular.forEach($scope.templateTimelines, function (val,key) {
                    //     return setTimelineItemOutput(key);
                    //     //templateTimelineItem.output
                    // });

    };

    $scope.loadTemplates();
});