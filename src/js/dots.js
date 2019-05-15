$(() => {
    let $dotNav = $('.mt-dot-nav');

    // bind articles to dots
    $dotNav.find('a').each((idx, el) => {
        let $dot = $(el);
        let target = $dot.attr('href');
        $(`.mt-article${target}`).data('dot', $dot);
    });

    // update dots opacity when scrolling
    let $articles = $('.mt-article');
    let minAlpha = parseFloat($dotNav.data('min-alpha'));
    let maxAlpha = parseFloat($dotNav.data('max-alpha'));
    $(window).on('scroll', (e) => {
        let showScroll = false;
        $articles.each((idx, el) => {
            let rect = el.getBoundingClientRect();
            let offset = rect.top;
            if (offset <= 0) showScroll = true;
            let alpha = Math.min(Math.abs(offset) / window.innerHeight, 1);
            $(el).data('dot').css('opacity', minAlpha + (1 - alpha) * (maxAlpha - minAlpha));
        });

        $dotNav.css('opacity', showScroll ? 1 : 0);
    });
});
