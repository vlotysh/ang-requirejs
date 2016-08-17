//https://habrahabr.ru/post/225931/
require.config({
 
     //  псевдонимы и пути используемых библиотек и плагинов
     paths: {
         'domReady': '../bower_components/requirejs-domready/domReady',
         'angular': '../bower_components/angular/angular',
         'angular-route': '../bower_components/angular-route/angular-route'
     },
 
     // angular не поддерживает AMD из коробки, поэтому экспортируем перменную angular в глобальную область
     shim: {
         'angular': {
             exports: 'angular'
         },
         'angular-route': {
             exports: 'angular-route'
         }
     },
 
     // запустить приложение
     deps: ['./bootstrap']
});