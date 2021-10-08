/*
    Assignment 4
    Zhijun(Jason) Zhou
*/

$(document).ready(function(){
    
    //find the current position and display on the screen.
    navigator.geolocation.getCurrentPosition((pos) => {
        $('#content h2').append('<h3> The latitude is: '+pos.coords.latitude+'. </h3>');
        $('#content h2').append('<h3> The longitude is: '+pos.coords.longitude+'. </h3>');
        $('#content h2').append('<h3> With a level of accuracy of: ' + pos.coords.accuracy + ' Meters.'+'</h3>');

    // decide if localStorage exists, if not, display a message, then store the position as the old location.
        if(localStorage.getItem(infinityScrollEnabled)==null) {
            $('#content h2').append('<h3>You are visiting for the first time! </h3>');
            localStorage.setItem("lat1", pos.coords.latitude);
            localStorage.setItem("lon1", pos.coords.longitude);
            const lat1 = localStorage.getItem("lat1");
            const lon1 = localStorage.getItem("lon1");
        } else {
            //recall function distance to calculate distance beween two coordinates.
            distance(pos.coords.longitude, pos.coords.latitude, lon1, lat1); 
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


