/*
    Assignment 4
    Zhijun(Jason) Zhou
*/

$(document).ready(function(){
    
    //find the current position and display on the screen.
    navigator.geolocation.getCurrentPosition((pos) => {
        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;
        $('#content h2').append('<h3> The latitude is: '+lat+'. </h3>');
        $('#content h2').append('<h3> The longitude is: '+lon+'. </h3>');
        $('#content h2').append('<h3> With a level of accuracy of: ' + pos.coords.accuracy + ' Meters.'+'</h3>');

    // decide if localStorage exists, if not, display a message, then store the position as the old location.
        if(localStorage.getItem("lat")==null || localStorage.getItem("lon")==null)  {
            $('#content h2').append('<h3>You are visiting for the first time! </h3>');
            localStorage.removeItem("lat1");
            localStorage.removeItem("lon1");
            localStorage.setItem("lat", lat);
            localStorage.setItem("lon", lon);
            const lat1 = localStorage.getItem("lat");
            const lon1 = localStorage.getItem("lon");
        } else {
            //recall function distance to calculate distance beween two coordinates.
            let distance = distance(lon,lat,lon1,lat1); 
            $('#content h2').append('<hr />');
            $('#content h2').append('<h3> The distance is meters.</h3>');
        }  
        });

        // Code below from stackoverflow.com with minor modifications.
        if (typeof(Number.prototype.toRad) === "undefined") {
            Number.prototype.toRad = function() {
            return this * Math.PI / 180;
            }
        }
       
       function distance(lon2, lat2, lon1, lat1) {
            var R = 6371; // Radius of the earth in km
            var dLat = (lat2-lat1).toRad();  // Javascript functions in radians
            var dLon = (lon2-lon1).toRad(); 
            var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                    Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
                    Math.sin(dLon/2) * Math.sin(dLon/2); 
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
            var d = R * c; // Distance in km
            return d;
          }
          

    });


