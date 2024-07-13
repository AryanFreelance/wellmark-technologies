

(function ($) {
  "use strict";
/*======================================================================
              Document Ready Function Start Here
======================================================================*/
  $(document).ready(function () {

    // ========================= Password Show Hide Js Start ==========================
    $(".toggle-password").click(function() {

      $(this).toggleClass("fa-eye fa-eye-slash");
      var input = $($(this).attr("id"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
// ========================= Password Show Hide Js End ==========================

// ========================= Toggle Search Js Start =====================
  $('.search-icon').click(function(){
      $('.search-input').toggleClass('show')
      $('.search-icon').toggleClass('close');
  });
// ========================= Toggle Search Js End =====================

// ========================= Toggle Bars Js End =====================
$('.bar-icon').click(function(){
  $('.toggle-bar-content').toggleClass('show')
  $(this).children().toggleClass('icon-paragraph');
  $(this).children().toggleClass('fas fa-times');
});
$('.close-icon').click(function(){
  $('.toggle-bar-content').removeClass('show');
  $('.bar-icon').children().removeClass('fas fa-times');
  $('.bar-icon').children().addClass('icon-paragraph');
});
// ========================= Toggle Bars Js End =====================

// ========================= Toggle Team Share js Start =====================
$('.share-icon').click(function(){
  if($(this).find('.popup-share-icons').hasClass('show')){
    $(this).find('.popup-share-icons').removeClass('show');
  }else{
    $(this).find('.popup-share-icons').addClass('show');
  }
  if($('.share-icon').find('.show').length > 1){
    $('.popup-share-icons').removeClass('show');
    return $(this).find('.popup-share-icons').addClass('show');
  }
});
// ========================= Toggle Team Share js End =====================

// ========================= Sidebar Gallery magnific Popup Icon Js Start =====================
  $('.gallery-popup').magnificPopup({
    type: 'image',
    gallery:{
      enabled:true
    }
  });
// ========================= Sidebar Gallery magnific Popup Icon Js End =====================

// ========================= magnific Popup Icon Js Start =====================
  $('.magnific-video').magnificPopup({
    type:'iframe'
  });
// ========================= magnific Popup Icon Js End =====================

// ========================= Blog Slick Slider Js Start =====================
$('.blog-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1500,
  dots: false,
  arrows: true,
  prevArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-left"></i></button>',
  nextArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-right"></i></button>',
  responsive: [
      {
        breakpoint: 1199,
        settings: {
          arrows: true,
          slidesToShow: 2,
          dots: false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 2,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1,
          dots: true,
        }
      }
    ]
});
// ========================= Blog Slick Slider Js End =====================

// ========================= Brand Slider Js Start =====================
$('.brand-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  speed: 2000 ,
  dots: false,
  arrows: false,
  responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow:5,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2
        }
      }
    ]
});
// ========================= Brand Slider Js End =====================

// ========================= Home Two testimonial Slider Js Start =====================
$('.testi-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  speed: 2000 ,
  dots: false,
  arrows: true,
  nextArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-right"></i></button>',
  prevArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-left"></i></button>',
});
// ========================= Home Two testimonial Slider Js End =====================

// ========================= Odometer Counter Js End =====================
  // Odometer Counter
  $(".counterup-item").each(function () {
    $(this).isInViewport(function (status) {
      if (status === "entered") {
        for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
          var el = document.querySelectorAll('.odometer')[i];
          el.innerHTML = el.getAttribute("data-odometer-final");
        }
      }
    });
  });
  // ========================= Counter Js End =====================
  });
/*======================================================================
              Document Ready Function End Here 
======================================================================*/

// ========================= Preloader Js Start =====================
$(window).on("load", function(){
  $('.preloder').fadeOut(); 
})
// ========================= Preloader Js End=====================

// ========================= Header Sticky Js Start =====================
$(window).scroll(function(){
  if ($(window).scrollTop() >= 1) {
      $('.header-bottom').addClass('fixed-header');
  }
  else {
      $('.header-bottom').removeClass('fixed-header');
  }
});
// ========================= Header Sticky Js End=====================

//================================= Scroll To Top Icon Js Start =========================
var btn = $('.scroll-top');
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
//================================= Scroll To Top Icon Js End ===========================

})(jQuery);
