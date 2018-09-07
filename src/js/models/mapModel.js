define('MapModel',[
    'jquery',
    'underscore',
    'backbone'], function($,_, Backbone){

        var MapModel = Backbone.Model.extend({
            //Attributes:
            //mapUrl
            //layer
            //layerUrl

            defaults: {
                layer: "radar",
                zoom: 6
            },
            initialize: function(options){
                this.currentLocation = options.currentLocation.attributes;
                this.attributes.mapUrl = "https://maps.googleapis.com/maps/api/staticmap?center="+ this.currentLocation.latitude +","+ this.currentLocation.longitude +"&zoom="+ this.attributes.zoom+"&markers=color:blue%7C"+ this.currentLocation.latitude +","+ this.currentLocation.longitude +"&size=640x420&maptype=satellite&key=AIzaSyD00WgZE12rmsdIx6CmM5oZNJFw8xbzgCE"
                this.attributes.layerUrl = "https://maps.aerisapi.com/dFkLZrFU77uiTtnLAkl3f_131s9Xmu7KIr7L3xve0zEk0wnVJSn4cgwBYkBZUp/"+this.attributes.layer+"/640x420/"+ this.currentLocation.latitude +","+ this.currentLocation.longitude +","+ this.attributes.zoom+"/current.png"
            }

        }); 
        return MapModel;
});