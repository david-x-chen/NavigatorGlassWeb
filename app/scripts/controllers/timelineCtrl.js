'use strict';

angular.module('navigatorGlassProjectApp')
.controller('TimelineCtrl',function(HttpService, $sce, $scope, TimelineService, LocationService, MenuItemService) {
    var allowedJsonKeyProperty = ["id", "etag", "text", "html", "created", "updated", "menuItems", "speakableText"];
    var guidConstant = "00000000-0000-0000-0000-000000000000";
    
    $scope.modes = ['Scheme', 'XML', 'Javascript', 'Html'];
    $scope.mode = $scope.modes[0];
    $scope.timelines = [];
    $scope.albums = [];
    $scope.tabName="HTML";
    $scope.state = null;
    $scope.loadingTimeline = null;

    $scope.selectedTimeline = {};

    $scope.hasStatus = false;
    $scope.statusMessage = "";

    $scope.datepicker = {
        opened: false,
        format: 'dd-MMMM-yyyy',
        dateOptions: {
            formatYear: 'yy',
            startingDay: 1
        }
    };

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.datepicker.opened = true;
    };

    /*
    Method that creates the state for the TimelineItem or TemplateItem
    */

    $scope.selectedTimeline.state = makeState($scope.selectedTimeline);
        
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
        /*
        Method that returns "" in case the textbox is empty.
        */
        function replacer(key, value) {
            return (value ? value : "");
        }

        return JSON.stringify(temporaryState, replacer);
    }

    /*
    Method that creates a JSON representation of a timeline or template.
    */
    function createJsonRepresentation(timeline) {
        var jsonobj = {};
        /*
        Helper method used to iterate through a collection
        */
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

    /*
    Timeline is empty or not
    */
    $scope.isTimelineEmpty = function(){
        var isEmpty = ($scope.loadingTimeline === false && $scope.timelines.length === 0);        
        return isEmpty;
    }

    /*
    Method that creates a preview of the Timeline.
    */
    $scope.previewTimeline = function (timeline, newItem) {
        timeline = setTimelineItemOutput(timeline);
        $scope.selectedTimeline = timeline;
        $scope.oldItem = angular.copy(timeline);
        $scope.selectedTimeline.newItem = newItem;
        $scope.selectedTimeline.state = makeState($scope.selectedTimeline);
        createJsonRepresentation($scope.selectedTimeline);

        if (newItem) {
            $scope.selectedTimeline.output = $scope.selectedTimeline.output;
            $scope.selectedTimeline.initState = $scope.selectedTimeline.output;
        }

        if ($scope.selectedTimeline.id != guidConstant) {
            $scope.selectedTimeline.initState = $scope.selectedTimeline.output;
        }

        updateState();
    };

    /*
    Method that inputs a TimelineItem or TemplateItem and returns it as HTML or Text
    */
    function setTimelineItemOutput(item) {
        if (item.html && item.html.length > 0) {
            item.output = item.html;
            item.htmlState = item.html;
            $scope.tabName="HTML";
        } else {
            item.output = item.textState = item.text;
            $scope.tabName="TEXT"
        }

        var articles = angular.element(item.html).find('article');
        item.thumb = articles.length > 0 ? angular.element(articles[0]).prop('outerHTML') : item.html; // display only 1st article

        return item;
    }

    $scope.getTime = function(str) {
        return (str ? new Date(str).toGMTString() : '');
    };

    $scope.hasProperty = function(property) {
        if ($scope.selectedTimeline && $scope.selectedTimeline.menuItems) {
            for (var i = 0; i < $scope.selectedTimeline.menuItems.length; i++) {
                if ($scope.selectedTimeline.menuItems[i].id == property.id) {
                    return true;
                }
            }
        }

        return false;
    };

    $scope.switchProperty = function(property) {
        if ($scope.selectedTimeline && $scope.selectedTimeline.menuItems) {
            for (var i = 0; i < $scope.selectedTimeline.menuItems.length; i++) {
                if (property.id == $scope.selectedTimeline.menuItems[i].id) {
                    $scope.selectedTimeline.menuItems.splice(i, 1);
                    return;
                }
            }

            $scope.selectedTimeline.menuItems.push(property);
        }
    };

    $scope.aceOption = {
        mode: $scope.mode.toLowerCase(),
        onLoad: function (ace) {
            $scope.modeChanged = function () {
                ace.getSession().setMode('ace/mode/' + $scope.mode.toLowerCase());
                ace.setOptions({
                    maxLines: Infinity
                });
            };
        }
    };

    $scope.getUpdatedCss = function() {
        return ($scope.selectedTimeline && 
            $scope.selectedTimeline.created != $scope.selectedTimeline.updated ? 'color: #0099CC' : '');
    };

    $scope.onUpdate = function() {
        if ($scope.selectedTimeline) {
            TimelineService.updateCard($scope.selectedTimeline).success(function(result) {
                $scope.loadTimelines();
                $scope.showUpdateMessage();
            }).error(function(data, status) {
                if (status == 403) {
                    $scope.showForbidden();
                } if (status == 0) {
                    $scope.showTimeout();
                } else {
                    $scope.showError();
                }
            });
        }
    };

    $scope.onDelete = function() {
        if ($scope.selectedTimeline) {
            TimelineService.deleteCard($scope.selectedTimeline.id).success(function() {
                $scope.selectedTimeline = {};
                $scope.loadTimelines();
                $scope.showDeleteMessage();
            }).error(function(data, status) {
                if (status == 403) {
                    $scope.showForbidden();
                } if (status == 0) {
                    $scope.showTimeout();
                } else {
                    $scope.showError();
                }
            });
        }
    };

    $scope.onInsert = function() {
        if ($scope.selectedTimeline) {
            TimelineService.createCard($scope.selectedTimeline).success(function(result) {
                $scope.loadTimelines();
                $scope.showInsertMessage();
            }).error(function(data, status) {
                if (status == 403) {
                    $scope.showForbidden();
                } if (status == 0) {
                    $scope.showTimeout();
                } else {
                    $scope.showError();
                }
            });
        }
    };

    function updateState() {
        if ($scope.selectedTimeline) {
            if ($scope.selectedTimeline.created != null) {
                $scope.state = "timeline";
            } else {
                $scope.state = "template";
            }
        }
    };

    $scope.isTimeline = function(){        
        return $scope.state == "timeline"; 

    }

    $scope.isTemplate = function(){
        return $scope.state == "template";   
    }


    $scope.messageType = "";

    $scope.showError = function() {
        $scope.messageType = "warning";
        $scope.showMessage("There was an error with your request");
    };

    $scope.showTimeout = function() {
        $scope.messageType = "warning";
        $scope.showMessage("The request timed out");
    };

    $scope.showForbidden = function() {
        $scope.messageType = "warning";
        $scope.showMessage("You are not allowed to do this action");
    };

    $scope.showDeleteMessage = function() {
        $scope.messageType = "success";
        $scope.showMessage("The Item has been deleted");
    };

    $scope.showInsertMessage = function() {
        $scope.messageType = "success";
        $scope.showMessage("The Template has been saved");
    };

    $scope.showUpdateMessage = function() {
        $scope.messageType = "success";
        $scope.showMessage("The Timeline has been updated");
    };

    $scope.showMessage = function(message) {
        $scope.statusMessage = message;
        $scope.hasStatus = true;

        if ($scope.timeout) {
            window.clearTimeout($scope.timeout);
        }

        $scope.timeout = setTimeout(function() {
            $scope.hasStatus = false;
            $scope.$apply();

            $scope.timeout = null;
        }, 5000);
    };

    /*
    Method that uses the TimelineService to retrieve Timelines information using
    the API.After the information is retrieved with success it will output the 
    TimelineItems.
    */
    $scope.loadTimelines = function() {
        $scope.loadingTimeline = true;
        
        TimelineService.getTimeline().success(function(result){
            $scope.timelines= result;
            for(var i=0; i< $scope.timelines.length ; i++) {
                setTimelineItemOutput($scope.timelines[i]);
            }

            //Select first timeline if have
            if($scope.timelines.length !== 0){
                $scope.previewTimeline($scope.timelines[0], false);
            }else {
                if ($scope.previewTemplate) {
                    $scope.previewTemplate();
                };                
            }

            $scope.loadingTimeline = false;
        });
    };

    $scope.loadMenuItems = function() {
        MenuItemService.getMenuItems().success(function(result) {
            $scope.menuItems = result;
            $scope.menuItemBatches = [];

            for (var i = 0; i < result.length; i++) {
                if (i % 5 == 0) {
                    $scope.menuItemBatches.push([]);
                }

                $scope.menuItemBatches[$scope.menuItemBatches.length - 1].push(result[i]);
            }
        });
    };

    $scope.loadAlbums = function() {
        TimelineService.getAlbums().success(function(result) {
            $scope.albums = result;
        });
    };

    function init() {
        $scope.loadTimelines();
        $scope.loadMenuItems();
        $scope.loadAlbums();
    }

    init();
});