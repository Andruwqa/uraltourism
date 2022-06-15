jQuery(document).ready(function ($) {
	// Navigation
	var $menuOffset = $('.site-header').height()+50;
	if ($(window).width() < 985) {
	$menuOffset = 0;
	}
	
	$(document).on('scroll', onScroll);
	$('a[href^="#"]').on('click', function (e) {
	e.preventDefault();
	$(document).off('scroll');
	$('a').each(function () {
		$(this).removeClass('active');
	})
	$(this).addClass('active');
	var target = this.hash,
	menu = target;
	$target = $(target);
	$('html, body').stop().animate({
		'scrollTop': $target.offset().top - $menuOffset
	}, 800, 'swing', function () {
		$(document).on('scroll', onScroll);
	});
	});
	
	
	// Fade (onScroll)
	function onScroll(event) {
	var scrollPos = $(document).scrollTop();
	$('#site-navigation a').each(function () {
		var currLink = $(this);
		var refElement = $(currLink.attr('href'));

		if (refElement.position().top-$menuOffset <= scrollPos && refElement.position().top+refElement.height() > scrollPos) {
			$('#site-navigation a').removeClass('active');
			currLink.addClass('active');
		} else {
			currLink.removeClass('active');
		}
	});
	}
	
	if ($(window).width() > 985) {
	$('.section > div').each( function(i){
		var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 3;
		var bottom_of_window = $(window).scrollTop() + $(window).height() * 1.1;
		if( bottom_of_window > bottom_of_object ) {
			$(this).animate({'opacity':'1'}, 500);
			}
		});
	
		jQuery(window).scroll( function(){
			$('.section > div').each( function(i){
				var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 3;
				var bottom_of_window = $(window).scrollTop() + $(window).height() * 1.1;
				if( bottom_of_window > bottom_of_object ){
					$(this).animate({'opacity':'1'}, 500);
				}
			}); 
		});
	} else {
		$('.section > div').each( function(i){
			$(this).css({ 'opacity': 1 });
		});
	};
});