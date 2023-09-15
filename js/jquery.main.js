$(document).ready(function() {

  "use strict"; 

  initCounter();
  // Counter init
  function initCounter() {

    "use strict";

    jQuery('.counter').counterUp({
      delay: 10,
      time: 5000
    });
  }


  initSlickCarousel();
  // slick init
  function initSlickCarousel() {

    "use strict";
    
    jQuery('.slick-slider').slick({
      slidesToScroll: 1,
      rows: 0,
/*      prevArrow: '<a href="#" class="slick-prev fas fa-chevron-left"><span class="sr-only">Previous</span></a>',
      nextArrow: '<a href="#" class="slick-next fas fa-chevron-right"><span class="sr-only">Next</span></a>',*/

  nextArrow: '<a href="#" class="slick-prev"><i class="fa fa-chevron-left "></i></a>',
  prevArrow: '<a href="#" class="slick-next"><i class="fa fa-chevron-right"></i></a>',

      adaptiveHeight: true,
      fade: true
    });

    jQuery('.fade-slider').slick({
      slidesToScroll: 1,
      rows: 0,
     nextArrow: '<a href="#" class="slick-prev"><i class="fa fa-chevron-left "></i></a>',
  prevArrow: '<a href="#" class="slick-next"><i class="fa fa-chevron-right"></i></a>',
      fade: true,
      adaptiveHeight: true,
      draggable: false,
      autoplay: true
    });

    jQuery('.popular-posts-slider').slick({
      slidesToScroll: 1,
      rows: 0,
      slidesToShow: 4,
      prevArrow: '<a href="#" class="slick-prev fas fa-chevron-left"><span class="sr-only">Previous</span></a>',
      nextArrow: '<a href="#" class="slick-next fas fa-chevron-right"><span class="sr-only">Next</span></a>',
      infinite: false,
      adaptiveHeight: true,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }]
    });

    jQuery('.why-say-slider').slick({
      slidesToScroll: 1,
      rows: 0,
      prevArrow: '<a href="#" class="slick-prev fas fa-chevron-left"><span class="sr-only">Previous</span></a>',
      nextArrow: '<a href="#" class="slick-next fas fa-chevron-right"><span class="sr-only">Next</span></a>',
      adaptiveHeight: true,
      infinite: false
    });
  }

  initbackTop();
  // backtop init
  function initbackTop() {
      "use strict";

      var jQuerybackToTop = jQuery("#back-top");
      jQuery(window).on('scroll', function() {
          if (jQuery(this).scrollTop() > 100) {
              jQuerybackToTop.addClass('active');
          } else {
              jQuerybackToTop.removeClass('active');
          }
      });
      jQuerybackToTop.on('click', function(e) {
          jQuery("html, body").animate({scrollTop: 0}, 0);
      });


  }

  initAddClass();
  // Add Class  init
  function initAddClass() {
    "use strict";
    
    jQuery('.demo-opener').on( "click", function(e){
      e.preventDefault();
      jQuery("body").toggleClass("demo-active");
    });
  }


  initFancybox();
  // lightbox init
  function initFancybox() {
    "use strict";

    jQuery('a.lightbox, [data-fancybox]').fancybox({
      parentEl: 'body',
      margin: [50, 0]
    });
  }

  initStickyHeader();
  // sticky header init
  function initStickyHeader() {
    var win = jQuery(window),
      stickyClass = 'sticky';

    jQuery('#page-header .header-holder').each(function() {
      var header = jQuery(this);
      var headerOffset = header.offset().top || 0;
      var flag = true;

      function scrollHandler() {
        if (win.scrollTop() > headerOffset) {
          if (flag){
            flag = false;
            header.addClass(stickyClass);
          }
        } else {
          if (!flag) {
            flag = true;
            header.removeClass(stickyClass);
          }
        }

      }

      scrollHandler();
      win.on('scroll resize orientationchange', scrollHandler);
    });
  }

  initCountDown();
  // count down init
  function initCountDown() {
    var newDate = new Date(2018, 12, 20);
    
    jQuery("#defaultCountdown").countdown({until: newDate});
  }

});

jQuery( window ).on( "load" , function() {
  "use strict";

  jQuery( "#loader" ).delay( 600 ).fadeOut( 300 );

}); 



$(document).ready(function(){
$('.right-nav-icon').click(function(){
    $(this).addClass('active');
    $('.right-nav-icon').removeClass('active');
})
});
        /* Simple appearence with animation AN-1*/
        function openNav() {
            var opennav = '75';
            document.getElementById("mySidenav").style.width =opennav+'%'; 
            $('.right-nav-parent').css('right',opennav+'%');
            sidemenu()
        }
        function closeNav() {
            var opennav = '0';
            document.getElementById("mySidenav").style.width = opennav+'%';
             $('.right-nav-parent').css('right',opennav+'%');
            
            $(".backdrop").removeClass("show")
        }
        /* Simple appearence with animation AN-1*/

function sidemenu(){
    $(".backdrop").addClass("show")
}

$(".backdrop").click(function(){
    closeNav();
    $(this).removeClass('show')
});
function mysidebar(id){
    $('.sidenavcontent').addClass('d-none');
    $('#mySidenav'+id).removeClass('d-none').addClass('d-block');  
    /*$('.right-nav-icon').removeClass('active');
    $('#sideicn'+id).addClass('active'); */
}
