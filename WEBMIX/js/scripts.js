$(function(){

	$('body').scrollspy({
		target:'header .navbar',
		offset:90
	});
	
	
	$('.navbar a[href*="#"]:not([href="#"])').click(function(){
		if(location.pathname.replace(/^\//, '')==
			this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
			var target = $(this.hash);
			target = target.length ? target : $('[name='+ this.hash.Slice(1) +']');
			if(target.length){
				$('html,body').animate({
					scrollTop: target.offset().top,	
				}, 500);
				return false;
			}
		}
		
	});

	
});