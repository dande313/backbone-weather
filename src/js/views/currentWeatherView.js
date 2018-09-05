define('CurrentWeatherView',[
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
                this.model.on("change", this.render, this)
            },

            render: function(){
                var weatherAttributes = this.model.attributes;
                var template = currentWeatherViewTemplate;
                this.$el.html(Mustache.to_html(template(), weatherAttributes));
                $("#nav-current").addClass("active")
                return this
            }
        })
    return CurrentWeatherView
});