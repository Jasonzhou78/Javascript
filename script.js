$(function() {
    let results = [];
    $.get("movies.json", function(data) {
        // let $tableBody = $('<tbody></tbody>');
        console.log(data.movies.length);
        // for (let i = 0; i < data.movies.length; i++) {
        //     let $row = $('<tr></tr>');
        //     $row.append($('<td></td>').text(data.title));
        //     $row.append($('<td></td>').text(data.releasingDate));
        //     $row.append($('<td></td>').text(data.director));
        //     $row.append($('<td></td>').text(data.rating));
        //     $('thead').after($tableBody);
        // }
    });
});