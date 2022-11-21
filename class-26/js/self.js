(function ($){
	'use strict'
	//code start
	
$(window).scroll( function(){
	var xyz= $(window).scrollTop();
		if(xyz>600){
			$(".ruller").fadeIn(1000);
		}else{
			$(".ruller").fadeOut(1000);
		}
	});


$('.section-one-content button').on('click', function(){
	$('.header').animate({left: 0});
});

$(".header-close").on('click', function(){
	$(".header").animate({width: -250});
});
$('.section-one').ripples();


//Wow js
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animate__animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();




})(jQuery);