define([
    'jquery',
    'underscore',
    'backbone'], function($,_, Backbone){

        var MapModel = Backbone.Model.extend({
            default: {
                layer: "temperature"
            },
            initialize: function(options){
                this.url = "https://tile.openweathermap.org/map/clouds/14/35/-83.png?appid=e0e31fecb53d51f5aa959eee6bc014f1" + 
                options.currentLocation.attributes.latitude + 
                "&lon=" +options.currentLocation.attributes.longitude + 
                "&units=imperial&appid=e0e31fecb53d51f5aa959eee6bc014f1"

            },

            parse: function(data){

                return data
            }

        }); 
        return MapModel;
});