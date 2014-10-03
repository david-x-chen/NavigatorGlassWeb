'use strict';
angular.module('navigatorGlassProjectApp')
.controller('headerController', function ($scope, $location, authService) {

$scope.logOut = function () {
        authService.logOut();
        $location.path('/#/');
    }

    $scope.authentication = authService.authentication;

});