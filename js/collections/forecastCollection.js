define([
	'underscore',
	'backbone',
	'models/forecastDayModel'
], function (_, Backbone, ForecastDay) {

	var ForecastCollection = Backbone.Collection.extend({
        model: ForecastDay,
        initialize: function(data){
            var currentLocation = data.currentLocation;
            var latitude = currentLocation.get("latitude");
            var longitude = currentLocation.get("longitude");
            this.url = "http://api.openweathermap.org/data/2.5/forecast?lat="+
            latitude + "&lon=" + longitude +
            "&units=imperial&appid=e0e31fecb53d51f5aa959eee6bc014f1";
        },

        parse: function(data){
            var forecastArr = data.list;
            var dayArrays = [] 
            var dayArraySize = 8;

            while (forecastArr.length > 0) {
                dayArrays.push(forecastArr.splice(0, dayArraySize));
            }

            findMinTemp = function(dayArr){
                let minTemp;
                for (i = 0; i < dayArr.length; i++){
                    if (i === 0 || dayArr[i].main.temp_min < minTemp){
                        minTemp = dayArr[i].main.temp_min;
                    } 
                }
                return minTemp;                
            }

            findMaxTemp = function(dayArr){
                let maxTemp;
                for (i = 0; i < dayArr.length; i++){
                    if (i === 0 || dayArr[i].main.temp_max > maxTemp){
                        maxTemp = dayArr[i].main.temp_max;
                    } 
                }
                return maxTemp;                
            }

            condenseDayArr = function(dayArr){
                let minTemp = findMinTemp(dayArr)
                let maxTemp = findMaxTemp(dayArr)
                dayData = dayArr.filter(x => x.dt_txt.substr(11,18) === "12:00:00")
                dayData[0].maxTemp = maxTemp.toFixed(1);
                dayData[0].minTemp = minTemp.toFixed(1);
                return dayData[0];
            }

            //plug everything into new model array
            let condensedDayArray = dayArrays.map(x => condenseDayArr(x))
            return condensedDayArray;
        }
    });

	return ForecastCollection;
});
