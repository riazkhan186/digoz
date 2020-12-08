(function ($) {
    "use strict";
    // for sticky navbar
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".navbar-area").addClass("sticky");
        } else {
            $(".navbar-area").removeClass("sticky");
        }
    });
    // Mean Menu 
    $('.mean-menu').meanmenu({
        meanScreenWidth: "991"
    });
    // banner slider
    $('.slider-area').owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
    });
    // counter up
    $('.counter').counterUp({
        delay: 30,
        time: 1000.
    });
    // testimonial
    $('.testimonial-slide').owlCarousel({
        loop: true,
        items: 1,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>']
    });
    // client slider
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

    // venobox Video player plugin
    $('.venobox').venobox();

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

    // Go to Top
    $(function () {
        // Scroll Event
        $(window).on('scroll', function () {
            var scrolled = $(window).scrollTop();
            if (scrolled > 600) $('.go-top').addClass('active');
            if (scrolled < 600) $('.go-top').removeClass('active');
        });
        // Click Event
        $('.go-top').on('click', function () {
            $("html, body").animate({ scrollTop: "0" }, 500);
        });
    });

    // WOW Animation JS
    if ($('.wow').length) {
        var wow = new WOW({
            mobile: false
        });
        wow.init();
    }
})(jQuery)