import {getScrollBarWidth} from './utils';

$(() => {
    let $body = $('body');
    let $window = $(window);
    let $headerMenu = $('.mt-header__menu');
    let $links = $headerMenu.find('.mt-menu__link');
    let $toggle = $headerMenu.find('.mt-header__menu-toggle');
    let menuClass = 'mt-body--menu-on';

    function menuOn() {
        $body.addClass(menuClass);
        if($body.height() > $window.height()) {
            $body.css('padding-right', `${getScrollBarWidth()}px`);
        }
    }

    function menuOff() {
        $body.removeClass(menuClass);
        $body.css('padding-right', '');
    }

    function isMenuOn() {
        return $body.hasClass(menuClass);
    }

    function toggleMenu() {
        isMenuOn() ? menuOff() : menuOn();
    }

    $toggle.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    // close menu when resize window
    $(window).on('resize', (e) => {
        menuOff();
    });

    // close menu when leave menu item
    $toggle.on('keydown', (e) => {
        if (e.which === 9 && e.shiftKey || e.which === 27) { // tab or esc
            menuOff();
        }
    });

    // close menu when leave last menu item
    $links.last().on('keydown', (e) => {
        if (e.which === 9 && !e.shiftKey) { // tab
            menuOff();
        }
    });
});
