$(function(){
	
	/*var wheight = $(window).height();
	$('.fullheight').css('height', wheight);
	$(window).resize(function(){
		wheight = $(window).height();
		$('.fullheight').css('height', wheight);
	});*/

	//replace img as bg img
	$('.fullHeight .item img').each(function(){
		var srcImg = $(this).attr('src');
		$(this).parent().css({
			'background-image':'url('+srcImg+')'
			});
		$(this).remove();
	});
	
	
	
	$('a[data-toggle="collapse"]').click(function(){
		if(!$(this).hasClass('collapsed')){
			$('li').find(this).toggleClass('focused-list');
			$(this).find("i").toggleClass('rotate-180');
		}else{
			$('li').find(this).toggleClass('focused-list');
			$(this).find("i").toggleClass('rotate-180');
		}
	});
	
	$('a[data-toggle="collapse"] + ul a').click(function(){
		$(this).addClass('submenu-selected');
	});
	
});