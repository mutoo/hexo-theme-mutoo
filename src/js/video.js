$(() => {
    $('.mt-article').find('p video').each((idx, el) => {
        let $video = $(el);
        let $container = $video.parent();
        $container.addClass('mt-video');

        // TODO: check this after video is loaded
        if ($video.width() >= $container.width()) {
            $container.addClass('mt-video--full-width');
        }
    });
});
