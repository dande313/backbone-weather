requirejs.config({

  baseUrl: 'js',

  paths: {
    jquery: 'lib/jquery-min',
    underscore: 'lib/underscore-min',
    backbone: 'lib/backbone-min',
    mustache: 'lib/mustache-min',
    tpl: 'lib/tpl',
    backboneLocalstorage: '../node_modules/backbone.localstorage/build/backbone.localStorage',

    Router: 'router',
    app:'app',
    // Collections

    // Models
    location: 'models/locationModel',
    // Views
    LocationView: 'views/locationView',
    MapView: 'views/mapView'
  }
});

define(['app'], function(App){
  App.initialize();
})