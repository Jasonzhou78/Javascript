/*
    Assignment 4
    Zhijun(Jason) Zhou
*/

$(document).ready(function(){
    // your code here

    navigator.geolocation.getCurrentPosition((position) => {
        $('#content h2').append('<h3> The latitude is: '+position.coords.latitude+'. </h3>');
        //$('.latitude').eq(0).html("The latitude is: " + position.coords.latitude);
        $('#content h2').append('<h3> The longitude is: '+position.coords.longitude+'. </h3>');
        //$('.longitude').eq(0).html(`The longitude is: ${position.coords.longitude}`);
        $('#content h2').append('<h3> With a level of accuracy of: ' + position.coords.accuracy + ' Meters.'+'</h3>');
        //store the latitude and longitude values in the localStorage and assignment to latitude and longitude.
        localStorage.setItem("latitude",position.coords.latitude);
        localStorage.setItem("longitude",position.coords.longitude);
        let latitude = localStorage.getItem("latitude");
        let longitude = localStorage.getItem("longitude");
        //decide if latitude and longitude were stored in the localStorage.
        if(localStorage.getItem("infiniteScrollEnabled") !== null) {
            $('#content h2').append('<hr />');
            $('#content h2').append('<h3>The latitude is: ' + latitude + ' and '+ 'the longitude is: '+ longitude+'. '+ '</h3>');
        } else {
            $('#content h2').append('<h3>Hi, Welcome to Jason\'s blog </h3>');
        }
    });





    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistance(lat1, lon1, lat2, lon2){
        var toRadians = function(num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2-lat1);
        var Δλ = toRadians(lon2-lon1);

        var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        return ( R * c );
    }
});


