
$(document).ready(function () {

    if ($(window).scrollTop() > 100) {
        $('header').addClass('sticky');
    } else {
        $('header').removeClass('sticky');
    }
    if ($(window).scrollTop() > 100) {
        $('.scroll-top').addClass('visible');
    }
    $(".scroll-top").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });    
    
    $(".mobile-accordion .title span").click(function () {
        $(this).parent(".title").parent(".mobile-accordion").children(".mobile-accordion-toggle").slideToggle();
        $(this).parent(".title").parent(".mobile-accordion").toggleClass("in");
    });

});

/** header height ***************/
/*jQuery(window).bind('resize load', function () {
 var get_header = $('header').height();
 var get_height = get_header;
 $(".container-main").css("margin-top", get_height + 'px');
 });
 */
/** && header height ***************/

$(window).on('click touchend', function (e) {

});

function muneFixed() {

    var scroll = $(document).scrollTop(),
            this_item = $('.navbar-fixed'),
            headerHeight = this_item.outerHeight(),
            classList = ['off-canvas', 'fixed'];
    // console.log(classList);

    $(window).scroll(function () {

        var scrolled = $(document).scrollTop();
        if (scrolled > headerHeight) {
            this_item.addClass(classList[0]);
        } else {
            this_item.removeClass(classList[0]);
        }

        if (scrolled > scroll) {
            this_item.removeClass(classList[1]);

        } else {
            this_item.addClass(classList[1]);

        }
        scroll = $(document).scrollTop();
    });
}

$(window).on('load', function () {
    muneFixed();

});


/**** Popup ****/
$(document).ready(function () {
    $(".armodal-close").click(function () {
        $(".armodal_box").fadeOut(700);
        $("body").removeClass("sticky");
    });
    $(".popup").click(function () {
        var a = $(this).attr("data-id");
        var m = $(".armodal_box");
        $(".armodal_box").fadeIn(700);
        $("body").addClass("sticky");
    });
});

$(window).on('click touchend', function (e) {
    if (!$(e.target).hasClass("armodal-close") && !$(e.target).hasClass("armodal") && !$(e.target).hasClass("popup") && $(e.target).parents(".armodal_box").length === 0) {
        $(".armodal_box").fadeOut(700);
        $("body").removeClass("sticky");
    }
});


/** Popup jQuery **/
$(document).ready(function () {

    $(".armodal_popup_main").mCustomScrollbar({
        theme: "dark-3",
    });
});
$(window).bind('resize load', function () {
    $('.armodal_popup_main').addClass('modal-popup');
    //var get_width = $(window).width();
    var get_window = $(window).height();
    var get_height = get_window - 60;
    $(".modal-popup").css("max-height", get_height + 'px');
});
/** Popup jQuery **/



/************* Scroll Top *************/

$(document).ready(function ()
{
    if ($(window).scrollTop() > 100)
    {
        $('.scroll-top').addClass('visible');
    }
    $(".scroll-top").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });
});

$(window).scroll(function ()
{
    if ($(window).scrollTop() > 100)
    {
        $('.scroll-top').addClass('visible');
    } else {
        $('.scroll-top').removeClass('visible');
    }
});

/********  Search Js  **********/

$(document).ready(function () {
    $(".search-btn").click(function () {
        $(".search-box-main").fadeIn();
        $("body").addClass("popup");
    });
    $(".search-close").click(function () {
        $(".search-box-main").fadeOut();
        $("body").removeClass("popup");
    });
});
$(window).on('click touchend', function (e) {


    if (!$(e.target).hasClass("search_button") && !$(e.target).hasClass("search-text") && !$(e.target).hasClass("search-input") && $(e.target).parents(".search-box-main").length === 0)
    {
        $(".search-box-main").fadeOut();
        $("body").removeClass("popup");
    }

});


$(document).ready(function () {
    $(".header-profile").click(function () {
        $(".header-profile-list").toggle();
    });
    $(".search_button").click(function () {
        $(".search-box-main").fadeIn();
        $("body").addClass("popup");
    });  
});




/***************************/


/*****  Selected Box   ******/
$(window).on("load", function (e) {
    var input_count = $(".input").toArray();
    if (input_count.length >= 1) {
        function ValueInput() {
            $(".input").each(function () {
                if ($(this).val() == "") {
                    $(this).parents(".input-box").removeClass("filled");
                }
                else {
                    $(this).parents(".input-box").addClass("filled");
                }
            });
        }
        setTimeout(function () {
            ValueInput();
        }, 500);
    }
    var select_count = $(".select").toArray();
    if (select_count.length >= 1) {
        function ValueInput() {
            $(".select").each(function () {
                if ($(this).val() == "") {
                    $(this).parents(".select-box").removeClass("filled");
                }
                else {
                    $(this).parents(".select-box").addClass("filled");
                }
            });
        }
        setTimeout(function () {
            ValueInput();
        }, 500);
    }
});

$(document).ready(function(e) {
	$(".input").focusin(function() {
        $(this).parents(".input-box").addClass("focus");
    });
    $(".input").focusout(function() {
        $(this).parents(".input-box").removeClass("focus");
    });
	$(".input").change(function(e) {
        if ($(this).val() == "") {
	        $(this).parents(".input-box").removeClass("filled");
        } else {
	        $(this).parents(".input-box").addClass("filled");
        }
    });
    
    $(".select").focusin(function() {
        $(this).parents(".select-box").addClass("focus");
    });
    
    $(".select").focusout(function() {
        $(this).parents(".select-box").removeClass("focus");
    });
	$(".select").change(function(e) {
        if ($(this).val() == "") {
	        $(this).parents(".select-box").removeClass("filled");
        } else {
	        $(this).parents(".select-box").addClass("filled");
        }
    });

 });
    
/***********/

/********* Mini Cart ***********/

$(document).ready(function () {
    $(".cart-btn").click(function () {
        $("body").addClass("cart_open");
    });
    $(".cart-close").click(function () {
        $("body").removeClass("cart_open");
    });
});

$(window).on('click touchend', function (e) {
    if (!$(e.target).hasClass("cart-close") && !$(e.target).hasClass("mini_cart") && !$(e.target).hasClass("cart-btn") && $(e.target).parents(".mini_cart").length === 0) {
        $(".cart_sidebar_main").fadeOut();
        $("body").removeClass("cart_open");
    }
    if (!$(e.target).hasClass("armodal-close") && !$(e.target).hasClass("armodal") && !$(e.target).hasClass("popup") && $(e.target).parents(".armodal_box").length === 0) {
        $(".armodal_box").fadeOut(700);
        $("body").removeClass("sticky");
    }
});
/*****************************/


jQuery(window).bind('resize load', function () {
    jQuery('.container-main').addClass('container_main'); var get_header = $("header").height();
    var get_footer = $("footer").height();
    //var get_inner_banner = $(".innerbanner_section").height();
    var get_window = $(window).height(); 
    var get_height = get_window - get_header - get_footer - 75;
    $(".container_main").css("min-height", get_height + 'px');
});




/* ---------------------------------------------- /*
* Mouse Follower
/* ---------------------------------------------- */
jQuery(window).on('load', function(){
   jQuery(".gallery_slider .owl-stage-outer").append('<span id="follower"></span>'); 
   var mouseX = 0,
    mouseY = 0,
    limitX = 150 - 15,
    limitY = 150 - 15;
    $('.gallery_slider .owl-stage-outer').mousemove(function (e) {
        var offset = $('.gallery-slider-main').offset();
        var offset_top = $('.gallery-slider-main').offset().top;
        mouseX = Math.min(e.pageX - offset.left, limitX);
        mouseY = Math.min(e.pageY - offset.top, limitY);
        if (mouseX < 0) mouseX = 0;
        if (mouseY < 0) mouseY = 0;
        mouseX = e.pageX;
        mouseY = e.pageY - offset_top;
    });
    // cache the selector
    var follower = $("#follower");
    var xp = 0,
        yp = 0;
    var loop = setInterval(function () {
        // change 12 to alter damping higher is slower
        xp += (mouseX - xp);
        yp += (mouseY - yp);
        follower.css({
            left: xp - 55,
            top: yp - 55
        });
    }, 0);
});



/************ Blog SideBar ***********/

$(document).ready(function (e) {
    $(".blog-filter").click(function ()
    {
        if ($(this).hasClass("in"))
        {
            $(this).removeClass("in");
            $(this).parent(".col-12").children(".blog-filter-container").slideUp();
        }
        else
        {
            $(".blog-filter").removeClass("in");
            $(".blog-filter-container").hide();
            $(this).parent(".col-12").children(".blog-filter-container").slideDown();
            $(this).addClass("in");
        }
    });
});
$(window).on('click touchend', function (e) {
    if (!$(e.target).hasClass("blog-filter") && !$(e.target).hasClass("blog-filter-container") && $(e.target).parents(".blog-filter-container").length === 0) {
        $(".blog-filter").removeClass("in");
        $(".blog-filter-container").hide();
    }
});