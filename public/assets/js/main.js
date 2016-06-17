jQuery(function(){
  //dropdownMenu();
  mobileMenuButton();
  setUp();
  searchInput();
  // videoSize();
  // resizeVideo();

 //initScrollMagic();
  //smoothScroll();
  initSlick();
});



// function videoSize() {
//   var $windowHeight = $(window).height();
//   var $videoHeight = $(".video").outerHeight();
// 	var $scale = $windowHeight / $videoHeight;
  
//   if ($videoHeight <= $windowHeight) {
//     $(".video").css({
//       "-webkit-transform" : "scale("+$scale+") translateY(-50%)",
// 			"transform" : "scale("+$scale+") translateY(-50%)"
// 		});
// 	};
// }

// $(window).on('load resize',function(){
//   videoSize();
// });

// jQuery().ready(function() {
//   resizeVideo();
// });

// jQuery(window).resize(function() {
//   resizeVideo(); 
// });

/* Videos */
// function resizeVideo() {
//     jQuery('iframe').each(function() {
//         var iframe = jQuery(this),
//             src = iframe.attr('src'),
//             nativeHeight,
//             nativeWidth,
//             actualWidth,
//             ratio;

//         if (src.indexOf("youtube") !== -1 ||
//             src.indexOf("vimeo") !== -1) {

//             nativeHeight = iframe.attr('height'),
//             nativeWidth = iframe.attr('width'),
//             actualWidth = iframe.width(),
//             ratio = nativeHeight / nativeWidth;

//             iframe.css({height: actualWidth * ratio + 'px', width: jQuery(this).parent().width() + 'px'});
//         }
//     });
// }

function mobileMenuButton() {
	$(".mobile-menu-btn").click(function(e){
		e.preventDefault();
		$(this).next(".menu").slideToggle();
		//$('.child-menu').slideUp();
	});
}


function setUp() {
	var options = $('.menu-item').toArray().map(
  	function(menuOption){
    	var optn = {
      	isClosed: true,
        open: function(){
        	$(menuOption).children('.child-menu').slideDown();
          hideOthers(optn);
          hideSiblings(optn);
          optn.isClosed = false;
        },
        close: function() {
        	$(menuOption).children('.child-menu').slideUp();
          showSiblings();
          optn.isClosed = true;
        },
        toggle: function() {
        	if (optn.isClosed) { optn.open(); }
          else { optn.close();}
        },
        hideSibling: function() {
        	$(menuOption).hide();
        },
        showSibling: function() {
        	$(menuOption).show();
        }
      };
      $(menuOption).children('.menu-btn').click(function(e){
        if($(menuOption).children('.child-menu').length > 0){
            e.preventDefault();
            optn.toggle();
        }
      });   
      return optn;
    }
  );
	
  function hideOthers(optn) {
  options.forEach(function (opt) {
    	if(opt !== optn) {
        opt.close();
      }
    });
  }
  function hideSiblings(optn) {
  if ($( window ).width() >= 640) { return; }
  options.forEach(function (opt) {
    	if(opt !== optn) {
        opt.hideSibling();
      }
    });
  }
  function showSiblings() {
  if ($( window ).width() >= 640) { return; }
  options.forEach(function (opt) {
        opt.showSibling();
    });
  }
}



function searchInput() {
	if ($( window ).width() >= 1040) {
		$(".search-form").hide();
		$(".show-search-btn").click(function(e){
			$(this).toggleClass("active");
			$(".search-form").animate({width: 'toggle'});
		});
	}

	
}

function smoothScroll() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
}

// ======== PLUGINS ========

//ScrollMagic
function initScrollMagic() {
	// init controller
	var controller = new ScrollMagic.Controller();
	// Fix-menu Handler
	var fixMenu = new ScrollMagic.Scene({
    triggerHook: 0, 
		triggerElement: ".fixed-menu",
    reverse: true   
	})
  .setClassToggle(".fixed-menu", "menu-bkgd")
	.setPin(".fixed-menu")
	.addTo(controller)

  if ($( window ).width() >= 1040) {
   var fixLeftMenu = new ScrollMagic.Scene({
      triggerHook: 0
      //offset: 10
    })
    
    .setPin(".menu-right-wrapper")
    .addTo(controller) 
  }
  

  // fixMenu.addIndicators({
  //   colorTrigger : "rgba(255,0,0,1)"
  // });
  // fixLeftMenu.addIndicators({
  //   colorTrigger : "rgba(255,0,0,1)"
  // });
  
  // var fixMenu2 = new ScrollMagic.Scene({
  //   triggerElement: ".fixed-menu-2", 
  //   triggerHook: 0,
  //   offset: -15,
  //   reverse: true 
  // })
  //.setClassToggle(".fixed-menu-2", "menu-bkgd")
  // .setPin(".fixed-menu-2")
  // .addTo(controller)

	// if ($( window ).width() >= 1040) {
	// var fixSideBar = new ScrollMagic.Scene({
	// 	triggerElement: ".fixed-side-section", 
	// 	triggerHook: 0,
	// 	//offset: -67,
	// 	reverse: true 
	// })
  
	// .setPin(".fixed-side-section")
	// .addTo(controller)
	// }
	
}

//SlickSlider
function initSlick() {  
  if(($(".slider").length > 0)){
      
      var $status = $('.pagingInfo');
      var $slickElement = $('.slider');

      $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
          //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
          var i = (currentSlide ? currentSlide : 0) + 1;
          $status.text(i + '/' + slick.slideCount);
      });

      $slickElement.slick({
        slide:'.slide-item',
        slidesToShow: 1,
        //adaptiveHeight: false,
        //slidesToScroll: 1,
         //variableWidth: true,
        arrows: false,
        dots: false,
        // centerMode: true,
        //centerPadding: 10,
        // slide: 'item',
        //focusOnSelect: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 120,
        speed: 30
        //autoplaySpeed: 3000
        //adaptiveHeight: true
        //variableWidth: true,
        //adaptiveHeight: true
        //infinite: true
        // responsive: [
        // {
        //   breakpoint: 414,
        //   settings: {
        //     arrows: false
        //   }
        // }
        // ]
      });
  }
  
  
}


//SlickSlider
function initSlick__() {  
  if(($('.slider').length > 0)){
      
      var $status = $('.pagingInfo');
      var $slickElement = $('.slider');

      $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
          //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
          var i = (currentSlide ? currentSlide : 0) + 1;
          $status.text(i + '/' + slick.slideCount);
      });

      $slickElement.slick({
        slide:'.slide-item',
        slidesToShow: 1,
        autoplaySpeed: 600,
        //adaptiveHeight: true,
        //fade:true,
        //cssEase: 'linear',
        //slidesToScroll: 1,
         //variableWidth: true,
        arrows: false,
        dots: false,
        // centerMode: true,
        //centerPadding: 10,
        // slide: 'item',
        //focusOnSelect: true,
        autoplay: true,
        //autoplaySpeed: 3000
        //adaptiveHeight: true
        //variableWidth: true,
        //adaptiveHeight: true
        infinite: false,
        responsive: [
        {
          breakpoint: 414,
          settings: {
            arrows: false
          }
        }
        ]
      });
  }
  
  
}








