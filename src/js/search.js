$(() => {
    let $searchForm = $('.mt-search');
    let $searchQuery = $('.mt-search__query');
    let $searchReset = $searchForm.find('.mt-search__action[type=reset]');
    let $searchSubmit = $searchForm.find('.mt-search__action[type=submit]');
    let typedClass = 'mt-search--typed';

    $searchQuery.on('focus', (e) => {
        $searchForm.addClass(typedClass);
    });

    $searchQuery.on('blur', (e) => {
        if (!$searchQuery.val().length) {
            $searchForm.removeClass(typedClass);
        }
    });

    $searchReset.on('click', (e) => {
        $searchForm.removeClass(typedClass);
    });

    $searchSubmit.on('click', (e) => {
        if ($searchForm.hasClass(typedClass)) {
            return;
        }

        $searchQuery.select();
        e.preventDefault();
    });
});
