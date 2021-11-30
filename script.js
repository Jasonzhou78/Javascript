$(function() {

    //    sorting functions     //

    // sorting date ascending
    function sort_date_ascending(a, b) {
        return new Date(a.releasingDate).getTime() - new Date(b.releasingDate).getTime();
    }
    // sorting date descending
    function sort_date_descending(a, b) {
        return new Date(b.releasingDate).getTime() - new Date(a.releasingDate).getTime();
    }

    // movies.sort(sorting_date_ascending);
    // movies.sort(sorting_date_descending);

    // sorting title ascending 
    function sort_title_ascending(a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    }

    // sorting title descending 
    function sort_title_descending(a, b) {
        if (a.title > b.title) {
            return -1;
        }
        if (a.title < b.title) {
            return 1;
        }
        return 0;
    }

    // sorting rating ascending 
    function sort_rating_ascending(a, b) {
        if (a.rating < b.rating) {
            return -1;
        }
        if (a.rating > b.rating) {
            return 1;
        }
        return 0;
    }
    // sorting rating descending 
    function sort_rating_descending(a, b) {
        if (a.rating > b.rating) {
            return -1;
        }
        if (a.rating < b.rating) {
            return 1;
        }
        return 0;
    }

    // movies.sort(sort_title_ascending);
    // movies.sort(sort_title_descending);

    // sorting director ascending 
    function sort_director_ascending(a, b) {
        if (a.director < b.director) {
            return -1;
        }
        if (a.director > b.director) {
            return 1;
        }
        return 0;
    }

    // sorting director descending 
    function sort_director_descending(a, b) {
        if (a.director > b.director) {
            return -1;
        }
        if (a.director < b.director) {
            return 1;
        }
        return 0;
    }

    // movies.sort(sort_director_ascending);
    // movies.sort(sort_director_descending);


    $.get("movies.json", function(data) {


        let $tableBody = $('<tbody></tbody>');
        let $movie = []; //define variable as an empty array
        const clone = JSON.parse(JSON.stringify(data.movies));
        $movie = data.movies; // assign objects in the movies to array movie(now movie has 10 objects)
        refreshData($movie);

        // for (let i = 0; i < $movie.length; i++) { //loop through object of array and ready to assign to html
        //     let $row = $('<tr></tr>'); //define variable as empty row with element tr
        //     $row.append('<td>' + $movie[i].title + '</td>'); // append html to row(add tag and text)
        //     $row.append('<td>' + $movie[i].releasingDate + '</td>'); // append another html to row(add tag and text)
        //     $row.append('<td>' + $movie[i].director + '</td>'); // append another html to row(add tag and text)
        //     $row.append('<td>' + $movie[i].rating + '</td>'); // append another html to row(add tag and text)
        //     $tableBody.append($row); // after finishing assignments, append the row to tablebody
        // }

        $("thead").after($tableBody); //after all row assignment, append the tablebody to table head

        $("th").each(function(column) {
            //add hover effect on the table header
            $(this).hover(function() {
                $(this).css("background", "orange");
            }, function() { $(this).css("background", "none"); });
        });

        function ClearSymbol() {
            $("th").find("span").html("");
        }

        function refreshData(newData) {
            $tableBody.empty(); // clear the table first
            for (let i = 0; i < newData.length; i++) { //loop through object of array and ready to assign to html
                let $row = $('<tr></tr>'); //define variable as empty row with element tr
                $row.append('<td>' + newData[i].title + '</td>'); // append html to row(add tag and text)
                $row.append('<td>' + newData[i].releasingDate + '</td>'); // append another html to row(add tag and text)
                $row.append('<td>' + newData[i].director + '</td>'); // append another html to row(add tag and text)
                $row.append('<td>' + newData[i].rating + '</td>'); // append another html to row(add tag and text)
                $tableBody.append($row); // after finishing assignments, append the row to tablebody
            }
        }
        //sorting for title
        let counter_title = 0;
        $("#title").click(function() {
            ClearSymbol();
            if (counter_title % 3 == 0) {
                $movie.sort(sort_title_ascending);
                $(this).find("span").html("&#x25B2;");
            }
            if (counter_title % 3 == 1) {
                $movie.sort(sort_title_descending);
                $(this).find("span").html("&#x25BC;");
            }

            if (counter_title % 3 == 2) {
                $movie = JSON.parse(JSON.stringify(clone));
                $(this).find("span").html("");
            }
            counter_title++;
            if (counter_title == 3)
                counter_title = 0;
            refreshData($movie);
        });

        //sorting for director
        let counter_director = 0;
        $("#director").click(function() {
            ClearSymbol();
            if (counter_director % 3 == 0) {
                $movie.sort(sort_director_ascending);
                $(this).find("span").html("&#x25B2;");
            }

            if (counter_director % 3 == 1) {
                $movie.sort(sort_director_descending);
                $(this).find("span").html("&#x25BC;");
            }

            if (counter_director % 3 == 2) {
                $movie = JSON.parse(JSON.stringify(clone));
                $(this).find("span").html("");
            }


            counter_director++;
            if (counter_director == 3)
                counter_director = 0;
            refreshData($movie);
        });

        //sorting for rating
        let counter_rating = 0;
        $("#rating").click(function() {
            ClearSymbol();
            if (counter_rating % 3 == 0) {
                $movie.sort(sort_rating_ascending);
                $(this).find("span").html("&#x25B2;");
            }
            if (counter_rating % 3 == 1) {
                $movie.sort(sort_rating_descending);
                $(this).find("span").html("&#x25BC;");
            }

            if (counter_rating % 3 == 2) {
                $movie = JSON.parse(JSON.stringify(clone));
                $(this).find("span").html("");
            }

            counter_rating++;
            if (counter_rating == 3)
                counter_rating = 0;
            refreshData($movie);
        });

        //sorting for date
        let counter_date = 0;
        $("#date").click(function() {
            ClearSymbol();
            if (counter_date % 3 == 0) {
                $movie.sort(sort_date_ascending);
                $(this).find("span").html("&#x25B2;");
            }

            if (counter_date % 3 == 1) {
                $movie.sort(sort_date_descending);
                $(this).find("span").html("&#x25BC;");
            }

            if (counter_date % 3 == 2) {
                $movie = JSON.parse(JSON.stringify(clone));
                $(this).find("span").html("");
            }

            counter_date++;
            if (counter_date == 3)
                counter_date = 0;
            refreshData($movie);
        });

    });
});