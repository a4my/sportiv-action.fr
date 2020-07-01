$(document).ready(function () {

    /* For the sticky navigation */
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '120px'
    });


    /* Scroll on buttons*/

    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    $('.js--scroll-to-activities').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-activities').offset().top}, 1000);
    });

    $('.js--scroll-to-trainers').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-trainers').offset().top}, 1000);
    });

    $('.js--scroll-to-news').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-news').offset().top}, 1000);
    });

    $('.js--scroll-to-contact').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000);
    });

    $('.js--scroll-to-header').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-header').offset().top}, 1000);
    });

    /* Navigation scroll */

    $(function () {
      $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;

        }

        }
  });
});


    /* ANIMATIONS ON SCROLL */

    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animate__animated animate__headShake');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animate__animated animate__pulse');
    }, {
        offset: '50%'
    });

    /* Mobile navigation */
        $('.js--nav-icon').click(function() {
            var nav = $('.js--main-nav');
            var icon = $('.js--nav-icon i');

            nav.slideToggle(200);

            if (icon.hasClass('ion-navicon-round')) {
                icon.addClass('ion-close-round');
                icon.removeClass('ion-navicon-round');
            } else {
                icon.addClass('ion-navicon-round');
                icon.removeClass('ion-close-round');
            }
        });
    });
