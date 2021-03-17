//moblie bar
$('.trigger').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    $('.dropdown').toggleClass('drop-arrow');
    $('.dropdown').slideToggle();
});
$('.portfolio-filter ul li a').on('click', function() {
    $(this).parents('ul').find('a').removeClass('current');
    $(this).toggleClass('current');
});
//header animate
window.onscroll = function() {
    headerAnimate();
};
var header = document.getElementById('h-opened');
var sticky = header.offsetTop;

function headerAnimate() {
    if (window.pageYOffset > sticky) {
        header.classList.add('animate');
    } else {
        header.classList.remove('animate');
    }
}
//anchor
$(function() {
    $('.anchor-nav a[href*="#"]:not([href="#"])').click(function() {
        //console.log(123);
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            var fixedH = $('.fixed-top').height();
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - fixedH
                }, 1000);
                return false;
            }
        }
    });
});
//isotope
var $grid = $(".portfolio-wrap .row").isotope({
    itemSelector: ".col-lg-4",
    layoutMode: "fitRows"
});
$grid.imagesLoaded().progress(function() {
    $grid.isotope('layout');
});
$(".portfolio-filter").on("click", "a", function() {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({
        filter: filterValue
    });
});
//portfolio menubar
var list = $('.portfolio-filter ul li');
$('.portfolio-menubar a').on('click', function() {
    $(this).toggleClass('opened');
    list.each(function(i) {
        var ele = jQuery(this);
        setTimeout(function() {
            ele.toggleClass('opened');
        }, i * 100);
    });
});
//google form
$(function() {
    $('#submit').on('click', function() {
        var name = $('#user-name').val() || '未填寫';
        var email = $('#user-email').val() || '未填寫';
        var msg = $('#user-textarea').val() || '未填寫';

        // post
        var data = {
            'entry.1257919621': name,
            'entry.2043536171': email,
            'entry.1634163569': msg
        };
        $.ajax({
            type: 'POST',
            url: 'https://docs.google.com/forms/d/e/1FAIpQLSfwqHR9QNNZZJtHTF5UA048_SEd9xsO1IHLg8s4ywdjaq4YAg/formResponse',
            data: data,
            contentType: 'application/json',
            dataType: 'jsonp',
            complete: function() {
                alert('資料已送出！');
            }
        });

    });
});
//mouse cursor
let mousePosX = 0,
    mousePosY = 0,
    mouseCircle = document.getElementById("mouse-circle");
document.onmousemove = (e) => {
    mousePosX = e.pageX;
    mousePosY = e.pageY;
};
let delay = 6,
    revisedMousePosX = 0,
    revisedMousePosY = 0;

function delayMouseFollow() {
    requestAnimationFrame(delayMouseFollow);
    revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
    revisedMousePosY += (mousePosY - revisedMousePosY) / delay;
    mouseCircle.style.top = revisedMousePosY + "px";
    mouseCircle.style.left = revisedMousePosX + "px";
    window.onmousemove = function(s) {
        $("body").on("mouseenter", "a,button", function() {
            mouseCircle.classList.add("cursor-hover")
        });
        $("body").on("mouseleave", "a,button", function() {
            mouseCircle.classList.remove("cursor-hover")
        });
    }
}
delayMouseFollow();
//gotop
$(function() {
    $("#gotop").click(function() {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 1000);
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });
});