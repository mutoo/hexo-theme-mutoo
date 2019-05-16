$(() => {
    $('.mt-article').find('p img').each((idx, el) => {
        let $img = $(el);
        let $container = $img.parent();
        $container.addClass('mt-img');

        // TODO: check this after image is loaded
        if ($img.width() >= $container.width()) {
            $container.addClass('mt-img--full-width');
        }

        let $imgLink = $(`<a class="mt-img__link" href="${$img.attr('src')}" target="_blank"></a>`);
        $img.wrap($imgLink); // a clone of $imgLink will be used to wrap the img
        $img.parent().magnificPopup({
            disableOn: function() {
                return $img.width() >= $container.width() &&
                    $(window).width() >= 740;
            },
            type: 'image',
            mainClass: 'mfp-with-zoom', // this class is for CSS animation below
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function
            },
        });
    });
});
