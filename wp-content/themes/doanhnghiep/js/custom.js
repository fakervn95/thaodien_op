jQuery(document).ready(function() {
   
    $('.play-button').click(function(e) {
        jQuery(this).fadeOut(1000);
        jQuery(this).parent().siblings('.bg-video').fadeOut(2000);
        e.preventDefault(); 
         $("#VYT")[0].src += "?autoplay=1";
    });

    if(jQuery('.page-template-page-template-trangchu').length>0){
        jQuery('html').addClass('tg_onepage_scroll_page')
    }

var width = jQuery(window).width();
if(width>1140){
     if(jQuery('.aio_content_page').length>0){
        console.log(1);
            jQuery(".aio_content_page").onepage_scroll({
            sectionContainer: ".section",
            easing: "ease", //"ease", "linear", "ease-in",
            animationTime: 1000,
            pagination: true, 
            updateURL: false, 
            beforeMove: function(index) {
            },
            afterMove: function(index) {
            }, 
            loop: true,                  
            keyboard: true,                
            responsiveFallback: false,
            direction: "vertical" //vertical,horizontal
        });
         }
    }
    // SCROLL TO DIV
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 500) {
            jQuery('.scrolltop').addClass('go_scrolltop');
        } else {
            jQuery('.scrolltop').removeClass('go_scrolltop');
        }
    });
    jQuery('.scrolltop').click(function() {
        jQuery('html, body').animate({
            scrollTop: jQuery("html").offset().top
        }, 1000);
    });

    // STICKY NAVBAR
    // var sticky = document.querySelector('.sticky');
    // if (sticky.style.position !== 'sticky') {
    // 	var stickyTop = sticky.offsetTop;
    // 	document.addEventListener('scroll', function () {
    // 		window.scrollY >= stickyTop ?
    // 		sticky.classList.add('fixed_menu') :
    // 		sticky.classList.remove('fixed_menu');
    // 	});
    // }
    // MENU MOBILE
    $('.checkbox_svb').prop("checked", $('.checkbox_svb').prop("checked")); // uncheck when f5
    jQuery('.bg_opacity').click(function() {
        jQuery("#menu_mobile_full").removeClass('toggle_menu_mobile');
        jQuery(this).hide();
        jQuery('.logo_light').show();
        jQuery('.logo_dark').hide();
        jQuery(this).css({
            'width': '0px'
        });
        $('.checkbox_svb').prop("checked", !$('.checkbox_svb').prop("checked"));
    });
    jQuery("#menu_mobile_full ul li a").click(function() {
        jQuery(".icon_mobile_click").fadeIn(300);
        jQuery("#page_wrapper").removeClass('page_wrapper_active');
    });
    jQuery('.mobile-menu ul.menu').children().has('ul.sub-menu').click(function() {
        jQuery(this).children('ul').slideToggle();
        jQuery(this).siblings().has('ul.sub-menu').find('ul.sub-menu').slideUp();
    }).children('ul').children().click(function(event) {
        event.stopPropagation()
    });
    jQuery('.mobile-menu ul.menu').children().find('ul.sub-menu').children().has('ul.sub-menu').click(function() {
        jQuery(this).find('ul.sub-menu').slideToggle();
    });
    jQuery('.mobile-menu ul.menu li').has('ul.sub-menu').click(function(event) {
        jQuery(this).toggleClass('editBefore_mobile');
    });
    jQuery('.mobile-menu ul.menu').children().has('ul.sub-menu').addClass('menu-item-has-children');
    jQuery('.mobile-menu ul.menu li').click(function() {
        $(this).addClass('active').siblings().removeClass('active, editBefore_mobile');
    });


    // fancybox
    jQuery('.fancybox').fancybox({
        buttons: [
            'slideShow',
            'share',
            'zoom',
            'fullScreen',
            'close'
        ],
        thumbs: {
            autoStart: true
        }
    });

    // ANIMATION INDEX
    
    if (width > 1200) {
        jQuery('.archive_masonry .grid-item').attr({
            "data-wow-delay": "0.3s",
            "data-wow-duration": "1s"
        }).addClass("wow animated zoomIn ");
        new WOW().init();
    }

        if (jQuery('#news_activity ul.sc_partner').length > 0) {
        jQuery('#news_activity ul.sc_partner').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            dots: false,
            arrows: true,
            autoplaySpeed: 3000,
            // fade: true,
            cssEase: 'linear',
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    

}); // document_load