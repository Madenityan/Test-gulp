$(document).ready(function() {
    $(window).on("scroll",function(){
        if (($(window).scrollTop() >= 50) && ($(window).width() >= 992) ) {
            $('.header-wrapper').addClass('fixed');

        } else {
            $('.header-wrapper').removeClass('fixed');
        }
    });


});