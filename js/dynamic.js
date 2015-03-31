function factsLiH5() {
	$('.facts .proof ul li h5').each(function() {
		$(this).css({
			'margin-top': ($(this).parent().height()-$(this).height())/2+'px'
		});
	});
}
function slider() {
	var speed = 500;
	$('.slider').slides({
		generatePagination: true,
		generateNextPrev: false,
		container: 'container',
		effect: 'fade',
		fadeSpeed: speed,
		play: 10000,
		pause: 2500,
		slidesLoaded: function() {
			var first = $('.slider .slides_control > div:first-child');
			if ( first.attr('class') == 'slide1' ) {
				first.find('.using').html(first.find('.hidden').html());
				first.find('.using .chart').drawDoughnutChart([
					{ value: 47, color:'#f8be00' },
					{ value: 63, color:'#057c46' },
					{ value: 73, color:'#02483e' },
					{ value: 180, color:'#9bb61b' }
				]);
				first.find('.using .grow').addClass('complete');
				first.find('.using .tip').css({
					'left': first.find('.using .tip').attr('data-left')+'px',
					'top': first.find('.using .tip').attr('data-top')+'px'
				});
				first.find('.using .tip').find('h6').css({
					'width': first.find('.using .tip h6').attr('data-width')
				});
				first.find('.tip h3').css({
					'margin-top': -first.find('.tip h3').height()/2+'px'
				});
				setTimeout(function() {
					first.find('.using .tip').addClass('complete');
				}, 1250);
			}
			if ( first.attr('class') == 'slide2' ) {
				first.find('.using').html(first.find('.hidden').html());
				first.find('.using .graph img').css({
					'bottom': -first.find('.using .graph img').attr('height')+'px'
				});
				setTimeout(function() {
					first.find('.using .grow').addClass('complete');
				}, 100);
				setTimeout(function() {
					first.find('.using .graph img').stop(true,true).animate({
						'bottom': '0'
					}, 2000, 'easeOutExpo');
				}, 850);
				first.find('.tip h3').css({
					'margin-top': -first.find('.tip h3').height()/2+'px'
				});
				setTimeout(function() {
					first.find('.using .tip').addClass('complete');
				}, 1500);
			}
			if ( first.attr('class') == 'slide3' ) {
				first.find('.using').html(first.find('.hidden').html());
				setTimeout(function() {
					first.find('.using .grow').addClass('complete');
				}, 100);
				setTimeout(function() {
					first.find('.using .diagram img.col1').stop(true,true).animate({
						'bottom': '0'
					}, 1000);
				}, 1000);
				setTimeout(function() {
					first.find('.using .diagram img.col2').stop(true,true).animate({
						'bottom': '0'
					}, 1000);
				}, 1500);
				setTimeout(function() {
					first.find('.using .diagram img.col3').stop(true,true).animate({
						'bottom': '0'
					}, 1000);
				}, 2000);
				setTimeout(function() {
					first.find('.using .diagram img.col4').stop(true,true).animate({
						'bottom': '0'
					}, 1000);
				}, 2500);
				first.find('.tip h3').css({
					'margin-top': -first.find('.tip h3').height()/2+'px'
				});
				setTimeout(function() {
					first.find('.using .tip').addClass('complete');
				}, 3000);
			}
		},
		animationStart: function() {
			var prev = $('.slider .slides_control > div:nth-child('+eval($('.slider .pagination li.current').index()+1)+')');
			prev.find('.using .grow, .using .drop').addClass('hide');
			setTimeout(function() {
				prev.find('.using').empty();
			}, 500);
		},
		animationComplete: function() {
			var next = $('.slider .slides_control > div:nth-child('+eval($('.slider .pagination li.current').index()+1)+')');
			if ( next.attr('class') == 'slide1' ) {
				next.find('.using').html(next.find('.hidden').html());
				next.find('.using .chart').drawDoughnutChart([
					{ value: 47, color:'#f8be00' },
					{ value: 63, color:'#057c46' },
					{ value: 73, color:'#02483e' },
					{ value: 180, color:'#9bb61b' }
				]);
				next.find('.using .grow').addClass('complete');
				next.find('.using .tip').css({
					'left': next.find('.using .tip').attr('data-left')+'px',
					'top': next.find('.using .tip').attr('data-top')+'px'
				});
				next.find('.using .tip h6').css({
					'width': next.find('.using .tip').find('h6').attr('data-width')
				});
				next.find('.using .tip h3').css({
					'margin-top': -next.find('.using .tip').find('h3').height()/2+'px'
				});
				setTimeout(function() {
					next.find('.using .tip').addClass('complete');
				}, 1250);
			}
			if ( next.attr('class') == 'slide2' ) {
				next.find('.using').html(next.find('.hidden').html());
				next.find('.using .graph img').css({
					'bottom': -next.find('.using .graph img').attr('height')+'px'
				});
				setTimeout(function() {
					next.find('.using .grow').addClass('complete');
				}, 100);
				setTimeout(function() {
					next.find('.using .graph img').stop(true,true).animate({
						'bottom': '0'
					}, 2000, 'easeOutExpo');
				}, 850);
				next.find('.tip h3').css({
					'margin-top': -next.find('.tip h3').height()/2+'px'
				});
				setTimeout(function() {
					next.find('.using .tip').addClass('complete');
				}, 1500);
			}
			if ( next.attr('class') == 'slide3' ) {
				next.find('.using').html(next.find('.hidden').html());
				setTimeout(function() {
					next.find('.using .grow').addClass('complete');
				}, 100);
				setTimeout(function() {
					next.find('.using .diagram img.col1').stop(true,true).animate({
						'bottom': '0'
					}, 1000);
				}, 1000);
				setTimeout(function() {
					next.find('.using .diagram img.col2').stop(true,true).animate({
						'bottom': '0'
					}, 1000);
				}, 1500);
				setTimeout(function() {
					next.find('.using .diagram img.col3').stop(true,true).animate({
						'bottom': '0'
					}, 1000);
				}, 2000);
				setTimeout(function() {
					next.find('.using .diagram img.col4').stop(true,true).animate({
						'bottom': '0'
					}, 1000);
				}, 2500);
				next.find('.tip h3').css({
					'margin-top': -next.find('.tip h3').height()/2+'px'
				});
				setTimeout(function() {
					next.find('.using .tip').addClass('complete');
				}, 3000);
			}
		}
	});
}
/*function geoList() {
	$('.geography > div > ul li').append('<span class="before"><em><em></em></em></span>');
	$('.geography > div > ul li').append('<span class="after"><em><em></em></em></span>');
	var col1 = $('.geography > div > ul li.col1');
	var col1TopMin = Math.floor(col1.offset().left/$('.wrapper').width()*109);
	var col1TopMax = Math.floor((col1.offset().left+col1.width())/$('.wrapper').width()*109);
	col1.find('span.before').css({
		'top': -col1TopMin+'px',
		'height': col1TopMin+'px'
	});
	col1.find('span.before em').css({
		'top': -col1TopMax+col1TopMin+'px',
		'border-bottom': col1TopMax-col1TopMin+'px solid #c0c0c0'
	});
	col1.find('span.before em > em').css({
		'top': '0',
		'height': col1TopMax-col1TopMin+'px'
	});
	var col1BotMin = Math.floor(($('.wrapper').width()-col1.offset().left-col1.width())/$('.wrapper').width()*109);
	var col1BotMax = Math.floor(($('.wrapper').width()-col1.offset().left)/$('.wrapper').width()*109);
	col1.find('span.after').css({
		'bottom': -col1BotMin+'px',
		'height': col1BotMin+'px'
	});
	col1.find('span.after em').css({
		'bottom': -col1BotMax+col1BotMin+'px',
		'border-top': col1BotMax-col1BotMin+'px solid #9bb61b'
	});
	col1.find('span.after em > em').css({
		'bottom': '0',
		'height': col1BotMax-col1BotMin+'px'
	});
	var col2 = $('.geography > div > ul li.col2');
	var col2TopMin = Math.floor(col2.offset().left/$('.wrapper').width()*109);
	var col2TopMax = Math.floor((col2.offset().left+col2.width())/$('.wrapper').width()*109);
	col2.find('span.before').css({
		'top': -col2TopMin+'px',
		'height': col2TopMin+'px'
	});
	col2.find('span.before em').css({
		'top': -col2TopMax+col2TopMin+'px',
		'border-bottom': col2TopMax-col2TopMin+'px solid #e9e9e9'
	});
	col2.find('span.before em > em').css({
		'top': '0',
		'height': col2TopMax-col2TopMin+'px'
	});
	var col2BotMin = Math.floor(($('.wrapper').width()-col2.offset().left-col2.width())/$('.wrapper').width()*109);
	var col2BotMax = Math.floor(($('.wrapper').width()-col2.offset().left)/$('.wrapper').width()*109);
	col2.find('span.after').css({
		'bottom': -col2BotMin+'px',
		'height': col2BotMin+'px'
	});
	col2.find('span.after em').css({
		'bottom': -col2BotMax+col2BotMin+'px',
		'border-top': col2BotMax-col2BotMin+'px solid #057c46'
	});
	col2.find('span.after em > em').css({
		'bottom': '0',
		'height': col2BotMax-col2BotMin+'px'
	});
	$('.geography > div > ul li h3').append('<em></em>');

	col1.find('h3 em').css({
		'border-bottom': col1TopMax-col1TopMin+'px solid #9bb61b'
	});
	col2.find('h3 em').css({
		'border-bottom': col2TopMax-col2TopMin+'px solid #057c46'
	});
	var gh = $('.geography .map').height();
	$('.geography > div > ul li').each(function() {
		var h = $(this).height(); 
		gh = h > gh ? h : gh;
	});
	$('.geography > div > ul li').height(gh);
	$('.geography > div .map span').each(function() {
		$(this).css({
			'left': $(this).attr('data-left')+'px',
			'top': $(this).attr('data-top')+'px'
		});
	});
}*/
function map() {
	$('.contactus #map').css({
		'height': $('.wrapper').height()-$('.header').height()+'px'
	});
}
$(document).ready(function() {
	$('.production ul li, .about .region > div, .about .company > div, .geography > div .map, .facts .proof > div, .facts .news > div').addClass('animate');
	$(window).bind('scroll', function() {
		$('.animate').each(function() {
			if ( $(this).offset().top < $(document).scrollTop()+$(window).height() ) {
				$(this).addClass('complete');
			}
		});
	});
	if ( $('.slider').length > 0 ) {
		slider();
	}
	if ( $('.production').length > 0 ) {
		$('.production').append('<span></span>');
		var ps = Math.ceil(($(window).width()/2-438)/393)*393;
		$('.production > span').width(ps);
	}
	if ( $('.about').length > 0 ) {
		$('.about .region > div p').hover(
			function() {
				$(this).stop(true,true).find('img').animate({
					'width': '0',
					'height': '0'
				}, 400);
				$(this).find('img').animate({
					'width': $(this).find('img').attr('width')+'px',
					'height': $(this).find('img').attr('height')+'px'
				}, 400);
			},
			function() {
				$(this).find('img').animate({
					'width': $(this).find('img').attr('width')+'px',
					'height': $(this).find('img').attr('height')+'px'
				}, 400);
			}
		);
	}
	if ( $('.facts').length > 0 ) {
		var fph = 0;
		$('.facts .proof ul li').each(function() {
			var h = $(this).height(); 
			fph = h > fph ? h : fph;
			$(this).prepend('<h6><span>'+eval($(this).index()+1)+'</span></h6>');
		});
		$('.facts .proof ul li').height(fph);
		factsLiH5();
		var fpd = 0;
		$('.facts .proof > div > div > div').each(function() {
			var h = $(this).outerHeight(); 
			fpd = h > fpd ? h : fpd;
		});
		$('.facts .proof > div > div > div').outerHeight(fpd);
	}
	if ( $('.firm').length > 0 ) {
		var firmStat = true;
		$(window).bind('scroll', function() {
			if ( $('.firm .stat').offset().top < $(document).scrollTop()+$(window).height()-$('.firm .stat').height()/2 && firmStat == true ) {
				firmStat = false;
				$('.firm .stat .chart').drawDoughnutChart([
					{ value: 47, color:'#f8be00' },
					{ value: 63, color:'#057c46' },
					{ value: 73, color:'#02483e' },
					{ value: 180, color:'#9bb61b' }
				]);
				$('.firm .stat .grow').addClass('complete');
				$('.firm .stat .tip h6').css({
					'width': $('.firm .stat .tip').find('h6').attr('data-width')
				});
				setTimeout(function() {
					$('.firm .stat .tip').addClass('complete');
				}, 1250);
			}
		});
	}
	if ( $('.contactus').length > 0 ) {
		$('.contactus #map').css({
			'height': $('.contactus').outerHeight()+'px'
		});
	}
	if ( $('.contactus').length > 0 ) {
		$('.contactus .information p').hover(
			function() {
				$(this).stop(true,true).find('img').animate({
					'width': '0',
					'height': '0'
				}, 400);
				$(this).find('img').animate({
					'width': $(this).find('img').attr('width')+'px',
					'height': $(this).find('img').attr('height')+'px'
				}, 400);
			},
			function() {
				$(this).find('img').animate({
					'width': $(this).find('img').attr('width')+'px',
					'height': $(this).find('img').attr('height')+'px'
				}, 400);
			}
		);
	}
	if ( $('.contactus #map').length > 0 ) {
		map();
	}
	$('.modal').append('<span class="close"></span>');
	var bh = 0;
	$('.header button').bind('click', function() {
		$('.modal').css({
			'margin-top': -($(window).height()-($('.modal').outerHeight()+60))/2+'px'
		}).addClass('slideInDown').removeClass('slideOutDown').stop(true,true).fadeIn(500);
		$('.fade').stop(true,true).fadeIn(500);
		bh = $(document).scrollTop();
		$('body').css({'position': 'fixed', 'top': -bh+'px', 'overflow-y': 'scroll'});
		return false;
	});
	$('.modal .close, .fade').bind('click', function() {
		$('.modal').addClass('slideOutDown').removeClass('slideInDown')
		$('.modal, .fade').stop(true,true).fadeOut(500);
		$('body').css({'position': 'static', 'top': '0', 'overflow-y': 'auto'});
		$(document).scrollTop(bh);
		return false;
	});
	$('.geography .nav li a').bind('click', function() {
		$(this).parents('.geography').find('.map img').stop(true,true).fadeOut(500);
		$(this).parents('.geography').find('.map img[class="'+$(this).attr('class')+'"]').stop(true,true).fadeIn(500);
		$(this).parent().addClass('active').siblings().removeClass('active');
		return false;
	}).filter(':first').click();
});
$(window).resize(function() {
	if ( $('.contactus #map').length > 0 ) {
		map();
	}
});
$(window).load(function() {
	if ( $('.facts').length > 0 ) {
		factsLiH5();
	}
	if ( $('.firm .cols').length > 0 ) {
		var flh = 0;
		$('.firm .cols li').each(function() {
			var h = $(this).height();
			flh = h > flh ? h : flh;
		});
		$('.firm .cols li').height(flh);
	}
	if ( $('.firm').length > 0 ) {
		$('.firm .stat .tip h3').css({
			'margin-top': -$('.firm .stat .tip h3').height()/2+'px'
		});
	}
	if ( $('.contactus #map').length > 0 ) {
		map();
	}
	if ( $('.newslist .table').length > 0 ) {
		$('.newslist .table').masonry({
			itemSelector: '.item',
			'gutter': 2
		});
	}
});