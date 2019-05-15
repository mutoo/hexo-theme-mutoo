$(() => {
    $('.mt-article').find('p img').each((idx, el) => {
        let $img = $(el);
        $img.parent().addClass('mt-img');
    });
});
