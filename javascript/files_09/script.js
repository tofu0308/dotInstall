$(function(){
	var pos1 = $('#box1').offset();
	var pos2 = $('#box2').offset();
	var pos3 = $('#box3').offset();
	var pos4 = $('#box4').offset();

	$(window).scroll(function(){
		var dy = $(this).scrollTop();
		console.log(dy);

		$('#box1').css('top' , pos1.top + dy/2);
		$('#box1').css('left' , pos1.left + dy/4);
		$('#box1').css('width' , 40 + dy * 0.2);

		$('#box2').css('top' , pos2.top + dy/4);
		$('#box2').css('left' , pos2.left + dy/8);
		$('#box2').css('height' , 40 + dy * 0.2);

		$('#box3').css('top' , pos3.top + dy/6);
		$('#box3').css('left' , pos3.left + dy/12);
		$('#box3').css('width' , 40 + dy * 0.2);
		$('#box3').css('height' , 40 + dy * 0.2);

		$('#box4').css('top' , pos4.top + dy/8);
		$('#box4').css('left' , pos4.left + dy/16);

		$('#bg1').css('background-position','0 '+dy+'px');

		if(dy >800 ){
			$('#bg2').css('background-position','0 '+ (dy - 800) +'px');
		}else{
			$('#bg2').css('background-position','0 0');
		}
		
		if(dy >1600 ){
			$('#bg3').css('background-position','0 '+ (dy - 1600)*2 +'px');
		}else{
			$('#bg3').css('background-position','0 0');
		}

		if(dy >1600 ){
			$('#bg4').css('opacity',(dy - 1600)/800);
			$('body').css('padding-bottom','800px');
		}else{
			$('#bg4').css('opacity','0');
		}

		if(dy >1600 ){
			$('#msg').css('opacity',(dy - 1600)/800);
			$('#msg').css('top', 800);
			var dx = (dy - 1600) > 600 ?  600:(dy - 1600);
			$('#msg').css('left', dx);

		}else{
			$('#msg').css('opacity','0');
		}


	})
})
