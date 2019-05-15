$(() => {
    let $body = $('body');
    let $headerMenu = $('.mt-header__menu');
    let $links = $headerMenu.find('.mt-menu__link');
    let $toggle = $headerMenu.find('.mt-header__menu-toggle');

    $toggle.on('click', (e) => {
        $body.toggleClass('mt-body--menu-on');
        e.preventDefault();
    });

    // close menu when resize window
    $(window).on('resize', (e) => {
        $body.removeClass('mt-body--menu-on');
    });

    // close menu when leave menu item
    $toggle.on('keydown', (e)=>{
        if (e.which === 9 && e.shiftKey || e.which === 27) { // tab or esc
            $body.removeClass('mt-body--menu-on');
        }
    });

    // close menu when leave last menu item
    $links.last().on('keydown', (e) => {
        if (e.which === 9 && !e.shiftKey) { // tab
            $body.removeClass('mt-body--menu-on');
        }
    });
});
