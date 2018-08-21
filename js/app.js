define([
    'jquery',
    'underscore',
    'backbone',
    //location
    'models/locationModel',
    'views/locationView',

    //current weather
    'models/currentWeatherModel',
    'views/currentWeatherView',

    //forecast
    'views/forecastView',

    //map
    'views/mapView',

    //Nav-bar
    'views/navView'
    ], function($,_, Backbone, LocationModel, LocationView, CurrentWeatherModel, CurrentWeatherView, ForecastView, MapView, NavView){
        var currentLocation = new LocationModel({
            streetAddress:"123 Laurelwood Dr",
            city:"Hudsonville",
            state:"MI",
            zipCode: "49426",
            latitude: "42.8614811",
            longitude: "-85.8558409"
        });

        var initialize = function(){
            Backbone.history.start();
            var navView = new NavView({el: "#nav-bar", router:router})
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
                var view = new LocationView({ el: "#location-panel", model: currentLocation})
                displayLocation();
                view.render();
            },
        
            viewCurrent: function(){
                var currentWeather = new CurrentWeatherModel({currentLocation});
                currentWeather.fetch();
                var view = new CurrentWeatherView({ el: "#main-panel", model: currentWeather})
                hideLocation();
                view.render();
            },
        
            viewforecast: function(){
                var view = new ForecastView({ el: "#main-panel"})
                hideLocation();
                view.render();
            },
        
            viewMap: function(){
                var view = new MapView({ el: "#main-panel"})
                hideLocation();
                view.render();
            }

        });

        //functions to keep location across views
        displayLocation= function(){
            $("#location-panel").attr('style', 'display: block')
            $("#main-panel").html("")
        }

        hideLocation= function(){
            $("#location-panel").attr('style', 'display: none')
        }

        var router = new AppRouter();

        return {
            initialize: initialize
        }

});