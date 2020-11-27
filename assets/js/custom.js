(function ($) {

    $(document).ready(function () {
        // for sticky navbar
        $(window).scroll(function () {
            if ($(window).scrollTop() > 0) {
                $(".header-menu").addClass("sticky");
            } else {
                $(".header-menu").removeClass("sticky");
            }
        });
    });
    $(document).ready(function () {
        // for gototop
        $(window).scroll(function () {
            if ($(window).scrollTop() > 0) {
                $(".gototop").addClass("gotobtn");
            } else {
                $(".gototop").removeClass("gotobtn");
            }
        });
    });
    // mean menu
    $(document).ready(function () {
        $('.main-menu').meanmenu({
            meanMenuContainer: '.header-menu',
            meanScreenWidth: 992,
        });
    });
    // banner slider
    $(document).ready(function () {
        $('.slider-area').owlCarousel({
            loop: false,
            items: 1,
            autoplay: false,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
        });
    });
    // counter up
    jQuery(document).ready(function ($) {
        $('.counter').counterUp({
            delay: 30,
            time: 1000.
        });
    });
    // testimonial
    $(document).ready(function () {
        $('.testimonial-slide').owlCarousel({
            loop: true,
            items: 1,
            autoplay: false,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            nav: true,
            navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>']
        });
    });

    // banner slider
    $(document).ready(function () {
        $('.client-slider').owlCarousel({
            loop: true,

            autoplay: false,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1
                },
                850: {
                    items: 1
                },
                900: {
                    items: 2
                }
            }
        });
    });
    $(document).ready(function () {
        $('.venobox').venobox();
    });


    // countdown
    $('#getting-started-d').countdown('2021/01/01', function (event) {
        $(this).html(event.strftime('<div><span>%D</span> <span>Days </span> </div> '));
    });
    $('#getting-started-h').countdown('2021/01/01', function (event) {

        $(this).html(event.strftime('<div><span>%H</span> <span>Hours </span> </div> '));
    });
    $('#getting-started-m').countdown('2021/01/01', function (event) {

        $(this).html(event.strftime('<div><span>%M</span> <span>minutes </span> </div> '));
    });
    $('#getting-started-s').countdown('2021/01/01', function (event) {

        $(this).html(event.strftime('<div><span>%S</span> <span>seconds </span> </div> '));
    });


})(jQuery)