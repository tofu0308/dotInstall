$(function(){
	$(window).scroll(function(){
		var dy = $(this).scrollTop();
		console.log(dy);

		$('#box1').css('top' , 10+dy/2);
		$('#box2').css('top' , 10+dy/4);
		$('#box3').css('top' , 10+dy/8);
	})
})