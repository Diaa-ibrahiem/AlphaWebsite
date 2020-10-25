/*global $, console */


$(document).ready(function () {
  'use strict';
  
  // Adjust sucsribe button
  $('.subscribe input:submit').on('click', function (e) {
    e.preventDefault();
  });
  
  //Adjust our works button 
  $('.button .btn').hover(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });

  // Adjust our work part2
  
  $(".part2 .box1:eq(0)").css("margin-bottom", "45px");
  $(".part2 .box1:eq(1)").css("margin-bottom", "45px");
  
  // trigger shuffle
  
  $('#Container').mixItUp();
  
  // bx slider trigger
  
  $('.bxslider').bxSlider({
  
  });
  
  $(".contact .form-control").focusin().css("box-shadow", "none");
  $(".button button").click().css("border-color", "#f39c12");
  $(".contact .form-control").focusout().css("border-color", "#ccc");
  $(".input2 input:submit").css("border-color", "#f39c12");
  
  $('.input2 input:submit').on('click', function (e2) {
    e2.preventDefault();
    
  });

  $(".bxslider").each(function () {
    $(this).css('padding-top', '50px');
  });
  
  // smooth transition
  
  $('nav li a').click(function () {
    $('html,body').animate({
      scrollTop : $('#' + $(this).data('value')).offset().top
    }, 1000);
    
  });
  
  
  
  $('.load .spinner').fadeOut(2000,function () {
    $(this).parent().fadeOut(2000);
    $('body').css('overflow' , 'auto');
  });
  
  
  
  
});

