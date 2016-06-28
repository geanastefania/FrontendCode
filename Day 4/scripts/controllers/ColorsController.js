hrApp.controller('ColorsController', ['$scope', function ($scope) {
        $scope.colors = [
            {
                "text": "muted",
                "class": "text-muted",
                "type": "strong"
            },
            {
                "text": "primary",
                "class": "text-primary",
                "type": "strong"
            },
            {
                "text": "success",
                "class": "text-success",
                "type": "weak"
            },
            {
                "text": "info",
                "class": "text-info",
                "type": "strong"
            },
            {
                "text": "warning",
                "class": "text-warning",
                "type": "weak"
            },
            {
                "text": "danger",
                "class": "text-danger",
                "type": "strong"
            }
        ];
    $scope.changeColor=function() {
        $scope.save = $scope.text.class;
    }
    }]);
