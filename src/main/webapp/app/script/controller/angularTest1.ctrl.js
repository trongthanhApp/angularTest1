angular.module('angularTest1App')
    .controller('angularTest1Controller', ['$scope', function ($scope) {
        $scope.greeting = 'Hello greeting';
        $scope.valueInput = '';
        $scope.valueOutput = '';


        $scope.double = function (value) {
            return value * 2;
        };

        $scope.copy = function (valueInput) {
            $scope.valueOutput = valueInput;
        }

        


    }]);