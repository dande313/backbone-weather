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
            },

            fetchMyLocation: function(){
                let currentLocation = this;
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
                                "mapUrl": "https://maps.googleapis.com/maps/api/staticmap?center="+ positionLatitude +","+ positionLongitude +"&zoom=14&size=380x380&markers=color:blue%7C"+ positionLatitude +","+ positionLongitude +"&key=AIzaSyD00WgZE12rmsdIx6CmM5oZNJFw8xbzgCE"
                            });

                        }
                    }) 
                    return true;    
                },

                //if no permission given... 
                function(){
                    console.log("Failed to retrieve coordinates... :(")
                    return false
                })
            }
        });
        
        return Location;
});