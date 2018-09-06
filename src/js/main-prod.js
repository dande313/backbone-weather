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
    'LocationModel': 'scripts',
    'LocationView': 'scripts',

    //current weather
    'CurrentWeatherModel': 'scripts',
    'CurrentWeatherView': 'scripts',

    //forecast
    'ForecastView': 'scripts',
    'ForecastDayView': 'scripts',
    'ForecastDayModel': 'scripts',
    'ForecastCollection': 'scripts',

    //map
    'MapModel': 'scripts',
    'MapView': 'scripts',

    //Nav-bar
    'NavView': 'scripts'
  }
});

define(['app'], function(App){
  App.initialize();
})