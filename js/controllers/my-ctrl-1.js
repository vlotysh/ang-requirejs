define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('MyCtrl1', ['$scope', '$http','Page',function ($scope, $http,Page) {
                
          Page.setTitle('HomeCtrl title 111');
                $scope.message = "Message from HomeCtrl 111"; 
            
            
    }]);
});
