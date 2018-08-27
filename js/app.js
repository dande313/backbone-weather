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

        var currentLocation = new LocationModel({
            "latitude": 23,
            "longitude":42
        });

        var initialize = function(){
            Backbone.history.start();
            var navView = new NavView({el: "#nav-bar", router:router})
            navView.render();
            $("#nav-bar ul li").removeClass();
            router.disableAllButLocation();
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
                $("#nav-location").addClass("active")
                var view = new LocationView({ el: "#main-panel", model: currentLocation})
                view.render();
            },
        
            viewCurrent: function(){
                if (this.coordinateTest()){
                    let router = this;
                    var currentWeather = new CurrentWeatherModel({currentLocation});
                    currentWeather.fetch().done(function(){
                        router.enableAllLinks();
                        $("#nav-current").addClass("active")
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
                        $("#nav-forecast").addClass("active")
                        var view = new ForecastView({ el: "#main-panel", collection: forecast})
                        view.render();
                    })
                }
            },
        
            viewMap: function(){
                if (this.coordinateTest()){
                    this.enableAllLinks();
                    $("#nav-map").addClass("active")
                    var view = new MapView({ el: "#main-panel"})
                    view.render();
                }
            },

            //coordinate check functions
            coordinateTest: function (){
                let latitude = parseFloat(currentLocation.get("latitude"));
                let longitude = parseFloat(currentLocation.get("longitude"));
                console.log(latitude);

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
                    return false
                } else {
                    this.enableAllLinks();
                    return true
                }
            },

            locationErrorHandler: function(){
                this.disableAllButLocation();
                router.navigate("location", {trigger: true})
                alert("Location Error");
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