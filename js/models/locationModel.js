define([
    'underscore',
    'backbone'], function(_, Backbone){

        //attributes
        /* 
        streetAddress
        city
        state
        zipCode
        latitude
        longitude
        */
        var Location = Backbone.Model.extend();
        
        return Location;
});