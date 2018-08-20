define([
    'jquery',
    'underscore',
    'backbone',
    'mustache',
    'tpl!views/templates/location_view.html'
    ],
    function(
        $, _, Backbone, Mustache, locationViewTemplate
    ){

        var LocationView = Backbone.View.extend({

            id: "locationViewContainer",

            initialize: function(options){
                console.log(options);
            },

            render: function(){
                var template = locationViewTemplate;
                console.log(template)
                this.$el.html(template);

                return this
            }
        })
    return LocationView
});