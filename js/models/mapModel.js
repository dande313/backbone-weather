define([
    'jquery',
    'underscore',
    'backbone'], function($,_, Backbone){

        var MapModel = Backbone.Model.extend({
            //Attributes:
            //mapUrl
            //layer
            //layerUrl

            defaults: {
                layer: "temperature",
                zoom: 4
            },
            initialize: function(options){
                console.log(this);
                this.currentLocation = options.currentLocation.attributes;
                this.attributes.mapUrl = "https://maps.googleapis.com/maps/api/staticmap?center="+ this.currentLocation.latitude +","+ this.currentLocation.longitude +"&zoom="+ this.attributes.zoom+"&markers=color:blue%7C"+ this.currentLocation.latitude +","+ this.currentLocation.longitude +"&size=800x420&maptype=satellite&key=AIzaSyD00WgZE12rmsdIx6CmM5oZNJFw8xbzgCE"
            }

        }); 
        return MapModel;
});