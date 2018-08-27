define([
    'underscore',
    'backbone', 'backboneLocalstorage'], function(_, Backbone, LocalStorage){

        //attributes
        /* 
        streetAddress
        city
        state
        zipCode
        latitude
        longitude
        */
        var Location = Backbone.Model.extend({

            initialize: function(options){
            }

        });
        
        return Location;
});