$(function(){
    //Method 1: getJSON method for looping through JSON property.
/*
        $("#team").append("<h1>"+message+"</h1>");          
        $.getJSON("includes/team.JSON",function(data) {
            $.each(data.teammembers, function(key, val){
            $("#team").append("<h3>"+val.name+"</h3>");
            $("#team").append("<h4>"+val.title+"</h4>");
            $("#team").append("<p>"+val.bio+"</p>");
        });
    }); */
    //Method 2: get method for looping through JSON property.
        
        //setTimeout Function and display it before ajax loads.
        
        const message = "Loading..."; 
        $("#team").append("<h1>"+message+"</h1>");
        setTimeout(function(){
            $.get("includes/team.JSON", function(data) {
                if(data!== null) {
                    console.log("Ajax command was succefully executed.");
                    $.each(data.teammembers, function(key, val) {
                        $("#team").append("<h3>"+val.name+"</h3>");
                        $("#team").append("<h4>"+val.title+"</h4>");
                        $("#team").append("<p>"+val.bio+"</p>");
                        $("#team h1").hide(); // hide the message: Loading after Ajax loaded.
                    });
                } else {
                    alert("Ajax was not successfully executed.");
                }
    });   
        },5000);          
});