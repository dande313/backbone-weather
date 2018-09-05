define('ForecastDayModel',[
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var forecastDayModel = Backbone.Model.extend({

		titleCase:  function (str){
			str = str.toLowerCase().split(' ');
			for (var i = 0; i < str.length; i++) {
				str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
			}
			return str.join(' ');
		},

		parse: function(data){
			var date = data.dt_txt.substr(5,5) + "-" + data.dt_txt.substr(0,4)
			var dayOfTheWeek = function(){
				let jsDate = new Date(date)
				var weekDay;
				switch (jsDate.getDay()){
					case 0:
						weekDay = "Sunday";
						break;
					case 1:
						weekDay = "Monday";
						break;
					case 2:
						weekDay = "Tuesday";
						break;
					case 3:
						weekDay = "Wednesday";
						break;
					case 4:
						weekDay = "Thursday";
						break;
					case 5:
						weekDay = "Friday";
						break;
					case 6:
						weekDay = "Saturday";
				}
				
				return weekDay
			}
			var parsedData = {
				//format date
				date: date,
				dayOfTheWeek: dayOfTheWeek(),
				tempMin: data.minTemp,
				tempMax: data.maxTemp,
				weatherType: this.titleCase(data.weather[0].description),
				weatherIcon: data.weather[0].icon
			}
			return parsedData
		}

	});

	return forecastDayModel;
});