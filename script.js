/*
    Assignment 4
    Zhijun(Jason) Zhou
*/

$(document).ready(function(){
    
    //find the current position and display on the screen.
    navigator.geolocation.getCurrentPosition((pos) => {
        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;
        let lat1,lon1;
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
            $('#content h2').append('<h3> The distance is meters. ' + d + '</h3>');
        }  
        });

        // function to calculate the distance of two points.
       
        function distance(lon2, lat2, lon1, lat1) {
            let dlon = lon2 - lon1;
            let dlat = lat2 - lat1;
            let t1 = Math.pow((Math.sin(dlat * Math.PI/360)),2);
            let t2 = Math.cos(lat1 * Math.PI/180) * Math.cos(lat2 * Math.PI/180);
            let t3 = Math.pow(Math.sin(dlon * Math.PI/360),2);
            let a = t1 + t2 * t3;
            let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            let d = 6373 * c;
            return d;
          }
          

    });


