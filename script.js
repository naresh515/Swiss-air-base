$(document).ready(function () {
    $(".heading").click(function () {
        $(this).parent(".accordion-item").find(".panel").slideToggle();
        $(this).parent(".accordion-item").prevAll(".accordion-item").find(".panel").slideUp();
        $(this).parent(".accordion-item").nextAll(".accordion-item").find(".panel").slideUp();
    });

    $(".humberg2").click(function () {
        $(".all_acco").slideToggle();
        $("body").toggleClass("body_container");
    });
    $(".heading1").click(function () {
        $(this).parent(".accordion1-item").find(".panel1").slideToggle();
        $(this).parent(".accordion1-item").prevAll(".accordion1-item").find(".panel1").slideUp();
        $(this).parent(".accordion1-item").nextAll(".accordion1-item").find(".panel1").slideUp();
    });
});

var sticky = $('.sticky');
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 680) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});
