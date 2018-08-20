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
                console.log(options);
            },

            render: function(){
                var template = mapViewTemplate;
                console.log(template)
                this.$el.html(template);

                return this
            }
        })
    return MapView
});