define([
    'jquery',
    'underscore',
    'backbone',
    'mustache',
    'views/forecastView',
    'views/forecastDayView',
    'tpl!views/templates/forecast_view.html'
    ],
    function(
        $, _, Backbone, Mustache, ForecastView, ForecastDayView, ForecastViewTemplate
    ){

        var ForecastView = Backbone.View.extend({

            initialize: function(options){
            },


            render: function(){
                this.$el.html(Mustache.render(ForecastViewTemplate()))
                this.collection.forEach(function(day){
                    var dayView = new ForecastDayView({model: day})
                    var dayViewRender = dayView.render();
                    $("#forecast-week-row").append(dayViewRender);
                })
                $("#nav-forecast").addClass("active")
                return this
            }
        })
    return ForecastView
});