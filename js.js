$(document).ready(function(){
    
   $('.nav-links li').css({opacity: 0});
});


$('.burger').click(function(){
   $('.nav-links').toggleClass('nav-active');
   $('.nav-links li').css({opacity: 1});
});