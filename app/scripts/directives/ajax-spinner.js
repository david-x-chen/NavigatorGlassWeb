'use strict';

angular.module('navigatorGlassProjectApp')
    .directive("ajaxSpinner", function () {
    return {
        restrict: "A",
        scope: {
            loading: "=ajaxSpinner"
        },
        link: function ($scope, element, attrs) {
            angular.element.blockUI.defaults.message = '<div class="ajax-spinner-message"></div>';
            //angular.element.blockUI.defaults.message = '';

            angular.element.blockUI.defaults.overlayCSS =  { 
                backgroundColor: '#fff', 
                opacity:         1.0, 
                cursor:          'wait' 
            },
            
            angular.element.blockUI.defaults.css = {
                padding: 0,
                margin: 0,
                width: '100%',
                height: '100%', 
                //top: '40%',
                //left:           '35%', 
                textAlign: 'center',
                color: '#000',
                //border: '3px solid #aaa',
                //backgroundColor: '#fff',
                background: 'transparent',
                cursor: 'wait'
            };

            $scope.$watch('loading', function () {
                if ($scope.loading) {
                    angular.element(element).block(); 
                } else {
                    angular.element(element).unblock();
                }
            });
        }
    };
});