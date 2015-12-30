
//decide li widths in nav menu
function menu_li_widths() {
    if (window_width == 'desktop') {
        var nav_li_count = $('.nav > li').length;
        var nav_li_width_percentage = 100 / nav_li_count;
        $('.nav > li').css('width', nav_li_width_percentage + '%');
    }
    else {
        $('.nav > li').css('width', '100%');
    }
};

//give nav a 'active' class
function add_active_class_nav() {
    var url = window.location.pathname,
        urlRegExp = new RegExp(url.replace(/\/$/, '') + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
    // now grab every link from the navigation
    $('.nav > li > a').each(function () {
        // and test its normalized href against the url pathname regexp
        if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
            $(this).addClass('active');
        }
    });
};

//give nav a 'active' class if inner-page is within this section
function add_inner_active_class_nav() {
    
    var sPath = window.location.pathname;
    var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);

    $('.nav li ul li').each(function () {

        var this_href = $(this).attr('rel');

        if (sPage == this_href) {
            var parent_a_link = $(this).parent().parent().children('a').attr('href');

            $('.nav > li > a').each(function () {
                if ($(this).attr('href') == parent_a_link) {
                    $(this).addClass('active');
                };
            });
        };
    });
};

//give nav a 'active' class
function add_active_class_nav() {
    var url = window.location.pathname,
        urlRegExp = new RegExp(url.replace(/\/$/, '') + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
    // now grab every link from the navigation
    $('.nav > li > a').each(function () {
        // and test its normalized href against the url pathname regexp
        if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
            $(this).addClass('active');
        }
    });
};


$(window).resize(function () {
    menu_li_widths()
});

$(document).ready(function () {
    menu_li_widths();
    add_active_class_nav();
    //add_active_class_nav();
    add_inner_active_class_nav();
	
	if (window.location.pathname == '' || window.location.pathname == '/') {
		$('.nav > li > a').removeClass('active');
		$('.nav > li:first-child > a').addClass('active');
	};
	
});