requirejs.config({

  baseUrl: 'js',

  paths: {
    jquery: 'lib/jquery-min',
    underscore: 'lib/underscore-min',
    backbone: 'lib/backbone-min',
    mustache: 'lib/mustache',
    Initialize: 'app',
    Router: 'router',
    // Collections

    // Models
    location: 'models/location'
    // Views
  }
});

require(['Initialize'], function (Initialize) {
  Initialize.initialize();
});