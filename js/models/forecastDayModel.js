define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var ForecastDay = Backbone.Model.extend({

		titleCase:  function (str){
			str = str.toLowerCase().split(' ');
			for (var i = 0; i < str.length; i++) {
				str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
			}
			return str.join(' ');
		},

		parse: function(data){
			console.log(data)
			var parsedData = {
				//format date
				date: data.dt_txt.substr(5,5) + "-" + data.dt_txt.substr(0,4),

				tempMin: data.minTemp,
				tempMax: data.maxTemp,
				weatherType: this.titleCase(data.weather[0].description),
				weatherIcon: data.weather[0].icon
			}
			return parsedData
		}

	});

	return ForecastDay;
});