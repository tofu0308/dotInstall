$(function() {
	Array.prototype.remove = function(element) {
	  for (var i = 0; i < this.length; i++)
	    if (this[i] == element) this.splice(i,1); 
	};

	function preload(images, progress) {
		var total = images.length;
	    $(images).each(function(){
			var src = this;
	        $('<img/>')
				.attr('src', src)
				.load(function() {
					images.remove(src);
					progress(total, total - images.length);
				});
	    });
	}
	
	preload([
		'../img/10/001.jpg',
		'../img/10/002.jpg',
		'../img/10/003.jpg',
		'../img/10/004.jpg',
		'../img/10/005.jpg',
		'../img/10/006.jpg',
		'../img/10/007.jpg',
		'../img/10/008.jpg',
		'../img/10/009.jpg',
		'../img/10/010.jpg'
	], function(total, loaded){
		if (loaded >= total) {	// すべて読み込んだ
			$('#loader').fadeOut('slow', function() {
				$('#content').fadeIn('slow');
				$('body').height(8000);

				

				$(window).scroll(function(){
					var dy = $(this).scrollTop();
					console.log(dy)

					if(dy < 100) {$('#content').css('background-image','url(../img/10/001.jpg)');}
					if(dy > 100) {$('#content').css('background-image','url(../img/10/002.jpg)');}
					if(dy > 200) {$('#content').css('background-image','url(../img/10/003.jpg)');}
					if(dy > 300) {$('#content').css('background-image','url(../img/10/004.jpg)');}
					if(dy > 400) {$('#content').css('background-image','url(../img/10/005.jpg)');}
					if(dy > 500) {$('#content').css('background-image','url(../img/10/006.jpg)');}
					if(dy > 600) {$('#content').css('background-image','url(../img/10/007.jpg)');}
					if(dy > 700) {$('#content').css('background-image','url(../img/10/008.jpg)');}
					if(dy > 800) {$('#content').css('background-image','url(../img/10/009.jpg)');}
					if(dy > 900) {$('#content').css('background-image','url(../img/10/010.jpg)');}
					if(dy > 1000) {$('#content').css('background-image','url(../img/10/002.jpg)');}
					if(dy > 1100) {$('#content').css('background-image','url(../img/10/003.jpg)');}
					if(dy > 1200) {$('#content').css('background-image','url(../img/10/004.jpg)');}
					if(dy > 1300) {$('#content').css('background-image','url(../img/10/005.jpg)');}
					if(dy > 1400) {$('#content').css('background-image','url(../img/10/006.jpg)');}
					if(dy > 1500) {$('#content').css('background-image','url(../img/10/007.jpg)');}
					if(dy > 1600) {$('#content').css('background-image','url(../img/10/008.jpg)');}
					if(dy > 1700) {$('#content').css('background-image','url(../img/10/009.jpg)');}
					if(dy > 1800) {$('#content').css('background-image','url(../img/10/010.jpg)');}
					if(dy > 1900) {$('#content').css('background-image','url(../img/10/002.jpg)');}
					if(dy > 2000) {$('#content').css('background-image','url(../img/10/003.jpg)');}
					if(dy > 2100) {$('#content').css('background-image','url(../img/10/004.jpg)');}
					if(dy > 2200) {$('#content').css('background-image','url(../img/10/005.jpg)');}
					if(dy > 2300) {$('#content').css('background-image','url(../img/10/006.jpg)');}
					if(dy > 2400) {$('#content').css('background-image','url(../img/10/007.jpg)');}
					if(dy > 2500) {$('#content').css('background-image','url(../img/10/008.jpg)');}
					if(dy > 2600) {$('#content').css('background-image','url(../img/10/009.jpg)');}
					if(dy > 2700) {$('#content').css('background-image','url(../img/10/010.jpg)');}
					if(dy > 2800) {$('#content').css('background-image','url(../img/10/002.jpg)');}
					if(dy > 2900) {$('#content').css('background-image','url(../img/10/003.jpg)');}
					if(dy > 3000) {$('#content').css('background-image','url(../img/10/004.jpg)');}
					if(dy > 3100) {$('#content').css('background-image','url(../img/10/005.jpg)');}
					if(dy > 3200) {$('#content').css('background-image','url(../img/10/006.jpg)');}
					if(dy > 3300) {$('#content').css('background-image','url(../img/10/007.jpg)');}
					if(dy > 3400) {$('#content').css('background-image','url(../img/10/008.jpg)');}
					if(dy > 3500) {$('#content').css('background-image','url(../img/10/009.jpg)');}
					if(dy > 3600) {$('#content').css('background-image','url(../img/10/010.jpg)');}
					if(dy > 3700) {$('#content').css('background-image','url(../img/10/002.jpg)');}
					if(dy > 3800) {$('#content').css('background-image','url(../img/10/003.jpg)');}
					if(dy > 3900) {$('#content').css('background-image','url(../img/10/004.jpg)');}
					if(dy > 4000) {$('#content').css('background-image','url(../img/10/005.jpg)');}
					if(dy > 4100) {$('#content').css('background-image','url(../img/10/006.jpg)');}
					if(dy > 4200) {$('#content').css('background-image','url(../img/10/007.jpg)');}
					if(dy > 4300) {$('#content').css('background-image','url(../img/10/008.jpg)');}
					if(dy > 4400) {$('#content').css('background-image','url(../img/10/009.jpg)');}
					if(dy > 4500) {$('#content').css('background-image','url(../img/10/010.jpg)');}
					if(dy > 4600) {$('#content').css('background-image','url(../img/10/002.jpg)');}
					if(dy > 4700) {$('#content').css('background-image','url(../img/10/003.jpg)');}
					if(dy > 4800) {$('#content').css('background-image','url(../img/10/004.jpg)');}
					if(dy > 4900) {$('#content').css('background-image','url(../img/10/005.jpg)');}
					if(dy > 5000) {$('#content').css('background-image','url(../img/10/006.jpg)');}
					if(dy > 5100) {$('#content').css('background-image','url(../img/10/007.jpg)');}
					if(dy > 5200) {$('#content').css('background-image','url(../img/10/008.jpg)');}
					if(dy > 5300) {$('#content').css('background-image','url(../img/10/009.jpg)');}
					if(dy > 5400) {$('#content').css('background-image','url(../img/10/010.jpg)');}
					if(dy > 5500) {$('#content').css('background-image','url(../img/10/002.jpg)');}
					if(dy > 5600) {$('#content').css('background-image','url(../img/10/003.jpg)');}
					if(dy > 5700) {$('#content').css('background-image','url(../img/10/004.jpg)');}
					if(dy > 5800) {$('#content').css('background-image','url(../img/10/005.jpg)');}
					if(dy > 5900) {$('#content').css('background-image','url(../img/10/006.jpg)');}
					if(dy > 6000) {$('#content').css('background-image','url(../img/10/007.jpg)');}
					if(dy > 6100) {$('#content').css('background-image','url(../img/10/008.jpg)');}
					if(dy > 6200) {$('#content').css('background-image','url(../img/10/009.jpg)');}
					if(dy > 6300) {$('#content').css('background-image','url(../img/10/010.jpg)');}
					if(dy > 6400) {$('#content').css('background-image','url(../img/10/002.jpg)');}
					if(dy > 6500) {$('#content').css('background-image','url(../img/10/003.jpg)');}
					if(dy > 6600) {$('#content').css('background-image','url(../img/10/004.jpg)');}
					if(dy > 6700) {$('#content').css('background-image','url(../img/10/005.jpg)');}
					if(dy > 6800) {$('#content').css('background-image','url(../img/10/006.jpg)');}
					if(dy > 6900) {$('#content').css('background-image','url(../img/10/007.jpg)');}
					if(dy > 7000) {$('#content').css('background-image','url(../img/10/008.jpg)');}
					if(dy > 7100) {$('#content').css('background-image','url(../img/10/009.jpg)');}
					if(dy > 7200) {$('#content').css('background-image','url(../img/10/010.jpg)');}

				});

			});
		} else {	// 読み込み途中
			var percent = Math.ceil(100 * loaded / total);
			$('#loadText').html(percent + '%');
			$('#bar span').css('width', percent + '%');
		}
	});


});


