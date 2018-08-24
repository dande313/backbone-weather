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
                'click #update-button': 'updateLocation',
                'click #geocode-fetch-button': 'setMyLocation'
            },

            initialize: function(options){
            },

            updateLocation: function(){
                let currentLocation = {
                    id: 1,
                    streetAddress: $("#location-address").val(),
                    city: $("#location-city").val(),
                    state: $("#location-state").val(),
                    zipCode: $("#location-zipCode").val(),
                    latitude: $("#location-latitude").val(),
                    longitude: $("#location-longitude").val()
                }
                let latitude = parseFloat(currentLocation.latitude);
                let longitude = parseFloat(currentLocation.longitude);
                if (latitude < 90 && latitude > -90 && longitude < 180 && longitude > -180){
                    $("#nav-bar ul li").removeClass();
                    $("#nav-location").addClass("active")
                    this.model.set(currentLocation);
                    console.log(this.model);
                } else {
                    alert("invalid coordinates")
                }
            },
            setMyLocation: function(){
                let currentLocation = this.model;
                let locationView = this
                navigator.geolocation.getCurrentPosition(function(position){
                    currentLocation.set({
                        "latitude": position.coords.latitude,
                        "longitude": position.coords.longitude
                    });
                    console.log(position)
                    locationView.render();         
                })
                $("#nav-bar ul li").removeClass();
                $("#nav-location").addClass("active")
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