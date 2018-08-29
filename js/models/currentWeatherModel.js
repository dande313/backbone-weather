define([
    'jquery',
    'underscore',
    'backbone'], function($,_, Backbone){

        var currentWeatherModel = Backbone.Model.extend({
            initialize: function(options){
                this.url = "http://api.openweathermap.org/data/2.5/weather?lat=" + 
                options.currentLocation.attributes.latitude + 
                "&lon=" +options.currentLocation.attributes.longitude + 
                "&units=imperial&appid=e0e31fecb53d51f5aa959eee6bc014f1"

            },

            //To uppercase weather description
            titleCase: function (str){
                str = str.toLowerCase().split(' ');
                for (var i = 0; i < str.length; i++) {
                    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                }
                return str.join(' ');
            },

            parse: function(data){
                var weatherData = {
                    temp: data.main.temp,
                    humidity: data.main.humidity,
                    pressure: data.main.pressure,
                    visibility: data.visibility,
                    weatherType: this.titleCase(data.weather[0].description),
                    weatherIcon: data.weather[0].icon
                }
                return weatherData
            }

        }); 
        return currentWeatherModel;
});