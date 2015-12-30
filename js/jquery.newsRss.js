function news_homepage_links() {
    $('#newsRss .ItemContent span').removeAttr('style');
    $('#newsRss .ItemTitle a').attr({
        href: 'news.html',
        target: '_self'
    });
};

function news_inner_links() {
    $('.inner-news #newsRss .ItemTitle a').removeAttr("href");
};

$(window).load(function () {
    news_homepage_links();
    news_inner_links();
});