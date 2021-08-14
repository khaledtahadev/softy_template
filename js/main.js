$(function(){

  // For Effect Button Toggler Navbar
  $('.navbar-toggler').click(function(){
    $(this).toggleClass('active')
  });

  // For Close Navbar When Scrolling To section
  $('.navbar a').click(function(){
    
    $(this).parents('.collapse').removeClass('show')

    $('.navbar-toggler').removeClass('active')
  });

});