$(function() {

    //accordion section
    $("#edu-content, #wwi-content, #wwii-content").hide();
    $("#edu").click(function() {
        $("#edu-content").toggle();
    });
    $("#wwi").click(function() {
        $("#wwi-content").toggle();
    });
    $("#wwii").click(function() {
        $("#wwii-content").toggle();

    });


    // tabbed section

    //event for tab WorldWar I
    $("#wwiTab").on("click", function() {
        $("#wwiContentTab").show();
        $("#wwiContentTab").css("background-color", "chocolate");
        $(this).css("background-color", "chocolate");
        $("#eduContentTab, #wwiiContentTab").hide();
        $("#eduTab, #wwiiTab").css('background-color', 'grey');
    });
    //event for tab WorldWar II
    $("#wwiiTab").on("click", function() {
        $("#wwiiContentTab").show();
        $("#wwiiContentTab").css("background-color", "chocolate");
        $(this).css("background-color", "chocolate");
        $("#eduContentTab, #wwiContentTab").hide();
        $("#eduTab, #wwiTab").css("background-color", "grey");
    });
    //event for tab Education
    $("#eduTab").on("click", function() {
        $("#eduContentTab").show();
        $("#wwiContentTab, #wwiiContentTab").hide();
        $("#wwiTab, #wwiiTab").css("background-color", "grey");
        $(this).css("background-color", "chocolate");
    });
});