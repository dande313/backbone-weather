define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var ForecastDay = Backbone.Model.extend({
		urlRoot:"http://api.openweathermap.org/data/2.5/forecast?lat=27&lon=-85&units=imperial&appid=e0e31fecb53d51f5aa959eee6bc014f1",

		parse: function(data){
			var parsedData = {
				date: data.dt_txt,
				tempAvg: data.main.temp,
				weatherType: data.weather[0].description,
				weatherIcon: data.weather[0].icon
			}
			return parsedData
		}

	});

	return ForecastDay;
});