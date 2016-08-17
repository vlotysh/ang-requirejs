define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('MyCtrl2', ['$scope', '$http','Page',function ($scope,$http,Page) {
            Page.setTitle('HomeCtrl title 2222');
            $scope.message = "Message from HomeCtrl 222"; 
    }]);
});
