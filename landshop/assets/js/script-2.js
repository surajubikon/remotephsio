;
(function($) {
    $(document).on('ready', function() {

        $('img').addClass('lazy');
        $('.lazy').Lazy();

        /* Sticky-Menu-JS */
        $(window).scroll(function() {
            if ($(window).scrollTop() > 300) {
                $(".mainmenu-area").addClass('sticky');
            } else {
                $(".mainmenu-area").removeClass('sticky');
            }
        });


        $('.menu-toggle').on('click', function() {
            $(this).toggleClass('button-active');
            $('.mainmenu-area .nav-row .menu-items').slideToggle();
            return false;
        });


        /* -- Submenu-Plus-Icon-Add --*/
        $('.mainmenu-area .menu-items li ul').each(function() {
            var items = $(this).children('li').length;
            $(this).parent('li').addClass('have-submenu');
            $(this).parent('li').append('<span class="plus"></span>');
            if (8 < items) {
                $(this).addClass('over-items');
            }
        });

        $('.mainmenu-area .nav-row .menu-items ul li .plus').on('click', function() {
            $(this).parent().toggleClass('menu-open');
        });

        /*====== Testimonial-Slider ======*/
        var Testimonial_Slider = new Swiper(".testimonial-slider", {
            effect: 'coverflow',
            direction: 'vertical',
            loop: false,
            grabCursor: true,
            centeredSlides: true,
            coverflowEffect: {
                rotate: -5,
                stretch: 360,
                depth: 100,
                modifier: 1,
                slideShadows: false
            },
        });
        /*====== Product-Slider ======*/
        var Product_Slider = new Swiper(".product-slider", {
            loop: true,
            speed: 1000,
            spaceBetween: 0,
            slidesPerView: 1,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: "#product-slider-control .navigation-control .next",
                prevEl: "#product-slider-control .navigation-control .prev",
            },
            pagination: {
                el: "#product-slider-control .pagination-control",
                clickable: true,
            },
            breakpoints: {
                575: {
                    slidesPerView: 2,
                },
                900: {
                    slidesPerView: 3,
                },
                1250: {
                    slidesPerView: 4,
                },
            },
        });
        /*-- Mail-Chimp Integration--*/
        $('#subscribe-form').ajaxChimp({
            url: 'http://www.devitfamily.us14.list-manage.com/subscribe/post?u=b2a3f199e321346f8785d48fb&amp;id=d0323b0697', //Set Your Mailchamp URL
            callback: function(resp) {
                if (resp.result === 'success') {
                    $('#subscribe-form .form-group').fadeOut();
                }
            }
        });
    });
    /*------------- preloader js --------------*/
    var startTime = performance.now();
    var count = 0;
    var counter = setInterval(function() {
        if (count < 101) {
            $('.preloader .count').text(count + '%');
            $('.preloader .load').css('width', count + '%');
            count++;
        } else {
            $('.preloader').fadeOut();
            clearInterval(counter);
        }
    }, Math.floor(startTime / 100));
    $(window).on('load', function() {
        $('.preloader').fadeOut();
    });
})(jQuery);