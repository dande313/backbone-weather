requirejs.config({

  baseUrl: 'js',

  paths: {
    jquery: 'lib/jquery-min',
    underscore: 'lib/underscore-min',
    backbone: 'lib/backbone-min',
    mustache: 'lib/mustache-min',
    tpl: 'lib/tpl',

    Router: 'router',
    app:'app',

    //location
    'locationModel': 'models/locationModel',
    'locationView': 'views/locationView',

    //current weather
    'currentWeatherModel': 'models/currentWeatherModel',
    'currentWeatherView': 'views/currentWeatherView',

    //forecast
    'forecastView': 'views/forecastView',
    'forecastDayView': 'views/forecastDayView',
    'forecastDayModel': 'models/forecastDayModel',
    'forecastCollection': 'collections/forecastCollection',

    //map
    'mapModel': 'models/mapModel',
    'mapView': 'views/mapView',

    //Nav-bar
    'navView': 'views/navView'
  }
});

define(['app'], function(App){
  App.initialize();
})