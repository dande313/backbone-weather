define([
	'underscore',
	'backbone',
	'models/forecastDayModel'
], function (_, Backbone, ForecastDay) {

	var ForecastCollection = Backbone.Collection.extend({
        model: ForecastDay,
        url: "http://api.openweathermap.org/data/2.5/forecast?lat=27&lon=-85&appid=e0e31fecb53d51f5aa959eee6bc014f1",

        parse: function(data){
            var forecastArr = data.list
            var filteredForecastArr = forecastArr.filter(forecastDay => forecastDay.dt_txt.substr(11,18) === "12:00:00")
            return filteredForecastArr;

        }
	});

	return ForecastCollection;
});
