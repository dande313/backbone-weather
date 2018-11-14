define('MapView',[
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
                'change #map-layer': 'changeLayer',
            },

            initialize: function(options){
            },

            changeZoom: function(e){
                this.model.set("zoom", e.target.value)
                this.setMap();

                this.render();
            },

            changeLayer: function(e){
                this.model.set("layer", e.target.value)
                this.setMap();

                this.render();
            },

            setMap: function(){
                var model = this.model

                //map base
                model.set("mapUrl", "https://maps.googleapis.com/maps/api/staticmap?center="+ model.currentLocation.latitude +","+ model.currentLocation.longitude +"&zoom="+ model.attributes.zoom+"&markers=color:blue%7C"+ model.currentLocation.latitude +","+ model.currentLocation.longitude +"&size=640x420&maptype=satellite&key=AIzaSyD00WgZE12rmsdIx6CmM5oZNJFw8xbzgCE")
                //map overlay
                if (model.attributes.layer != "none"){
                    model.set("layerUrl", "https://maps.aerisapi.com/JAi10dHPEzQeN65sqCpgN_BzK677XZpQ0RiGB1dm6VhFBdu1m8vlLXSuM59PC3/"+model.attributes.layer+"/640x420/"+ model.currentLocation.latitude +","+ model.currentLocation.longitude +","+ model.attributes.zoom+"/current.png")
                } else {
                    model.set("layerUrl", "")
                }
            },

            render: function(){
                var mapAttributes = this.model.attributes;
                var template = mapViewTemplate;
                this.$el.html(Mustache.to_html(template(), mapAttributes));
                this.$el.find('#map-zoom option[value='+this.model.attributes.zoom +']').attr('selected', true)
                this.$el.find('#map-layer option[value='+this.model.attributes.layer +']').attr('selected', true)
                $("#nav-map").addClass("active")
                return this
            }
        })
    return MapView
});
