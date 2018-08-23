define([
    'jquery',
    'underscore',
    'backbone',
    'mustache',
    'tpl!views/templates/map_view.html'
    ],
    function(
        $, _, Backbone, Mustache, mapViewTemplate
    ){

        var MapView = Backbone.View.extend({

            id: "mapViewContainer",

            initialize: function(options){
            },

            render: function(){
                var template = mapViewTemplate;
                this.$el.html(template);

                return this
            }
        })
    return MapView
});