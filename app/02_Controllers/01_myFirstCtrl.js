function myCtrl($scope){
    $scope.name = 'Lucas';
    $scope.postname = 'Motta';
};

myApp = angular
    .module('myApp', [])
    .controller('myCtrl', myCtrl);