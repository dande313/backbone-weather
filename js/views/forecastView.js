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
                var element = this.$el
                var template = ForecastViewTemplate;
                var html = Mustache.render(template());
                this.collection.forEach(function(day){
                    var dayView = new ForecastDayView({model: day})
                    var dayViewRender = dayView.render();
                    html = html + dayViewRender
                })
                element.html(html);

                return this
            }
        })
    return ForecastView
});