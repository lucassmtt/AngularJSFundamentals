(function() {
    'use strict';

    function signinComponent($routeParams, $location, Title, LoginFactory) {
        var $ctrl = this;

        $ctrl.$onInit = onInit;
        $ctrl.save = save;
        $ctrl.goBack = goBack;
        $ctrl.creating = false;

        function onInit() {
            $ctrl.user = {};

            Title.setTitle('Sigin');

            $ctrl.steps = [
                {
                    url: '#/login',
                    label: 'Login'
                },
            ];
        }

        function goBack() {
            return $location.path('login').search({});
        }

        function save() {
            $ctrl.creating = true;
            LoginFactory.save($ctrl.user).then(onSuccessCreate).catch(onErrorCreate).finally(onFinallyCreate);
        }

        function onSuccess(response) {

        }

        function onErrorCreate(response) {

        }

        function onFinallyCreate(response) {

        }

    }

    angular.module('appFront').component('SigninComponent', {
        templateUrl: 'app-front/04_TestComponents/html/index.show.html',
        controller: signinComponent
    });

    angular.module('appFront').config(function($routeProvider) {
        $routeProvider.when('login/:', {
            reloadOnSearch: false,
            template: '<signin></signin>',
            title: 'Signin',
            restPath: '/login'
        });
    });
})();
