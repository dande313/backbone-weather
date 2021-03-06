define('ForecastDayView',[
    'jquery',
    'underscore',
    'backbone',
    'mustache',
    'tpl!views/templates/forecast_day_view.html'
    ],
    function(
        $, _, Backbone, Mustache, ForecastDayViewTemplate
    ){

        var forecastDayView = Backbone.View.extend({

            class: "forcast-day-container",

            initialize: function(options){
                if(!options || !options.model) {
                    throw new Error("bad model")
                }
            },

            render: function(){
                var template = ForecastDayViewTemplate
                var html = Mustache.render(template(), this.model.toJSON());
                this.$el.html(html);
                return html
            }
        })
    return forecastDayView
});