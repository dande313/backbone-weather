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
      'locationModel': 'scripts',
      'locationView': 'scripts',
  
      //current weather
      'currentWeatherModel': 'scripts',
      'currentWeatherView': 'scripts',
  
      //forecast
      'forecastView': 'scripts',
      'forecastDayView': 'scripts',
      'forecastDayModel': 'scripts',
      'forecastCollection': 'scripts',
  
      //map
      'mapModel': 'scripts',
      'mapView': 'scripts',
  
      //Nav-bar
      'navView': 'scripts'
    }
  });
  
  define(['app'], function(App){
    App.initialize();
  })