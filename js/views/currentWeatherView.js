define([
    'jquery',
    'underscore',
    'backbone',
    'mustache',
    'tpl!views/templates/current_weather_view.html'
    ],
    function(
        $, _, Backbone, Mustache, currentWeatherViewTemplate
    ){

        var CurrentWeatherView = Backbone.View.extend({

            id: "currentWeatherViewContainer",

            initialize: function(options){
                console.log(options);
            },

            render: function(){
                var template = currentWeatherViewTemplate;
                console.log(template)
                this.$el.html(template);

                return this
            }
        })
    return CurrentWeatherView
});