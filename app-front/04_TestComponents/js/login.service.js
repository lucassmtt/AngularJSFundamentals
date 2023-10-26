(function () {
    'use strict';

    function LoginFactory($http) {
        var resource = {};

        resource.query = function(params) {
            return $http.get('/api/login', {params: params});
        };

        resource.save = function(user) {
            return $http.post('/api/login', user);
        };

        resource.delete = function(id_user) {
            return $http.delete('/api/login/' + id_user);
        };

        resource.find = function (id_user) {
            return $http.get('/api/login/' + id_user);
        };

        return resource;
    }

    angular.module('appFront').factory('LoginFactory', LoginFactory);
})();
