angular.module('navigatorGlassProjectApp')
.controller('TemplatesCtrl',function(HttpService,$scope,$sce,TemplateService){
	/*
	Method that outputs the TemplateItem as HTML & Text.
	*/
	function setTemplateItemOutput(item) {
		if (item.html && item.html.length > 0) {
			item.output = item.htmlState = $sce.trustAsHtml(item.html);
		} else {
			item.output = item.textState = item.text;
		}
		return item;
	}
	/*
	Method that uses the TemplateService to retrieve Template data from
	API.Upon success it will call the setTemplateItemOutput for each 
	TemplateItem.
	*/
	$scope.loadTemplates = function() {
		TemplateService.getTemplates().success(function(result){
			$scope.templateTimelines= result;
			for (var i = 0; i < $scope.templateTimelines.length; i++) {
				setTemplateItemOutput($scope.templateTimelines[i]);
			};
		});                
	};


	$scope.loadTemplates();
});