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
                        currentLocation.mapUrl = "https://maps.googleapis.com/maps/api/staticmap?center="+ currentLocation.latitude +","+ currentLocation.longitude +"&zoom=14&size=400x400&markers=color:blue%7C"+ currentLocation.latitude +","+ currentLocation.longitude +"&key=AIzaSyD00WgZE12rmsdIx6CmM5oZNJFw8xbzgCE"
                        console.log(currentLocation)
                        let latitude = parseFloat(currentLocation.latitude);
                        let longitude = parseFloat(currentLocation.longitude);
                        if (latitude < 90 && latitude > -90 && longitude < 180 && longitude > -180){
                            oldLocation.set(currentLocation);
                            locationView.render();  
                            console.log(oldLocation);
                        } else {
                            alert("bad address")
                        }
                    }

                })
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
                            console.log(result)
                            let address = result.results[0].formatted_address.split(",")
                            let stateZip = address[2].split(" ")
                            let coordinates = result.results[0].geometry.location

                            positionAddress = address[0];
                            //because it sticks a space in front of the city
                            positionCity = address[1].substring(1);
                            positionState = stateZip[1];
                            positionZip = stateZip[2];

                            //...because navigator.geolocation brings up different coordinates than the address
                            positionLatitude = coordinates.lat;
                            positionLongitude = coordinates.lng;

                            currentLocation.set({
                                "streetAddress": positionAddress,
                                "city": positionCity,
                                "state": positionState,
                                "zipCode": positionZip,
                                "latitude": positionLatitude,
                                "longitude": positionLongitude,
                                "mapUrl": "https://maps.googleapis.com/maps/api/staticmap?center="+ positionLatitude +","+ positionLongitude +"&zoom=14&size=400x400&markers=color:blue%7C"+ positionLatitude +","+ positionLongitude +"&key=AIzaSyD00WgZE12rmsdIx6CmM5oZNJFw8xbzgCE"
                            });
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