(function($){
	$('header nav.nav > ul.nav, footer nav.ftr-nav ul.nav').removeClass('nav');
	$('header nav.nav > ul > li > a, footer nav.ftr-nav ul > li > a').addClass('scroll-to-link');
	$('header nav.nav > ul > li.active, footer nav.ftr-nav ul > li.active').removeClass('active current');
	var _home_href = $('.not-front header nav.nav > ul > li:first-child > a').attr('href');
	$('.not-front header nav.nav > ul > li:first-child > a, .not-front footer nav.ftr-nav > ul > li:first-child > a').attr('href', _home_href + '#home');
	$('.front header nav.nav > ul > li:first-child > a, .front footer nav.ftr-nav > ul > li:first-child > a').attr('href', '#home');

	$('.not-front header nav.nav > ul > li:not(:first-child), .not-front footer nav.ftr-nav > ul > li:not(:first-child)').each(function(){
		var _href2 = $(this).find('a:not(.no-scroll)').attr('href');
		$(this).find('a:not(.no-scroll)').attr('href', _home_href + _href2);		
	});
	$('#sp-component').removeClass('col-xs-12 col-sm-12 col-md-12 col-lg-12');
	$('.sppb-container').removeClass('sppb-container');
	$('.sppb-row').removeClass('sppb-row');
	$('.sppb-col-sm-12').removeClass('sppb-col-sm-12');
	$('#sp-main-body > .container').removeClass('container');
/////
	$('.h-banner .h-banner-nav > .h-banner-nav-item:first-child, .doctors-section .tab-wrapper .tabs-content .tab-info .team-container .team-info > .team-member-container:first-child').addClass('active');
/////
	$('.post p.readmore > a').addClass('read-more').removeClass('btn btn-default').unwrap();
	$('.alert').each(function(){
		$(this).find('.close').click(function(){
			$(this).parent().remove();
		});
	});
}(jQuery));

