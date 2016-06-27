hrApp.controller('MathController', ['$scope','MathService', function($scope,MathService){
    
    $scope.calculate = function() {
//        TODO #8 calculate op1, op2, op3, op4
        $scope.op1=MathService.add($scope.number1,$scope.number2);
        $scope.op2=MathService.substract($scope.number1,$scope.number2);
        $scope.op3=MathService.multiply($scope.number1,$scope.number2);
        $scope.op4=MathService.divide($scope.number1,$scope.number2);

//        TODO #13 refactor your calculations using MathService
    }

}]);
