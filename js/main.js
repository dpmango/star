(function() {
    $(function() {
        $('.main__slider').slick({
            arrows: false,
            asNavFor: '.main__slider-inner',
            responsive: [{
                    breakpoint: 768,
                    settings: {
                        centerMode: true,
                        centerPadding: '40px'
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: '40px'
                    }
                }

            ]
        });

        $('.main__slider-inner').slick({
            arrows: true,
            asNavFor: '.main__slider',
            dots: true,
            responsive: [{
                    breakpoint: 768,
                    settings: {
                        dots: false,
                        centerMode: true,
                        centerPadding: '40px'
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        dots: false,
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: '40px'
                    }
                }

            ]
        });

        $('.posts__slider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            responsive: [{
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 2

                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        arrows: false,
                        slidesToShow: 1
                    }
                }
            ]
        });

        $(window).on('scroll load resize', function() {
            var fixedMenu = $('.header__top');

            if ($(window).width() > 992) { // When fixed active
                if ($(this).scrollTop() > 0) {
                    fixedMenu.addClass('sticky');
                    $('.header').addClass('sticky');
                    $('body').addClass('sticky');
                    $('.header__nav-inner').addClass('top');
                } else {
                    fixedMenu.removeClass('sticky');
                    $('.header').removeClass('sticky');
                    $('body').removeClass('sticky');
                    $('.header__nav-inner').removeClass('top');
                }
            } else {
                fixedMenu.removeClass('sticky');
                $('.header').removeClass('sticky');
                $('body').removeClass('sticky');
                $('.header__nav-inner').removeClass('top');
            }

        });

        $(document).on('mouseover', '.main__slider-inner .slick-dots button', function() {
            $(this).trigger('click');
        });

        $(document).on('click', '.schedule__nav-item a', function(e) {

            var tabId = $(this).parent().attr('data-tab');
            var scheduleTabs = $('.schedule__tabs');

            e.preventDefault();

            $(this).closest('.schedule__nav').find('.active').removeClass('active');
            $(this).parent().addClass('active');

            scheduleTabs.find('.schedule__tab.active').removeClass('active');
            scheduleTabs.find('.schedule__tab[data-tab="' + tabId + '"]').addClass('active');
        });

        $(document).on('click', '.schedule__toggle-item a', function(e) {

            var tabId = $(this).parent().attr('data-tab');
            var scheduleTrainingsTabs = $('.schedule__tab-content');

            e.preventDefault();

            $(this).closest('.schedule__tab-toggle').find('.active').removeClass('active');
            $(this).parent().addClass('active');

            scheduleTrainingsTabs.find('.schedule__tab-trainings.active').removeClass('active');
            scheduleTrainingsTabs.find('.schedule__tab-trainings[data-tab="' + tabId + '"]').addClass('active');
        });

        $(document).on('click', '.schedule__training', function(e) {

            e.preventDefault();

            $(this).toggleClass('active');
        });

        $(document).on('click', '.mobile__schedule-item a', function(e) {

            var tabId = $(this).parent().attr('data-tab');
            var scheduleTabs = $('.mobile__schedule-tabs');

            e.preventDefault();

            $(this).closest('.mobile__schedule-list').find('.active').removeClass('active');
            $(this).parent().addClass('active');

            scheduleTabs.find('.mobile__schedule-tab.active').removeClass('active');
            scheduleTabs.find('.mobile__schedule-tab[data-tab="' + tabId + '"]').addClass('active');
        });

        $(document).on('click', '.mobile__schedule-training-item a', function(e) {

            var tabId = $(this).parent().attr('data-tab');

            e.preventDefault();

            $(this).closest('.mobile__schedule-training-list').find('.active').removeClass('active');
            $(this).parent().addClass('active');

            $('.mobile__schedule-trainings.active').removeClass('active');
            $('.mobile__schedule-trainings[data-tab="' + tabId + '"]').addClass('active');
        });

        $(document).on('click', '.mobile__schedule-training', function(e) {

            e.preventDefault();

            $(this).toggleClass('active');
        });

        $(document).on('click', '.menu-toggle', function(e) {
            e.preventDefault();

            $(this).toggleClass('active');

            $('body').toggleClass('overflow');

            $('.mobile__menu').toggleClass('active');

            $('.blur-without-header').removeClass('active');

            if ($('.mobile__menu').hasClass('active')) {
                $('.blur-without-header').addClass('active');
            } else {
                $('.blur-without-header').removeClass('active');
            }
        });

        // $(window).on('load resize', function() {
        /*$('.free').parallax({
            bleed: 100
        });*/


        // });

        $("[data-fancybox]").fancybox({
            beforeClose: function() {
                $('.blur').removeClass('active');
                $('.blur-for-modals').removeClass('active');
            }
        });

        $("[data-fancybox]").click(function() {
            $('.blur').addClass('active');
            $('.blur-for-modals').addClass('active');
        });

        $(document).on('click', '.effective__mobile-item a', function(e) {

            var tabId = $(this).parent().attr('data-tab');

            e.preventDefault();

            $(this).closest('.effective__mobile-toggle-list').find('.active').removeClass('active');
            $(this).parent().addClass('active');

            $('.effective__mobile-tab.active').removeClass('active');
            $('.effective__mobile-tab[data-tab="' + tabId + '"]').addClass('active');
        });

        $('.b-btn, .b-btn--blue')
            .on('mouseenter', function(e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({ top: relY, left: relX })
            })
            .on('mouseout', function(e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({ top: relY, left: relX })
            });


        // we should use window.with rule inside resize event
        $(window).on('resize', function() {
            if ($(window).width() > 992) {
              resetMobileMenu();
            }
        });

        function resetMobileMenu(){
          $('.blur-without-header').removeClass('active');
          $('.menu-toggle').removeClass('active');
          $('.mobile__menu').removeClass('active');
        }

        $(document).on('mouseover', '.header__nav-item > a', function() {
          if ($(window).width() > 992) {
            $('.header__top .fixed').css({
                opacity: 0,
                visibility: "hidden"
            });

            $('.blur-without-header').addClass('active');

            $('.header__nav-item a').removeClass('active');

            $(this).addClass('active');

            $('.header__nav-inner').css({
                opacity: 0,
                visibility: "hidden"
            });

            $(this).siblings('.header__nav-inner').css({
                opacity: 1,
                visibility: "visible"
            });
          }
        });


        $(document).on('mouseleave', '.header__top', function() {
            if ($(window).width() > 992) {

                $('.header__top .fixed').attr('style', '');

                $('.header__nav-item a').removeClass('active');

                $('.header__nav-inner').css({
                    opacity: 0,
                    visibility: "hidden"
                });
                $('.blur-without-header').removeClass('active');
            }
        });


        $('.header__training-item').hover(function() {
            $(this).children('.training__image').addClass('active');
        }, function() {
            $(this).children('.training__image').removeClass('active');
        });

        $(document).on('click', '.header__links-item', function(e) { // LINKS = links with href to anchor

            e.preventDefault();

            var elemId = $(this).attr('href');

            if (elemId.length > 2) {
                var top = $(elemId).offset().top;


                $('body, html').animate({
                    scrollTop: top - 135
                }, 1500);

            }
        });

        $(document).on('click', '.header__nav-item > a', function(e) {
            e.preventDefault();
        });

        $(document).on('click', '.header__nav-inner .coach__btn a, .mobile__coach-item', function(e) {
            e.preventDefault();

            $('.template-trainer').addClass('active');
        });

        $(document).on('click', '.trainer__content .close', function() {
            $('.template-trainer').removeClass('active');
        });

        $(document).on('click', '.header__nav-inner .training__btn a', function(e) {
            e.preventDefault();

            $('.template-training').addClass('active');
        });

        $(document).on('click', '.training-modal__content .close', function() {
            $('.template-training').removeClass('active');
        });


        $('.phone-number').inputmask("+7 (999) 999-99-99");

        $(document).on('click', '.faq__list-item', function() {

            if ($(this).find('.faq__item-descr').hasClass('active')) {
                $('.faq__item-descr').removeClass('active');
            } else {
                $('.faq__item-descr').removeClass('active');
                $(this).find('.faq__item-descr').addClass('active');
            }

        });

    });


    $(window).on('load', function() {
        setInterval(function() {
            var tabid = $('.switch .active').attr('data-tab');

            $('.switch .active').removeClass('active');

            if (tabid < 3) {
                tabid++
            } else if (tabid == 3) {
                tabid = 1
            }

            $('.switch span[data-tab="' + tabid + '"]').delay(400).addClass('active');

        }, 4000)
    });

    $(window).on('load', function() {
        $('.header__colorline-inner').css('width', '100%');

    });

    $(window).on('load', function() {
        setTimeout(function() {
            $('.header__blueline').addClass('active');
        }, 2000)
    });



    $(document).ready(function() {

        /*-------Slider*/
        $('.trainer__images').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            swipe: false,
            asNavFor: '.trainer__staff-bar',
            cssEase: 'cubic-bezier(1,.01,.83,.67)'
        });
        $('.trainer__staff-bar').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.trainer__images',
            dots: false,
            swipe: false,
            arrows: false,
            focusOnSelect: true,
            centerMode: true,
            centerPadding: '120px',
            cssEase: 'cubic-bezier(1,.01,.83,.67)',
            responsive: [{
                    breakpoint: 768,
                    settings: {
                        centerPadding: '60px'
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerPadding: '30px'
                    }
                }
                // ,
                // {
                //  breakpoint: 480,
                //  settings  : {
                //      centerPadding: '20px'
                //  }
                // }
            ]
        });

        /*-------Animate slider info*/

        $(document).on('click', '.trainer .staff-names', function(event) {
            event.preventDefault();
            var $this = $(this),
                tab = $this.data('info'),
                $parent = $this.closest('.trainer__content'),
                $currentInfoItem = $parent.find('.trainer__info-item[data-info="' + tab + '"]'),
                $prevInfoItem = $currentInfoItem.prev(),
                $allInfoItem = $parent.find('.trainer__info-item');

            if (!($prevInfoItem.length)) {
                $prevInfoItem = $allInfoItem.last();
            }


            $prevInfoItem.find('.animated-el').addClass('fadeOutLeft');
            setTimeout(function() {
                $prevInfoItem.removeClass('is-active');
                $prevInfoItem.find('.animated-el').removeClass('fadeOutLeft');
            }, 150);

            setTimeout(function() {
                $currentInfoItem.addClass('is-active');
                $('.animated-el').each(function(index, el) {
                    setTimeout(function() {
                        $currentInfoItem.find('.animated-el').eq(index)
                            .addClass('animated fadeInRight');
                    }, index * 150);

                });
                $currentInfoItem.find('.animated-el').removeClass('fadeInRight');
            }, 400);
        });

        /*-------Show modal slider*/
        $(document).on('click', '[data-toggle="modal-slider"]', function(event) {
            event.preventDefault();
            var $this = $(this);
            var id = $this.data('target');
            var height = $(window).height();
            var heightBlock = $('.trainer__info').outerHeight(true);
            var top;
            $('body').addClass('fixed');
            $('.blur').addClass('none');
            // top = $('.trainer__staff').offset().top - heightBlock;
            $(id).addClass('modal-active');
            // $('body,html').animate({ scrollTop: top }, 500);

        });

        $(document).on('click', '.trainer__content .close, .close-toggle', function(event) {
            event.preventDefault();
            $('.modal-active').removeClass('modal-active');
            $('body').removeClass('fixed');
            $('.blur').removeClass('none');
            // $('body,html').animate({ scrollTop: 0 }, 500);

            if ($(window).width() < 992) {
                if ($('.mobile__menu').hasClass('active')) {
                    $('.blur-without-header').addClass('active');
                } else {
                    $('.blur-without-header').removeClass('active');
                }
            }
        });

    }); // end ready

    $(window).on('load', function() {
        /*-------Animate slider info*/
        $('.trainer__info').find('.is-active').find('.animated-el').addClass('animated fadeInRight');
        setTimeout(function() {
            $('.trainer__info').addClass('is-shown');
        }, 200);
    });


    $(window).on('load resize', function() {
        if ($(window).width() < 992) {
            setMaxHeight($('.trainer__info'), $('.trainer__info-item'))
        } else {
            $('.trainer__info').attr('style', '')
        }
    });

    /*---Set equal height*/
    function setMaxHeight(elem, elemItems) {
        var maxHeight = 0;

        elemItems.each(function() {

            var tabHeight = $(this).outerHeight();

            if (maxHeight < tabHeight) {
                maxHeight = tabHeight;
            }
        }); // end each

        elem.css('height', maxHeight);
    }

})();
