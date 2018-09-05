define('ForecastView',[
    'jquery',
    'underscore',
    'backbone',
    'mustache',
    'ForecastDayView',
    'tpl!views/templates/forecast_view.html'
    ],
    function(
        $, _, Backbone, Mustache, ForecastDayView, ForecastViewTemplate
    ){

        var forecastView = Backbone.View.extend({

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
    return forecastView
});