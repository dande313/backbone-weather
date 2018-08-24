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
    'views/forecastDayView',
    'models/forecastDayModel',
    'collections/forecastCollection',

    //map
    'views/mapView',

    //Nav-bar
    'views/navView'
    ], function($,_, Backbone, LocationModel, LocationView, CurrentWeatherModel, CurrentWeatherView, ForecastView, ForecastDayView, ForecastDayModel, ForecastCollection, MapView, NavView){
        var currentLocation = new LocationModel();
        console.log(currentLocation)
        console.log(navigator.geolocation);

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
                var view = new LocationView({ el: "#main-panel", model: currentLocation})
                view.render();
            },
        
            viewCurrent: function(){
                if (!currentLocation.get("latitude")){
                    this.locationErrorHandler();
                } else {
                    var currentWeather = new CurrentWeatherModel({currentLocation});
                    currentWeather.fetch().done(function(){
                        var view = new CurrentWeatherView({ el: "#main-panel", model: currentWeather})
                        view.render();
                    });
                }
            },
        
            viewforecast: function(){
                if (!currentLocation.get("latitude")){
                    this.locationErrorHandler();
                } else {
                    var forecast = new ForecastCollection({currentLocation});
                    forecast.fetch().done(function(){
                            var view = new ForecastView({ el: "#main-panel", collection: forecast})
                            view.render();
                    })
                }
            },
        
            viewMap: function(){
                if (!currentLocation.get("latitude")){
                    this.locationErrorHandler();
                } else {
                    var view = new MapView({ el: "#main-panel"})
                    view.render();
                }
            },

            locationErrorHandler: function(){
                router.navigate("location", {trigger: true})
                alert("Location Error");
            }

        });

        var router = new AppRouter();

        return {
            initialize: initialize
        }

});