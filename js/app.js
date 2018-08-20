define([
    'jquery',
    'underscore',
    'backbone',
    'models/location',
    'views/locationView',
    'views/mapView',
    'views/navView'
    ], function($,_, Backbone, Location, LocationView, MapView, NavView){

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
                console.log("Current at ")
            },
        
            viewforecast: function(){
                console.log("Forecast at ")
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