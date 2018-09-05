define([
    'jquery',
    'underscore',
    'backbone',
    //location
    'LocationModel',
    'LocationView',

    //current weather
    'CurrentWeatherModel',
    'CurrentWeatherView',

    //forecast
    'ForecastView',
    'ForecastCollection',

    //map
    'MapModel',
    'MapView',

    //Nav-bar
    'NavView'
    ], function($,_, Backbone, LocationModel, LocationView, CurrentWeatherModel, CurrentWeatherView, ForecastView, ForecastCollection, MapModel, MapView, NavView){

        var currentLocation = new LocationModel({
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
                router.enableAllLinks();
                var view = new LocationView({ el: "#main-panel", model: currentLocation})
                view.render();
            },
        
            viewCurrent: function(){
                if (this.coordinateTest()){
                    let router = this;
                    var currentWeather = new CurrentWeatherModel({currentLocation});
                    currentWeather.fetch().done(function(){
                        router.enableAllLinks();
                        var view = new CurrentWeatherView({ el: "#main-panel", model: currentWeather})
                        view.render();
                    });
                }
            },
        
            viewforecast: function(){
                if (this.coordinateTest()){
                    let router = this;
                    var forecast = new ForecastCollection({currentLocation});
                    forecast.fetch().done(function(){
                        router.enableAllLinks();
                        var view = new ForecastView({ el: "#main-panel", collection: forecast})
                        view.render();
                    })
                }
            },
        
            viewMap: function(){
                if (this.coordinateTest()){
                    let router = this;
                    var currentWeatherMap = new MapModel({currentLocation})
                    this.enableAllLinks();
                    var view = new MapView({ el: "#main-panel", model: currentWeatherMap})
                    view.render();
                }
            },

            //coordinate check functions
            coordinateTest: function (){
                let latitude = parseFloat(currentLocation.get("latitude"));
                let longitude = parseFloat(currentLocation.get("longitude"));

                if (
                    //What makes lat/lon fail?
                    isNaN(latitude)|| 
                    latitude > 90 || 
                    latitude < -90 || 
                    isNaN(longitude)|| 
                    longitude > 180|| 
                    longitude < -180 
                ){
                    this.locationErrorHandler();
                    return false;
                } else {
                    return true;
                }
            },

            locationErrorHandler: function(){
                this.disableAllButLocation();
                router.navigate("location", {trigger: true})
            },

            //jQuery functions
            disableAllButLocation: function(){
                $("#nav-location").addClass("active") 
            },

            enableAllLinks: function(){
                $("#nav-bar ul li").removeClass();
            }

        });

        var router = new AppRouter();

        return {
            initialize: initialize
        }

});