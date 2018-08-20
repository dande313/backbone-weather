define([
    'jquery',
    'underscore',
    'backbone',
    //location
    'models/location',
    'views/locationView',

    //current weather
    'views/currentWeatherView',

    //forecast
    'views/forecastView',

    //map
    'views/mapView',

    //Nav-bar
    'views/navView'
    ], function($,_, Backbone, Location, LocationView,CurrentWeatherView, ForecastView, MapView, NavView){

        var initialize = function(){
            Backbone.history.start();

            var navView = new NavView({el: "#nav-bar", router:router})
            console.log(navView)
            navView.render();
        }



        var AppRouter = Backbone.Router.extend({
            routes: {
                "location": "viewLocation",
                "current": "viewCurrent",
                "forecast": "viewforecast",
                "map": "viewMap",
                "*other": "viewLocation"
            },
        
            viewLocation: function(){
                var view = new LocationView({ el: "#main-panel"})
                view.render();
            },
        
            viewCurrent: function(){
                var view = new CurrentWeatherView({ el: "#main-panel"})
                view.render();
            },
        
            viewforecast: function(){
                var view = new ForecastView({ el: "#main-panel"})
                view.render();
            },
        
            viewMap: function(){
                var view = new MapView({ el: "#main-panel"})
                view.render();
            }
        });

        var router = new AppRouter();

        return {
            initialize: initialize
        }

});