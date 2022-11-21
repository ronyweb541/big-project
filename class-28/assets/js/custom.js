(function(){
	'use strict';
$(document).ready(function(){
	//Mobile responsive

	$('.veer-mobile-menu i.fa-bars').on('click', function(){
		$('.veer-main-menu').animate({left: 0});
		$(this).hide();
		$('.veer-mobile-menu i.fa-times').show();
	});

	$('.veer-mobile-menu i.fa-times').on('click', function(){
		$('.veer-main-menu').animate({left: -250});
		$(this).hide();
		$('.veer-mobile-menu i.fa-bars').show();
	});

	//VenoBox
	$('.venobox').venobox();


	//isotope js

	// filter items on button click
	$('.filter-button-group').on( 'click', 'button', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});
	var $grid = $('.grid').isotope({
		  // set itemSelector so .grid-sizer is not used in layout
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  masonry: {
		    // use element for option
		    columnWidth: '.grid-item'
		  }
		 
	});

	 //owlcarousel

		  $('.veer-team-carousel').owlCarousel({
			    loop:true,
			    margin:10,
			    nav:true,
			    autoplay:false,
			    autoplayTimeOut: 2000,
			    responsive:{
			        0:{
			            items:1
			        },
			        600:{
			            items:3
			        },
			        1000:{
			            items:4
			        }
			    }
			});



		   //Blog carousel

		  $('.veer-blog-carousel').owlCarousel({
			    loop:true,
			    margin:10,
			    nav:true,
			    autoplay:true,
			    autoplayTimeOut: 2000,
			    responsive:{
			        0:{
			            items:1
			        },
			        600:{
			            items:3
			        },
			        1000:{
			            items:4
			        }
			    }
			});



		  //end

	});



}) (jQuery);