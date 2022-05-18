$(document).ready(function () {

    // counter point start/////////////////////

    $('.counter').counterUp();

    // navbar sticky postion top /////////////////////

    var num = 50;

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > num) {
            $('#navbar').addClass('sticky');
        } else {
            $('#navbar').removeClass('sticky');
        }
    });


    // bottom to scroll /////////////////////

    var numtopbtom = 2000;

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > numtopbtom) {
            $('.scrolltop').addClass('toptobottom');
        } else {
            $('.scrolltop').removeClass('toptobottom');
        }
    });


    // Banner part images changes /////////////////////

    $('.baner_img').slick({
        autoplay: true,
        prevArrow: false,
        nextArrow: false,
        dots: true,
        pauseOnHover: false,
    });


    // About images changes flower /////////////////////

    $('.img_slider').slick({
        autoplay: true,
        prevArrow: false,
        nextArrow: false,
        pauseOnHover: false,
        centerMode: true,
        centerPadding: '150px',
        slidesToShow: 1,

        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2,
                }
            },

            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }

        ]
    });



    // What Arrow changes slots /////////////////////

    $('.what_info').slick({

        arrows: true,

        nextArrow: '<button type="button" class="slick-nexts"><i class="fa-solid fa-angle-right"></i></button>',

        prevArrow: '<button type="button" class="slick-prevs"><i class="fa-solid fa-angle-left"></i></button>',

        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });



    // Clients Arrow changes slots /////////////////////


    $('.info_c').slick({

        arrows: true,

        nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',

        prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',

        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    // Venobox style js


    new VenoBox({
        spinner : 'plane',
        navSpeed : 800,
    });

})

