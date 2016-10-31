$(function(){
	$('body').scrollspy({
		target:'.main-navigation .navbar',
		offset:100
	});
	
	var activatedItem = $(this).find("li.active a").attr("href");
		if(activatedItem !== "#11"){
			$('header nav').addClass("inbody");
			$('header nav').addClass("navbar-fixed-top");
		}else{
			
			$('header nav').removeClass("inbody");
			$('header nav').removeClass("navbar-fixed-top");
			
		}
	
	$('.main-navigation .navbar').on('activate.bs.scrollspy', function(){
		
		var activatedItem = $(this).find("li.active a").attr("href");
		if(activatedItem !== "#11"){
			$('header nav').addClass("navbar-fixed-top");
			$('header nav').addClass("inbody");
		}else{
			
			$('header nav').removeClass("navbar-fixed-top");
			$('header nav').removeClass("inbody");
			
		}
		
		
	});
});