$(function() {
    $('#photo-viewer').photoViewer().show().on('click', '.photo-frame', function(e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
    });

});