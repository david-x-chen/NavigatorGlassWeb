'use strict';

angular.module('navigatorGlassProjectApp')
.controller('TimelineCtrl',function(HttpService,$sce,$scope,TimelineService,LocationService) {
    var allowedJsonKeyProperty = ["id", "etag", "text", "html", "created", "updated", "menuItems", "speakableText"];
    var guidConstant = "00000000-0000-0000-0000-000000000000";
    
    $scope.timelines = [];

    $scope.selectedTimeline = {
        title: "",
        output: "",
        newItem: true,
        statusMessage: "",
        statusClass: "",
        forAjaxRequest: false,
        jsonRepresentation: "",
        speakableText: "",
        initState: "",
        state: "",
        isDirty: false
    };

    function makeState(timeline) {
        timeline.location = timeline.location || {};
        var temporaryState = {
            output: timeline.output,
            title: timeline.title,
            latitude: timeline.location.latitude,
            longitude: timeline.location.longitude,
            address: timeline.location.address,
            displayTime: timeline.displayTime,
            sourceItemId: timeline.sourceItemId,
            canonicalUrl: timeline.canonicalUrl,
            speakableText: timeline.speakableText
        };

        //textbox empty always return "", 
        function replacer(key, value) {
            if (value === null || value === undefined) {
                return "";
            }
            return value;
        }

        return JSON.stringify(temporaryState, replacer);
    }

    function makeJsonRepresentation(timeline) {
        var jsonobj = {};
        function find(array, attrs) {
            for (var i = 0, len = array.length; i < len; i++) {
                for (var key in attrs) {
                    if (array[i][key] !== attrs[key]) {
                        break;
                    }
                    return array[i];
                }
            }
            return null;
        }
        for (var key in timeline) {
            var item = find(allowedJsonKeyProperty, key);
            if (item != undefined) {
                jsonobj[key] = timeline[key];
            }
        }
        var str = JSON.stringify(jsonobj, null, '\t');
        $scope.selectedTimeline.jsonRepresentation = str;
    }

    $scope.previewTimeline = function (timeline, isNewItem) {
        timeline = setTimelineItemOutput(timeline);
        $scope.selectedTimeline = timeline;
        $scope.selectedTimeline.newItem = isNewItem;
        $scope.selectedTimeline.state = makeState($scope.selectedTimeline);
        makeJsonRepresentation($scope.selectedTimeline);
        $scope.selectedTimeline.forAjaxRequest = false;

        if (isNewItem) {
            $scope.selectedTimeline.output = $scope.selectedTimeline.htmlState;
            $scope.selectedTimeline.initState = $scope.selectedTimeline.output;
        }
        if ($scope.selectedTimeline.id != guidConstant) {
            $scope.selectedTimeline.initState = $scope.selectedTimeline.output;
        }
        //console.log($scope.selectedTimeline);
    };

    function setTimelineItemOutput(item) {
        if (item.html && item.html.length > 0) {
            item.output = item.htmlState = $sce.trustAsHtml(item.html);
        } else {
            item.output = item.textState = item.text;
        }
        return item;
    }

    $scope.loadTimelines = function(){
        TimelineService.getTimeline().success(function(result){
            console.log("Timeline"+result);
            $scope.timelines= result;
            for(var i=0; i< $scope.timelines.length ; i++)
            {
                setTimelineItemOutput($scope.timelines[i]);
            }
        });
    };
    $scope.loadTimelines();

});