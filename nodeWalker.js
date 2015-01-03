$(document).ready (function(){
  $(".js-disabled").toggleClass("js-disabled js-enabled");

$(".menu .menu__item").toggleClass("hide");

  $(".menu .is-active-trail").next().toggleClass("next");
  $(".menu .is-active-trail").prev().toggleClass("previous");


  var activeNavIndex = $(".menu .is-active-trail").index() + 1;
  var activeNavLength = $(".menu .menu__item").length;

  if(activeNavIndex === activeNavLength){
  $(".menu .menu__item").first().toggleClass("next");
  } else if(activeNavIndex === 1){
  $(".menu .menu__item").last().toggleClass("previous");
  }

  $(".tools-js-button").toggle(function(){
    $("body").toggleClass("js-enabled js-disabled");
    $(this).text("Enable Javascript").toggleClass("tools-js-enable tools-js-disable").attr("title", "Enable Javascript");
  }, function(){
    $("body").toggleClass("js-disabled js-enabled");
    $(this).text("Disable Javascript").toggleClass("tools-js-disable tools-js-enable").attr("title", "Disable Javascript");
  });

    $(".tools-two-up-button").toggle(function(){
    $(this).text("Enable Two Up").toggleClass("tools-two-up-button tools-three-up-button").attr("title", "Two Up in Nav");
    $(".w-nav .nav").toggleClass("two-up three-up");
  }, function(){
    $(this).text("Enable Three Up").toggleClass("tools-two-up-button tools-three-up-button").attr("title", "Three Up in Nav");
    $(".w-nav .nav").toggleClass("two-up three-up");
  });
});
