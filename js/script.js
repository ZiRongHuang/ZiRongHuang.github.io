$(function() {
    //漢堡選單
    $("#menuBtn").on("click", function(){
      $("body").toggleClass("on");
    });
    // goTop
    $("#gotopBtn").on('click', function() {
      $("html, body").animate({
        scrollTop: 0
      });
      return false;
    });
    $(window).scroll(function() {
      if ($(window).scrollTop() > 100) {
        $("#gotopBtn").stop().animate({
          bottom: "50"
        }, 400);
      } else {
        $("#gotopBtn").stop().animate({
          bottom: "-100"
        }, 400);
      }
    });
    // 選單功能
    $(".mainMenu a").on('click', function() {
      var go = $(this).attr('href');
      if ($(go).offset() != undefined) {
        $('html, body').stop().animate({
          scrollTop: $(go).offset().top - $('.header_content').outerHeight(true) - 20
        }, 800);
      }
      return false;
    });
  });