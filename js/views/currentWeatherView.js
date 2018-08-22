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
            },

            render: function(){
                console.log(this.model.attributes)
                var weatherAttributes = this.model.attributes;
                var template = currentWeatherViewTemplate;
                this.$el.html(Mustache.to_html(template(), weatherAttributes));

                return this
            }
        })
    return CurrentWeatherView
});