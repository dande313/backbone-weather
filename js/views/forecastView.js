define([
    'jquery',
    'underscore',
    'backbone',
    'mustache',
    'tpl!views/templates/forecast_view.html'
    ],
    function(
        $, _, Backbone, Mustache, forecastViewTemplate
    ){

        var ForecastView = Backbone.View.extend({

            id: "forecastViewContainer",

            initialize: function(options){
                console.log(options);
            },

            render: function(){
                var template = forecastViewTemplate;
                this.$el.html(template);

                return this
            }
        })
    return ForecastView
});