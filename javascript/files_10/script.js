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
				$('#content').addClass('scrollAble')
				$('body').height(20000);

			});
		} else {	// 読み込み途中
			var percent = Math.ceil(100 * loaded / total);
			$('#loadText').html(percent + '%');
			$('#bar span').css('width', percent + '%');
		}
	});


});