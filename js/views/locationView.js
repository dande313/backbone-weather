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
                if(!this.model.get("latitude") || !this.model.get("longitude")){
                    this.model.fetchMyLocation();
                }
                this.model.on("change", this.render, this)
            },

            updateLocation: function(){
                let currentLocation = {
                    streetAddress: $("#location-address").val(),
                    city: $("#location-city").val(),
                    state: $("#location-state").val(),
                    zipCode: $("#location-zipCode").val()
                }

                let oldLocation = this.model;
                let locationView = this

                $.ajax({
                    url:"https://maps.googleapis.com/maps/api/geocode/json?address=" +
                    currentLocation.streetAddress + "," +
                    currentLocation.city + "," +
                    currentLocation.state + " " +
                    currentLocation.zipCode +
                    "&key=AIzaSyD00WgZE12rmsdIx6CmM5oZNJFw8xbzgCE",
                    success:function(result){ 
                        let coordinates = result.results[0].geometry.location
                        currentLocation.latitude = coordinates.lat
                        currentLocation.longitude = coordinates.lng
                        currentLocation.mapUrl = "https://maps.googleapis.com/maps/api/staticmap?center="+ currentLocation.latitude +","+ currentLocation.longitude +"&zoom=14&size=380x380&markers=color:blue%7C"+ currentLocation.latitude +","+ currentLocation.longitude +"&key=AIzaSyD00WgZE12rmsdIx6CmM5oZNJFw8xbzgCE"
                        let latitude = parseFloat(currentLocation.latitude);
                        let longitude = parseFloat(currentLocation.longitude);
                        if (latitude < 90 && latitude > -90 && longitude < 180 && longitude > -180){
                            oldLocation.set(currentLocation);
                            locationView.render();  
                        } else {
                            alert("bad address")
                        }
                    }

                })
            },


            setMyLocation: function(){
                this.model.fetchMyLocation();
            },

            render: function(){
                var template = locationViewTemplate;
                this.$el.html(Mustache.to_html(template(), this.model.attributes));
                this.$el.find('option[value='+this.model.attributes.state +']').attr('selected', true)
                $("#nav-location").addClass("active")
                return this
            }
        })
    return LocationView
});