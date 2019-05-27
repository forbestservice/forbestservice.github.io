jQuery(function($) {
  "use strict";

  // $.validate();

  // new WOW().init();
  //Variables
  var fixed_point = 0;
  var loaded = false;

  // Author Code Here
  $(window).load(function() {
    loaded = true;
    Adjust();
  });

  $(window).resize(function() {
    Adjust();
  });

  function Adjust() {
    $("header").height($(window).height());
    $(".intro-book").css(
      "top",
      $("header").height() / 2 - $(".intro-book").height() / 2 + "px"
    );
    $(".intro-text").css(
      "top",
      $("header").height() / 2 - $(".intro-text").height() / 2 + "px"
    );
  }
});
