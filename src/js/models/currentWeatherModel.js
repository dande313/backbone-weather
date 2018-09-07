define('CurrentWeatherModel',[
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


            determineWindDirection: function(windDeg){
                var num= parseInt((windDeg/22.5)+.5)
                var dirArr=["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"]
                return dirArr[(num % 16)]
            },

            determineWindType: function(windSpeed){
                
            },

            parse: function(data){
                var weatherData = {
                    temp: data.main.temp,
                    humidity: data.main.humidity,
                    pressure: data.main.pressure,
                    visibility: data.visibility,
                    wind: {speed: data.wind.speed, direction: this.determineWindDirection(data.wind.deg)}, 
                    weatherType: this.titleCase(data.weather[0].description),
                    weatherIcon: data.weather[0].icon
                }
                return weatherData
            }

        }); 
        return currentWeatherModel;
});