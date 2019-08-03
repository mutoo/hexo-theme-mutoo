$(() => {
    $('.adsbygoogle').each((idx, el) => {
        let $ad = $(el);
        if (!$ad.data('adsbygoogle-status')) {
            (adsbygoogle = window.adsbygoogle || []).push({});
            console.log('ad++');
        }
    });
});
