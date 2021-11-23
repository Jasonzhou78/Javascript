$(function() {
    $.getJSON("Movies.json", function(data) {
        console.log(data.title);
        console.log(data.releasingDate);
        console.log(data.director);
        console.log(data.rating);
    }).fail(function() {
        console.log("An error has occurred.");
    });
});