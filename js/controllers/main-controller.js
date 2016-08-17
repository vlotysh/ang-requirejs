define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('mainCtrl', ['$scope', '$http','Page',function ($scope, $http,Page) {
                
            $scope.Page = Page;
            
            
    }]);
});
