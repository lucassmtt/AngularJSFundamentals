import angular from "angular";

var app = angular.module('app', []);

app.controller('GreetingController', [$scope, function($scope){
    $scope.greeting = 'Hello mundo';
}]);

angular.module('app', []).controller('myCtrl', [$scope, function($scope){
    $scope.name = 'Lucas';
}])