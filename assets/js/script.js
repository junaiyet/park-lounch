// progress start
(function ($) {
  'use strict';

  $('.service').rProgressbar({
    percentage: 100,
    fillBackgroundColor: '#ccc',
    duration: 2000,
  });
  $('.reservation').rProgressbar({
    percentage: 100,
    fillBackgroundColor: '#ccc',
    duration: 2000,

  });



  $('.delivery').rProgressbar({
    percentage: 100,
    fillBackgroundColor: '#ccc',
    duration: 2000,
  });



  $('.parking').rProgressbar({
    percentage: 100,
    fillBackgroundColor: '#ccc',
    duration: 2000,
  });



  $('.jquery').rProgressbar({
    percentage: 100,
    fillBackgroundColor: '#ccc',
    duration: 2000,

  });


})(jQuery);
// progress start
// counter-up start
$('.counter').counterUp();
// counter-up end



// herp-slider start
$('.hero-slider').slick({
  dots: true,
  arrows: true,
  prevArrow: '<i class="fas fa-chevron-left prevarrow"></i>',
  nextArrow: '<i class="fas fa-chevron-right nextarrow"></i>',
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// herp-slider end
// backtotop start
$(window).scroll(function () {
  if ($(window).scrollTop() > 90) {
    $(".menu-fixd").addClass("fixd-menu")
  } else {
    $(".menu-fixd").removeClass("fixd-menu")
  }
  if ($(window).scrollTop() > 100) {
    $(".section-mg").addClass("section-auto")
  } else {
    $(".section-mg").removeClass("section-auto")
  }
  if($(window).scrollTop() > 1000){
    $(".backtotop").fadeIn()
  }else{
    $(".backtotop").fadeOut()
  }

})
// backtotop end
$(".backtotop").click(function(){
  $("html,body").animate({
    scrollTop:0,
  })
  
})


// team-slider start
$('.team-slider').slick({
  dots: false,
  arrows: true,
  prevArrow: '<i class="fas fa-chevron-left prevarrow"></i>',

  nextArrow: '<i class="fas fa-chevron-right nextarrow"></i>',
  infinite: true,
  // autoplay:true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 1000,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768.99,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// team-slider end


// know-slider start
$('.know-slider').slick({
  dots: false,
  arrows: true,
  prevArrow: '<i class="fas fa-chevron-left prevarrow"></i>',
  nextArrow: '<i class="fas fa-chevron-right nextarrow"></i>',
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// know-slider end



// intorior-slider start
$('.intorior-slider').slick({
  dots: false,
  arrows: true,
  prevArrow: '<i class="fas fa-chevron-left prevarrow"></i>',
  nextArrow: '<i class="fas fa-chevron-right nextarrow"></i>',
  infinite: false,
  speed: 1000,

  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// intorior-slider end




// venobox start
$('.venobox').venobox();
// venobox end