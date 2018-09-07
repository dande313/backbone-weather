define('LocationModel',[
    'underscore',
    'backbone'], function(_, Backbone){

        var locationModel = Backbone.Model.extend({

            initialize: function(options){
            },

            fetchMyLocation: function(){
                var currentLocation = this;
                navigator.geolocation.getCurrentPosition(function(position){

                    var positionLatitude = position.coords.latitude;
                    var positionLongitude = position.coords.longitude;
                    var positionAddress;
                    var positionCity;
                    var positionState;
                    var positionZip;

                    $.ajax({
                        url:"https://maps.googleapis.com/maps/api/geocode/json?latlng=" + 
                        positionLatitude + "," +
                        positionLongitude + "&key=AIzaSyCCFahGgq675eIzapBVXCsexSorrgFa18k",
                        success:function(result){
                            var address = result.results[0].formatted_address.split(",")
                            var stateZip = address[2].split(" ")
                            var coordinates = result.results[0].geometry.location

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

                            //API will return closest match it could find. We want to show the closest match on the form
                            $("#location-address").val(positionAddress)
                            $("#location-address").val(positionAddress)
                            $("#location-address").val(positionAddress)
                            $("#location-state").find('option[value='+positionState +']').attr('selected', true)
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
        
        return locationModel;
});