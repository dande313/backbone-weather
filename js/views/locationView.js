define([
    'jquery',
    'underscore',
    'backbone',
    'mustache',
    'tpl!views/templates/location_view.html',
    'models/locationModel'
    ],
    function(
        $, _, Backbone, Mustache, locationViewTemplate, Location
    ){
        


        var LocationView = Backbone.View.extend({

            id: "locationViewContainer",

            events: {
                'click #update-button': 'updateLocation'
            },

            initialize: function(options){
            },

            updateLocation: function(){
                var currentLocation = {
                    id: 1,
                    streetAddress: $("#location-address").val(),
                    city: $("#location-city").val(),
                    state: $("#location-state").val(),
                    zipCode: $("#location-zipCode").val(),
                    latitude: $("#location-latitude").val(),
                    longitude: $("#location-longitude").val()
                }
                this.model.set(currentLocation);
                console.log(this.model);
            },

            render: function(){
                var template = locationViewTemplate;
                this.$el.html(Mustache.to_html(template(), this.model.attributes));
                this.$el.find('option[value='+this.model.attributes.state +']').attr('selected', true)
                return this
            }
        })
    return LocationView
});