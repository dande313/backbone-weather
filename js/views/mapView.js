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
            events: {
                'change #map-zoom': 'changeZoom',
            },

            initialize: function(options){
                console.log(options)
            },

            changeZoom: function(e){
                console.log("yay!");
                console.log(e)
                this.model.set("zoom", e.target.value)
                this.model.set("mapUrl", "https://maps.googleapis.com/maps/api/staticmap?center="+ this.model.currentLocation.latitude +","+ this.model.currentLocation.longitude +"&zoom="+ this.model.attributes.zoom+"&markers=color:blue%7C"+ this.model.currentLocation.latitude +","+ this.model.currentLocation.longitude +"&size=800x420&maptype=satellite&key=AIzaSyD00WgZE12rmsdIx6CmM5oZNJFw8xbzgCE")
                this.render();
            },

            render: function(){
                var mapAttributes = this.model.attributes;
                var template = mapViewTemplate;
                this.$el.html(Mustache.to_html(template(), mapAttributes));
                this.$el.find('#map-zoom option[value='+this.model.attributes.zoom +']').attr('selected', true)

                return this
            }
        })
    return MapView
});