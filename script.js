$(function() {
    $.getJSON("movies.json", function(data) {
        let results = [];
        movie.forEach(function(data) {
            results.push(data);
        });
        let $tableBody = $('<tbody></tbody>');
        for (let i = 0; i < results.length; i++) {
            let $row = $('<tr></tr>');
            $row.append($('<td></td>').text(data.title));
            $row.append($('<td></td>').text(data.releasingDate));
            $row.append($('<td></td>').text(data.director));
            $row.append($('<td></td>').text(data.rating));
        }
        $('thead').after($tableBody);
    }).fail(function() {
        console.log("An error has occurred.");
    });
});