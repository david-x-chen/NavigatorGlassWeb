angular.module('navigatorGlassProjectApp')
.controller('CardCtrl',function($scope){    
    


    $scope.onPrev = function() {
        console.log('prev');
    };    

    $scope.onNext = function() {
        console.log('next');
    };

    
});