define([
    'jquery',
    'underscore',
    'backbone'], function($,_, Backbone){

        var currentWeatherModel = Backbone.Model.extend({
            initialize: function(options){
                var currentLocation = options.currentLocation.attributes
                this.url = "http://api.openweathermap.org/data/2.5/weather?lat=" + currentLocation.latitude + "&lon=" +currentLocation.longitude + "&units=metric&appid=e0e31fecb53d51f5aa959eee6bc014f1"

            },
            parse: function(data){
                var weatherData = {
                    temp: data.main.temp,
                    humidity: data.main.humidity,
                    pressure: data.main.pressure,
                    visibility: data.visibility,
                    weatherType: data.weather[0].description,
                    weatherIcon: data.weather[0].icon
                }
                return weatherData
            }

        }); 
        return currentWeatherModel;
});