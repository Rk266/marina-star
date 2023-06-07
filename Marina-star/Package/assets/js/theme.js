// Banner Section 
$('.banner-slider').owlCarousel({
    loop: true,
    autoplay: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    dots: false,
    margin: 0,
    responsive: {
        0: {
            items: 1
        }
    }
});

// Shop_Categories Section 
$('.category-carousel').owlCarousel({
    loop: false,
    margin: 30,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            margin: 10,
        },
        767: {
            items: 3,
        },
        992: {
            items: 4,
        },
        1200: {
            items: 5,
        }
    }
});

// Product_Section
$('.product-items').owlCarousel({
    loop: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    dots: false,
    responsiveClass: true,
    margin: 30,
    responsive: {
        0: {
            items: 1
        },
        349: {
            items: 2,
        },
        481: {
            items: 3,
            margin: 10,
        },
        992: {
            items: 4,

        },
        1441: {
            items: 5
        }
    }
});

// Testimonial_Section
$('.testimonial-items').owlCarousel({
    loop: false,
    margin: 30,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        }
    }
});

// Blog_Section 
$('.blogs-block').owlCarousel({
    loop: false,
    margin: 30,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        991: {
            items: 2,
            margin: 10,
        },
        1200: {
            items: 3
        }
    }
});

// client_Section 
$('.clint').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 30,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    autoplayTimeout: 2000,
    responsiveRefreshRate: 200,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 6
        }
    }
});

// Product Page
$('.additional-carousel').owlCarousel({
    loop: false,
    autoplay: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    autoplayTimeout: 2000,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        320: {
            items: 2
        },
        376: {
            items: 3
        },
        481: {
            items: 4
        },
        768: {
            items: 2
        },
        992: {
            items: 4
        }
    }
});

// Related_Product
$('.special-items').owlCarousel({
    loop: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        349: {
            items: 2,
            margin: 10
        },
        481: {
            items: 3,
            margin: 10
        },
        992: {
            items: 4,
            margin: 10
        },
        1200: {
            items: 5,
            margin: 30
        }
    }
});

let prevWidth = null;
(function ($) {
    "use strict";
    /*----------
    Loader
    ----------*/
    $(window).on("load", function () {
        $('.loader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    /* Contact Form */
    if (window.location.href.indexOf('submitted=true') !== -1) {
        $('.submitted').show();
    }

})(jQuery);



$(document).ready(function () {
    //Search button
    $(".search-content .search-btn-outer").on('click', function () {
        $(this).toggleClass('active');
        $(".header-search").slideToggle("2000");
        return false;
    });

    // Hide Search Dropdown On Scroll 
    $(window).scroll(function () {
        $('.ui-autocomplete.ui-widget-content').hide();
    });

    // Wow active
    new WOW().init();
})

// ToggleClass in footer and about and shop page
function footerExplanCollapse() {
    $(".footer-row h4").addClass('toggled');
    $('.footer-row .toggled').on('click', function (e) {
        e.preventDefault();
        if ($(window).width() < 992) {
            $(this).toggleClass('active');
            $(this).parent().find('ul').toggleClass('active').toggle('slow');
        }
    });
}


/*----------
Update column & content in responsive
-----------*/
function updateColumnsAndContent() {
    if ($(window).width() < 992) {
        $('#column-left, #column-right').insertAfter('#content');
        // menu
        if ($("#menu .dropdown.menulist .toggle-menu").length == 0) {
            $("#menu .dropdown.menulist").append("<span class='toggle-menu'><i class='fa fa-plus'></i></span>");
            $("#menu .dropdown.menulist .dropdown-submenu.sub-menu-item").append("<span class='toggle-menu'><i class='fa fa-plus'></i></span>");
            $('#topCategoryList ul.sub-menu').removeAttr("style");
            $('#topCategoryList div.dropdown-menu').removeAttr("style");
            $('#topCategoryList').hide();
        }

        //footer
        $(".footer-column ul").hide();

        // left, right
        $("#column-left .box-category .toggle-open, #column-right .box-category .toggle-open, #column-left .box-content .toggle-open, #column-right .box-content .toggle-open").remove();
        $("#column-left .box-category h3, #column-right .box-category h3, #column-left .box-content h3, #column-right .box-content h3").append("<span class='toggle-open'><i class='fa fa-chevron-down'></i></span>");
        $('#column-left ul.parent, #column-right ul.parent, #column-left .block_box, #column-right .block_box, #column-left .box-content ul, #column-right .box-content ul, #column-left .filter_box, #column-right .filter_box').hide();

    } else {
        $('#column-right').insertAfter('#content');
        $('#column-left').insertBefore('#content');

        // menu
        $("#menu .dropdown.menulist .toggle-menu").remove();
        $('#topCategoryList').show();
        $('#topCategoryList ul.sub-menu').removeAttr("style");
        $('#topCategoryList div.dropdown-menu').css("display", "");

        // left, right
        $("#column-left .box-category .toggle-open, #column-left .box-content .toggle-open").remove();
        $("#column-right .box-category .toggle-open, #column-right .box-content .toggle-open").remove();
        $('#column-left ul.parent, #column-right ul.parent, #column-left .block_box, #column-right .block_box, #column-left .box-content ul, #column-right .box-content ul, #column-left .filter_box, #column-right .filter_box').show();


        //footer
        $('.footer-column ul').show();

    }
}


function responsiveheader() {
    var this_window_width = $(window).width();
    if (this_window_width <= 991) {
        $('.header-center').insertBefore('.search-content');
    }
    else if (this_window_width <= 1199 && this_window_width >= 992) {
        $('.header-center').insertAfter('.header-inner');
    }
    else {
        $('.header-center').insertBefore('.header-right');
    }
}

/* set_equal_height */
function set_equal_height(class_id_name, max_width = 5000, min_width = 0) {
    if (class_id_name != "") {
        var windows_width = jQuery(window).width();
        var set_height = 0;
        var item_max_height = 0;
        jQuery(class_id_name).css("height", "");
        if (windows_width <= max_width && windows_width >= min_width) {
            set_height = 1;
            jQuery(class_id_name).each(function () {
                if (jQuery(this).height() > item_max_height) { item_max_height = jQuery(this).height(); }
            });
        }
        if (set_height == 1) {
            jQuery(class_id_name).height(item_max_height);
        }
    }
}
/* .set_equal_height */

// MegaMenu 
$(document).ready(function () {
    /* headerfixed */
    var headerfixed = 1;
    if (headerfixed == 1) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 160) {
                $('header').addClass('header-fixed');
            } else {
                $('header').removeClass('header-fixed');
            }
        });
    }
    else {
        $('header').removeClass('header-fixed');
    }
    /* .headerfixed */
    // set_equal_height
    set_equal_height(".tab-content .content.product-description", 1200, 1);
});

$(window).resize(function () {
    responsiveheader();
    set_equal_height(".tab-content .content.product-description", 1200, 1);
});


//Cart Scroll 
function set_cart_scroll() {
    var header_height = $("header").height();
    var screen_height = $(window).height();
    var cart_list_height = $("#cart .dropdown-menu .table-striped").height();
    var cart_total_height = $("#cart .dropdown-menu li+li").height();
    var cart_div_height = parseInt(cart_list_height) + parseInt(cart_total_height) + 10;
    var cart_div_max_height = parseInt(screen_height) - parseInt(header_height);
    var cart_total_pro = jQuery('.cart-content-product table tr').length;
    if (screen_height < cart_div_height || cart_total_pro < 2) {
        $("#cart .dropdown-menu .cart-content-product").css({ "overflow-y": "unset", "max-height": "unset" });
        $("ul.dropdown-menu.dropdown-menu-right.header-cart-toggle").addClass("scroll_cart_dropdown").css({ "overflow-y": "auto", "max-height": cart_div_max_height + "px" });
    } else {
        $("ul.dropdown-menu.dropdown-menu-right.header-cart-toggle").removeClass("scroll_cart_dropdown").css({ "overflow-y": "unset", "max-height": "unset" });
        $("#cart .dropdown-menu .cart-content-product").css({ "overflow-y": "auto", "max-height": "240px" });
    }
}

$(document).on('click', '#cart button.btn.btn-inverse', function () {
    set_cart_scroll();
});


/*----------
   Category page, about page... click events in toggel button
   ----------*/
function clickEventsInCategoryPage() {
    $('.box-category .toggled').on('click', function (e) {
        e.preventDefault();
        if ($(window).width() < 992) {
            $(this).toggleClass('active');
            $(this).parent().find('ul.parent').toggleClass('active').slideToggle('slow');
        }
    });
    $('#column-left .box-content .toggled').on('click', function (e) {
        e.preventDefault();
        if ($(window).width() < 992) {
            $(this).toggleClass('active');
            if ($(this).parent().find('ul').length != 0) {
                $(this).parent().find('ul').toggleClass('active').slideToggle('slow');
            } else {
                $(this).parent().find('.filter_box').toggleClass('active').slideToggle('slow');
                $(this).parent().find('.block_box').toggleClass('active').slideToggle('slow');
            }
        }
    });
    $('#column-right .box-content .toggled').on('click', function (e) {
        e.preventDefault();
        if ($(window).width() < 992) {
            $(this).toggleClass('active');
            if ($(this).parent().find('ul').length != 0) {
                $(this).parent().find('ul').toggleClass('active').slideToggle('slow');
            } else {
                $(this).parent().find('.filter_box').toggleClass('active').slideToggle('slow');
                $(this).parent().find('.block_box').toggleClass('active').slideToggle('slow');
            }
        }
    });
}

// Product-Page Add and Minus 
$(document).on('click', '.plus, .minus', function (e) {
    e.preventDefault();
    var parent = $(this).parents('.product-btn-quantity');
    var quantity = parent.find('[name="quantity"]');
    var val = quantity.val();
    if ($(this).hasClass('plus')) {
        val = parseInt(val) + 1;
    } else {
        if (val == 1) {
            val = 1;
        } else {
            val = val >= 1 ? parseInt(val) - 1 : 0;
        }
    }
    quantity.val(val);
    quantity.trigger("change");
    return false;
});

$(document).on('click', '.toggled', function (e) {
    e.preventDefault();
    if (!$(this).parent().hasClass('active')) {
        $('+ ul', $('a.list-group-item.main-item')).slideUp();
        $('a.list-group-item.main-item').removeClass('active');
    }
    $(this).parent().toggleClass('active');
    $('+ ul', $(this).parent()).slideToggle('slow');
    return false;
});

//Brand Page
jQuery(document).on("click", "#product-manufacturer .manufacturer-tags a", function (event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        var header_height = jQuery('nav#top').height() + jQuery('header').height() + 180;
        jQuery('html, body').animate({
            scrollTop: jQuery(hash).offset().top - (header_height)
        }, 800, function () {

        });
        return;
    }
});

// Product List
$('#list-view').on('click', function () {
    var element = this;

    $('#product-list').attr('class', 'row row-cols-1 product-list');

    $('#grid-view').removeClass('active');
    $('#list-view').addClass('active');

    localStorage.setItem('display', 'list');
});

// Product Grid
$('#grid-view').on('click', function () {
    var element = this;

    // What a shame bootstrap does not take into account dynamically loaded columns
    $('#product-list').attr('class', 'row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4');

    $('#list-view').removeClass('active');
    $('#grid-view').addClass('active');

    localStorage.setItem('display', 'grid');
});

// Local Storage
if (localStorage.getItem('display') == 'list') {
    $('#product-list').attr('class', 'row row-cols-1 product-list');
    $('#list-view').addClass('active');
} else {
    $('#product-list').attr('class', 'row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4');
    $('#grid-view').addClass('active');
}


// Product-Page onclick to shows image
jQuery(".additional-carousel a.elevatezoom-gallery").click(function (e) {
    e.preventDefault();
    var this_img_src = jQuery(this).attr("data-zoom-image");
    jQuery("#prozoom").attr("src", this_img_src);
    return;
});


// Product-Page onclick to open reviwe section
$(document).ready(function () {
    $(".write-review").on('click', function (event) {
        $('a[href=\'#tab-review\']').tab('show');
        $('body,html').animate({
            scrollTop: $('.propage-tab').offset().top
        }, 500);
        return false;
    })
})


// Scroll to Top 
function backToTop() {
    //Check to see if the window is top if not then display button
    $(".scrollToTop").hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 00);
        return false;
    });
}


$(document).ready(function () {
    //Set Columen+content
    updateColumnsAndContent();
    // Footer Toggel
    footerExplanCollapse();
    //Responsive Header
    responsiveheader();
    //Cart Scroll 
    set_cart_scroll()
    // Back to top
    backToTop();
    /*----------
   Category page, about page... click events in toggel button
   ----------*/
    clickEventsInCategoryPage()

    $(window).resize(function () {
        // set column+content
        updateColumnsAndContent();
    });
})

