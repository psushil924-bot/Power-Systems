$(document).ready(function() {
	var menu_count = $(".menu li").has("ul").toArray();
	if(menu_count.length == 0) {
            $(".menu").addClass("no-sub");
	}
	$("body").prepend('<span class="menu-close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"/></svg></span>');
	var width=$(window).width();
	if(width >= 1025) {
            if($(".menu li").has("ul")) {
                $(".menu li").has("ul").addClass("sub");
                $(".menu li").has("ul").append("<span class='sub_toggle'></span>");
                $(".menu li ul").addClass("sub-menu");
            }
            $(".sub").click(function() {
                $(this).children("a").addClass("open");
            });
	} else {
            if($(".menu li").has("ul")) {
                $(".menu li").has("ul").addClass("sub");
                $(".menu li").has("ul").append("<span class='device_toggle'></span>");
                $(".menu li ul").addClass("sub-menu");
            }
            $(".device_toggle").click(function() {
                $(this).parent("li").children("ul").slideToggle();
                $(this).toggleClass("in");
                if($(".menu li").hasClass("megamenu")) {
                    $(this).parent("li").children(".mega_menu").slideToggle();
                }
            });
	}
	if($(".menu li li").has("ul")) {
            $(".menu li li").has("ul").addClass("inner-sub");
	}
	$(".navigation-toggle").click(function() {
            $("body").toggleClass("menu-action");
	});
	/*$(".menu-close").click(function()
	{
		$("body").removeClass("menu-action");
	});*/
	if($(window).width()<1025) {
        	$(".navigation").height($(window).height());
	}
});
$(window).resize(function(e) {
    if($(window).width()<1025) {
        $(".navigation").height($(window).height());
    } else {
        $(".navigation").css("height","auto");
    }
});
$(window).on('click touchend',function (e) {
    var width=$(window).width();
    if(width<=1024) {
        if (!$(e.target).hasClass("navigation-toggle") && !$(e.target).hasClass("navigation") && $(e.target).parents(".navigation").length === 0) {
            $("body").removeClass("menu-action");
        }
    }
    if(width >= 1025) {
        if (!$(e.target).hasClass("open") && !$(e.target).hasClass("sub")) {
            $(".sub").children("a").removeClass("open");
        }
    }
});