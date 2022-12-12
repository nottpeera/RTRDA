
function openFullscreen() {
    var el = document.documentElement
        , rfs =
            el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
        ;
    rfs.call(el);
}

function reportSize() {
    var html = $(window).width() + ' x ' + $(window).height();
    $('.size-helper').html(html);
}

$(window).resize(function () {
    reportSize();
});

