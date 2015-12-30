var window_width = ''

//Set variable depending on mobile or desktop
function set_width_variable() {
    var inside_width = window.innerWidth;
    if (inside_width < 768) {
        window_width = 'mobile';
    }
    else {
        window_width = 'desktop';
    }
};

//Set map iframe height
function set_map_iframe_height() {
    var iframe_width = $('.map_iframe').width();
    $('.map_iframe').height(iframe_width);
};

$(window).resize(function () {
    set_width_variable();
    set_map_iframe_height();
});

$(document).ready(function () {
    set_width_variable();
    set_map_iframe_height();
});