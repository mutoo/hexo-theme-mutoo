$(() => {
    let $dotNav = $('.mt-dot-nav');
    if (!$dotNav.length) return;

    // bind articles to dots
    $dotNav.find('a').each((idx, el) => {
        let $dot = $(el);
        let target = $dot.attr('href').substr(1);
        // hack: use [attr] rather than # to query id that starts from digits
        $(`.mt-article[id="${target}"]`).data('dot', $dot);
        $dot.on('focus', (e) => {
            $dotNav.css('opacity', 1);
        });
        $dot.on('blur', (e) => {
            $dotNav.css('opacity', 0);
        });
    });

    // update dots opacity when scrolling
    let $articles = $('.mt-article[id]');
    let minAlpha = parseFloat($dotNav.data('min-alpha'));
    let maxAlpha = parseFloat($dotNav.data('max-alpha'));
    let fadeOutTimer;
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

        // fade out when no scrolling
        clearTimeout(fadeOutTimer);
        fadeOutTimer = setTimeout(() => {
            $dotNav.css('opacity', 0);
        }, 500);
    });
});
