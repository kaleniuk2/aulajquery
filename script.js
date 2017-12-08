$(function(){

	 $('#inputzin').before('<h2>vtnc</h2>');
	 $('ul').append('<li><strong>item 5</strong></li>');
	 $('ul').prepend('<li>item 0</li>');

	 var vtnc = $('.vtnc li').eq(3);
	 vtnc.html('vtnc dnv');
});