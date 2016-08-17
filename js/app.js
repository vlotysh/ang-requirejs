define([
     'angular',
     './controllers/index',
     'angular-route'
//     './directives/index',
//     './filters/index',
//     './services/index'
 ], function (ng) {
     'use strict';
 
     return ng.module('app', [
//         'app.services',
         'app.controllers',
         'ngRoute'
//         'app.filters',
//         'app.directives'
     ]);
});
