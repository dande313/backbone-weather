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
                    this.setMyLocation();
                }
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

                    let positionLatitude = position.coords.latitude;
                    let positionLongitude = position.coords.longitude;
                    var positionAddress;
                    var positionCity;
                    var positionState;
                    var positionZip;

                    $.ajax({
                        url:"https://maps.googleapis.com/maps/api/geocode/json?latlng=" + 
                        positionLatitude + "," +
                        positionLongitude + "&key=AIzaSyCCFahGgq675eIzapBVXCsexSorrgFa18k",
                        success:function(result){
                            let address = result.results[0].formatted_address.split(",")
                            let stateZip = address[2].split(" ")
                            positionAddress = address[0];
                            //because it sticks a space in front of the city
                            positionCity = address[1].substring(1);
                            positionState = stateZip[1];
                            positionZip = stateZip[2];
                            currentLocation.set({
                                "streetAddress": positionAddress,
                                "city": positionCity,
                                "state": positionState,
                                "zipCode": positionZip,
                                "latitude": positionLatitude,
                                "longitude": positionLongitude
                            });
                            console.log(stateZip)
                            console.log(currentLocation)
                            locationView.render();  
                        }
                    })       
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