module.exports = {
    build_files: {
      files: {
        //js library
        'build/js/lib/require-min.js':              ['src/js/lib/require-min.js'],
        'build/js/lib/backbone-min.js':             ['src/js/lib/backbone-min.js'],
        'build/js/lib/jquery-min.js':               ['src/js/lib/jquery-min.js'],
        'build/js/lib/underscore-min.js':           ['src/js/lib/underscore-min.js'],
        'build/js/lib/mustache-min.js':             ['src/js/lib/mustache-min.js'],
        'build/js/lib/tpl.js':                      ['src/js/lib/tpl.js'],
        'build/js/lib/modernizr-2.6.2.min.js':      ['src/js/lib/modernizr-2.6.2.min.js'],
        'build/js/lib/less-min.js':                 ['src/js/lib/less-min.js'],
        'build/js/main.js':                         ['src/js/main.js'],

        //images
        'build/img/legends/legend-fwinds.svg':      ['build/img/legends/legend-fwinds.svg'], 
        'build/img/legends/legend-radar.svg':       ['build/img/legends/legend-radar.svg'], 
        'build/img/legends/legend-temperatures.svg':['build/img/legends/legend-temperatures.svg'], 
        'build/img/background.jpg':                 ['build/img/background.jpg'], 

        //base html & templates
        'build/index.html':                                     ['src/index.html'],
        'build/js/views/templates/current_weather_view.html':   ['src/js/views/templates/current_weather_view.html'],
        'build/js/views/templates/forecast_day_view.html':      ['src/js/views/templates/forecast_day_view.html'],
        'build/js/views/templates/forecast_view.html':          ['src/js/views/templates/forecast_view.html'],
        'build/js/views/templates/location_view.html':          ['src/js/views/templates/location_view.html'],
        'build/js/views/templates/map_view.html':               ['src/js/views/templates/map_view.html']
      }
    },
    build_css: {
        files: {
          'build/css/main.less': ['src/css/main.less', 'src/css/normalize.min.css'],  
        }
    },
    build_js_master: {
        files: {
          'build/js/app.js': ['src/js/app.js', 'src/js/views/*.js', 'src/js/models/*.js', 'src/js/collections/*.js']  
        }
    }

}