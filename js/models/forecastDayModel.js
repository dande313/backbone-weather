define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var ForecastDay = Backbone.Model.extend({

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