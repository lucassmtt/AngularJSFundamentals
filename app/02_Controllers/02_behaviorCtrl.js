function BehavioCtrl($scope){
    $scope.double = function(value){
        if (!isNaN(value)){
            return value * 2
        }
        else {
            return 0;
        }
    }

}

angular
    .module('app2', [])
    .controller('BehaviorCtrl', BehavioCtrl);