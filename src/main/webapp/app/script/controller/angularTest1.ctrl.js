angular.module('angularTest1App')
.controller('angularTest1Controller', ['$scope', function($scope){
    $scope.greeting = 'Hello greeting';

    $scope.double = function(value) {
        return value*2;
    };


}]);