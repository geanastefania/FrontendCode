angular.module('hrApp').controller('DescriptionController',function($scope){
    $scope.title='Two Way Binding Demo';
    $scope.childtemplate='templates/childscope.html';
    $scope.resetFirstVariable = function(){
        $scope.firstVariable = undefined;
    };
    $scope.setFirstvariable = function(val){
        $scope.firstVariable = val;
    };

    $scope.descriptionShow = false;

    $scope.toggleDescriptionShow = function (){

        if ($scope.descriptionShow == true) {
            $scope.descriptionShow = false;
        } else {
            $scope.descriptionShow = true;
        }

    }
});