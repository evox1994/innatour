$(document).ready(function(){

	$(document).on('click','.radio-btn',function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$(this).removeClass('error');
			$(this).addClass('active');
		}
	});

	$(document).on('click','.mobile-btn',function(){
		if ( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$('.mobile-menu').removeClass('active');
			$('body').removeClass('no-scroll');
		} else {
			$(this).addClass('active');
			$('.mobile-menu').addClass('active');
			$('body').addClass('no-scroll');
		}
	});

	$('.fancybox-gal').fancybox({loop: true});
	$('.fancybox').fancybox({touch: false});
	$('input[type="tel"]').inputmask('+7 (999) 999-99-99');

	$(document).on('click','.close-btn',function(){
		$('.mobile-btn').removeClass('active');
		$('.mobile-menu').removeClass('active');
		$('body').removeClass('no-scroll');
	});

	$('input').on('input',function(){
		$(this).removeClass('error');
	});
	$('textarea').on('input',function(){
		$(this).removeClass('error');
	});

	$('form').on('submit',function(){
		var valid = true;

		if ( $(this).find('.policy-text .radio-btn').length ){
			if ( $(this).find('.policy-text .radio-btn').hasClass('active') ){
				$(this).find('input').each(function(){
					if(!$(this).val().length) { 
						event.preventDefault();
						valid = false;
						$(this).addClass("error"); 
					} else { 
						$(this).removeClass("error"); 
					}
				});
				$(this).find('textarea').each(function(){
					if(!$(this).val().length) { 
						event.preventDefault();
						valid = false;
						$(this).addClass("error"); 
					} else { 
						$(this).removeClass("error"); 
					}
				});
			} else {
				$(this).find('.policy-text .radio-btn').addClass('error');
				event.preventDefault();
				return false;
			}
		} else {
			$(this).find('input').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault();
					valid = false;
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
			$(this).find('textarea').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault();
					valid = false;
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
		}

		if (!valid) {
			event.preventDefault();
			return false;
		}
	});

	function footerYear(){
		var date = new Date();
		var year = date.getFullYear();
		$('#footer-year').text(year);
	}
	footerYear();

	$(document).on('click','.header-select-text',function(){
		$(this).parents('.header-select').toggleClass('active');
	});
	$(document).on('click','.phone-select-text',function(){
		$(this).parents('.phone-select').toggleClass('active');
	});

	$(document).on('click','.header-select-drop ul li',function(){
		var addres = $(this).text();
		var phone_tours = $(this).attr('data-phone-tours');
		var phone_tickets = $(this).attr('data-phone-tickets');

		if ( !$(this).hasClass('active') ){
			$(this).parents('.header-select').find('.header-select-text').find('span').text(addres);
			$(this).parents('ul').find('li').removeClass('active');
			$(this).addClass('active');
			$(this).parents('.header-select-wrap').find('.phone-tours').text(phone_tours);
			$(this).parents('.header-select-wrap').find('.phone-tours').attr('href','tel:'+phone_tours.replace(/\D+/g,''));
			$(this).parents('.header-select-wrap').find('.phone-tickets').text(phone_tickets);
			$(this).parents('.header-select-wrap').find('.phone-tickets').attr('href','tel:'+phone_tickets.replace(/\D+/g,''));
		}
		$(this).parents('.header-select').removeClass('active');
	});

	$(document).on('click','.phone-select-drop ul li',function(){
		var addres = $(this).text();
		var phone = $(this).attr('data-phone');

		if ( !$(this).hasClass('active') ){
			$(this).parents('.phone-select').find('.phone-select-text').find('span').text(addres);
			$(this).parents('ul').find('li').removeClass('active');
			$(this).addClass('active');
			$(this).parents('.phone-select-wrap').find('.phone-a').text(phone);
			$(this).parents('.phone-select-wrap').find('.phone-a').attr('href','tel:'+phone.replace(/\D+/g,''));
		}
		$(this).parents('.phone-select').removeClass('active');
	});

	$(document).on('click',function(e){
		var container = $('.header-select');
		var container2 = $('.phone-select');
		if (container.has(e.target).length === 0){
			container.removeClass('active');
		}
		if (container2.has(e.target).length === 0){
			container2.removeClass('active');
		}
	});

	$('.face-slider').slick({
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 1
	});

	$('.b-select select').chosen({
		disable_search: true
	});

	function scrollBanner(){
		if ( $('.scroll-wrap-banner').length ){
			if ( $(window).width() > 768 ) {
				var vg = $('.scroll-wrap').offset().top - 30;
				var ng = vg + $('.scroll-wrap').outerHeight() - $('.scroll-wrap-banner').outerHeight();
				var st = $(window).scrollTop();
				$('.scroll-wrap').css('min-height',$('.scroll-wrap-banner').outerHeight());

				if ( st > vg ) {
					if ( st > ng ) {
						$('.scroll-wrap-banner').removeClass('scroll');
						$('.scroll-wrap-banner').addClass('bottom');
					} else {
						$('.scroll-wrap-banner').addClass('scroll');
						$('.scroll-wrap-banner').removeClass('bottom');
					}
				} else {
					$('.scroll-wrap-banner').removeClass('scroll');
					$('.scroll-wrap-banner').removeClass('bottom');
				}
			} else {
				$('.scroll-wrap-banner').removeClass('scroll');
				$('.scroll-wrap-banner').removeClass('bottom');
				$('.scroll-wrap').removeAttr('style');
			}
		}
	}
	scrollBanner();

	$(window).on('scroll',function(){
		scrollBanner();
	});

	$(window).resize(function(){
		scrollBanner();
	});

});