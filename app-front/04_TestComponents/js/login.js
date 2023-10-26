(function() {

    'use strict';

    function LoginComponent($routeParams, $location, Title) {
        var $ctrl = this;

        $ctrl.$onInit = onInit;

        function onInit() {
            $ctrl.steps = [
                {
                    url: '/login',
                    label: 'Login'
                }
            ];

            $ctrl.moreActions = [
                {
                    label: 'Login',
                    onClick: function(email, password) {
                        $ctrl.login(email, password);
                    }
                },
                {
                    label: 'Sign-in',
                    onClick: function() {
                        $location.path('login/signin');
                    }
                }
            ];

        }
    }

    angular.module('appFront').component('loginComponent', {
        templateUrl: 'app-front/04_TestComponents/html/index.login.html',
        controller: LoginComponent
    });

    angular.module('appFront').config(function($routeProvider) {
        $routeProvider.when('/login', {
            reloadOnSearch: false,
            template: '<login></login>',
            title: 'Login',
            restPath: '/login',
            program: 'Login'
        });
    });
    }
)();
