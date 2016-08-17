define(['./app'], function (app) {
    'use strict';
    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider.when('/view1', {
                templateUrl: 'partials/partial1.html',
                controller: 'MyCtrl1'
            });

            $routeProvider.when('/view2', {
                templateUrl: 'partials/partial2.html',
                controller: 'MyCtrl2'
            });

            $routeProvider.otherwise({
                redirectTo: '/view1'
            });
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        }]);


    app.factory('Page', function () {
        var title = 'default';
        return {
            title: function () {
                return title;
            },
            setTitle: function (newTitle) {
                title = newTitle
            }
        };

        return  app;
    });
});
