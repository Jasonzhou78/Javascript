$(function() {
    // Part 1: retrieve data from json file and print out to the screen
    $.get("movies.json", function(data) {
        let $tableBody = $('<tbody></tbody>');
        let $movie = []; //define variable as an empty array
        $movie = data.movies; // assign objects in the movies to array movie(now movie has 10 objects)
        for (let i = 0; i < $movie.length; i++) { //loop through object of array and ready to assign to html
            let $row = $('<tr></tr>'); //define variable as empty row with element tr
            $row.append('<td>' + $movie[i].title + '</td>'); // append html to row(add tag and text)
            $row.append('<td>' + $movie[i].releasingDate + '</td>'); // append another html to row(add tag and text)
            $row.append('<td>' + $movie[i].director + '</td>'); // append another html to row(add tag and text)
            $row.append('<td>' + $movie[i].rating + '</td>'); // append another html to row(add tag and text)
            $tableBody.append($row); // after finishing assignments, append the row to tablebody
        }

        $("thead").after($tableBody); //after all row assignment, append the tablebody to table head
    });


    //Part 2: search any word in the characters and highlight the row
    $("button").on("click", function(event) {
        //prevent default action (may be unexpected)
        event.preventDefault();
        $("tbody tr").filter(function() {
            $text = $(this).text().toLowerCase(); //get text from current row
            $inputValue = $("input").val().toLowerCase(); // retrieve the input value
            return (($text.search($inputValue)) >= 0); //decide if input value is the substring of row text, if succeeded, return index, if not ,return -1
        }).css("background", "yellow"); // add yellow to background for substring
    });
    // Part 3: highlight movie starting with a to m and n to z;
    // $aTomString = 'abcdefghijklm';
    // $nTozString = 'nopqrstuvwxyz';
    // aTomcounter = 0; // set a a-m counter and assign the initial number of zero
    // nTozcounter = 0; // set a n-z counter and assign the initial number of zero
    // $(".aTom").on("click", function(event) { // create a event function for a to m movie    
    //     event.preventDefault(); //prevent default action (may be unexpected)
    //     $("tbody tr").filter(function() {
    //         $letter = $(this).text().chatAt(0).toLowerCase(); //get first lettr and convert to small letter from current row
    //         if ($amString.search($letter) >= 0)
    //             aTomcounter += 1;
    //         return $amString.search($letter) >= 0;
    //     }).css("background", "yellow"); // add yellow to background
    // });
    // $("#aTom").text($amcounter);

    // $(".nToz").on("click", function(event) { // create a event function for n to z movie
    //     //prevent default action (may be unexpected)
    //     event.preventDefault();
    //     $("tbody tr").filter(function() {
    //         $letter = $(this).text().chatAt(0).toLowerCase(); //get first lettr and convert to small letter from current row
    //         if ($letter.search($amString) >= 0)
    //             nTozcounter += 1;
    //         return $letter.search($amString) >= 0;
    //     }).css("background", "red"); // add yellow to background
    // });


    // $("#nToz").text($nTozcounter);
});