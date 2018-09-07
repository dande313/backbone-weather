define('LocationView',[
    'jquery',
    'underscore',
    'backbone',
    'mustache',
    'tpl!views/templates/location_view.html',
    'LocationModel'
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
                if(!this.model || !this.model.get("latitude") || !this.model.get("longitude")){
                    this.model.fetchMyLocation();
                }
                this.model.on("change", this.render, this)
            },

            updateLocation: function(){
                var currentLocation = {
                    streetAddress: $("#location-address").val(),
                    city: $("#location-city").val(),
                    state: $("#location-state").val(),
                    zipCode: $("#location-zipCode").val()
                }

                var oldLocation = this.model;
                var locationView = this

                $.ajax({
                    url:"https://maps.googleapis.com/maps/api/geocode/json?address=" +
                    currentLocation.streetAddress + "," +
                    currentLocation.city + "," +
                    currentLocation.state + " " +
                    currentLocation.zipCode +
                    "&key=AIzaSyD00WgZE12rmsdIx6CmM5oZNJFw8xbzgCE",
                    success:function(result){ 
                        var coordinates = result.results[0].geometry.location
                        var address = result.results[0].formatted_address.split(",")
                        
                        //get rid of address country
                        address.pop()
                        
                        //sometimes, the street address is empty. Returns shorter formatted address.throw in an empty value.
                        if (address.length < 3){
                            address.unshift("")
                            //stick the space back on the front of the city
                            address[1] = " " + address[1]
                        }
                        var stateZip = address[2].split(" ")

                        positionAddress = address[0];
                        //because it sticks a space in front of the city
                        positionCity = address[1].substring(1);
                        positionState = stateZip[1];
                        positionZip = stateZip[2];

                        currentLocation.latitude = coordinates.lat;
                        currentLocation.longitude = coordinates.lng;
                        currentLocation.city = positionCity;
                        currentLocation.state = positionState;
                        currentLocation.mapUrl = "https://maps.googleapis.com/maps/api/staticmap?center="+ currentLocation.latitude +","+ currentLocation.longitude +"&zoom=14&size=380x380&markers=color:blue%7C"+ currentLocation.latitude +","+ currentLocation.longitude +"&key=AIzaSyD00WgZE12rmsdIx6CmM5oZNJFw8xbzgCE"
                        var latitude = parseFloat(currentLocation.latitude);
                        var longitude = parseFloat(currentLocation.longitude);
                        if (latitude < 90 && latitude > -90 && longitude < 180 && longitude > -180){
                            oldLocation.set(currentLocation);
                            locationView.render();  
                        } else {
                            alert("bad address")
                        }
                        //API will return closest match it could find. We want to show the closest match on the form
                        $("#location-address").val(positionAddress)
                        $("#location-city").val(positionCity)
                        $("#location-state").find('option[value='+positionState +']').attr('selected', true)
                        $("#location-zipCode").val(positionZip)
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