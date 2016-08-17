 /**
  * bootstraps angular onto the window.document node
  */
 define([
     'angular',
     'require',
     'angular-route',
     'app',
     'routes'
 ], function (ng,require) {
     'use strict';
 
     require(['domReady!'], function (document) {
         ng.bootstrap(document, ['app']);
     });
});