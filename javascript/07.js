//07.js(Canvas用)
window.onload = function(){
	draw();
}

function draw(){
	var canvas = document.getElementById('myCanvas');
	if(!canvas || !canvas.getContext) return false;
	var ctx = canvas.getContext('2d');

	/*
		引数1　支点のx座標
		引数2　支点のy座標
		引数3　幅
		引数4　高さ
	*/
	ctx.strokeRect(10,10,50,100);
	ctx.fillRect(10,10,100,50);
	ctx.clearRect(20,20,20,20);
}
