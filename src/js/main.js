requirejs.config({

  baseUrl: 'js',

  paths: {
    jquery: 'lib/jquery-min',
    underscore: 'lib/underscore-min',
    backbone: 'lib/backbone-min',
    mustache: 'lib/mustache-min',
    tpl: 'lib/tpl',

    Router: 'router',
    App:'app',

    //location
    'LocationModel': 'models/locationModel',
    'LocationView': 'views/locationView',

    //current weather
    'CurrentWeatherModel': 'models/currentWeatherModel',
    'CurrentWeatherView': 'views/currentWeatherView',

    //forecast
    'ForecastView': 'views/forecastView',
    'ForecastDayView': 'views/forecastDayView',
    'ForecastDayModel': 'models/forecastDayModel',
    'ForecastCollection': 'collections/forecastCollection',

    //map
    'MapModel': 'models/mapModel',
    'MapView': 'views/mapView',

    //Nav-bar
    'NavView': 'views/navView'
  }
});

define(['App'], function(App){
  App.initialize();
})