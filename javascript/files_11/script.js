$(function() {
	$(window).scroll(function(){
		var dy = $(this).scrollTop();

		var wh =$('body').height();
		var whPer =	wh / 100;
		var dyPer =(dy*1.1) / whPer;		

		var scPer =Math.round(dyPer);
		if (scPer > 100) scPer = 100;
		console.log(scPer);

		$('.scroll .val').text(dy + ' px');
		$('.bar').css('width' , scPer +'%');


	});
});


