$(function() {
    let results = [];
    $.get("movies.json", function(data) {
        let $tableBody = $('<tbody></tbody>');
        for (let i = 0; i < data.movies.length; i++) {
            let $row = $('<tr></tr>');
            $row.append($('<td></td>').text(data.movies.title));
            $row.append($('<td></td>').text(data.movies.releasingDate));
            $row.append($('<td></td>').text(data.movies.director));
            $row.append($('<td></td>').text(data.movies.rating));
            $tableBody.append($row);
        }
        $('thead').after($tableBody);
    });
});