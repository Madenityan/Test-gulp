$(document).ready(function(){$(window).on("scroll",function(){$(window).scrollTop()>=50&&$(window).width()>=992?$(".header-wrapper").addClass("fixed"):$(".header-wrapper").removeClass("fixed")})});