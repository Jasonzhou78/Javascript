/*
    Assignment 4
    Zhijun(Jason) Zhou
*/

$(document).ready(function(){
    
    //find the current position and display on the screen.
    navigator.geolocation.getCurrentPosition((pos) => {
        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;
        const lat1,lon1;
        $('#content h2').append('<h3> The latitude is: '+lat+'. </h3>');
        $('#content h2').append('<h3> The longitude is: '+lon+'. </h3>');
        $('#content h2').append('<h3> With a level of accuracy of: ' + pos.coords.accuracy + ' Meters.'+'</h3>');

    // decide if localStorage exists, if not, display a message, then store the position as the old location.
        if(localStorage.getItem("lat")==null || localStorage.getItem("lon")==null)  {
            $('#content h2').append('<h3>You are visiting for the first time! </h3>');
            localStorage.setItem("lat", lat);
            localStorage.setItem("lon", lon);
            lat1 = localStorage.getItem("lat");
            lon1 = localStorage.getItem("lon");
        } else {
            //recall function distance to calculate distance beween two coordinates.
            let d = distance(lon, lat, lon1, lat1); 
            $('#content h2').append('<hr />');
            $('#content h2').append('<h3> The distance is '+ d +' meters.</h3>');
        }  
        });

        // Code below from stackoverflow.com with minor modifications.
       
       function distance(lon2, lat2, lon1, lat1) {
            let d = 3963.0 * Math.acos((Math.sin(lat1) * Math.sin(lat2)) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon2-lon1));
            return d;
          }
          

    });


