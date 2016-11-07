$(function(){
	$('.Second-page').addClass('go-left');
	$(this).find('i').toggleClass('rotate-btn');
	
	$('.Second-page .left-button').click(function(){
		$(this).parent().toggleClass('go-left');
		$(this).find('i').toggleClass('rotate-btn');
		return false;
	});
	
	
});