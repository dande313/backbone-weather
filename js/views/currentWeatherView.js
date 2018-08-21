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
                var weatherAttributes = this.model.attributes
                var fakeAttributes = {temp: 20}
                console.log(this.model.attributes)
                var template = currentWeatherViewTemplate;
                this.$el.html(Mustache.to_html(template(), weatherAttributes));

                return this
            }
        })
    return CurrentWeatherView
});