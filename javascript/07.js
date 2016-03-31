//07.js(Canvas用)
window.onload = function(){
	draw();
}

function draw(){
	var canvas = document.getElementById('myCanvas');
	if(!canvas || !canvas.getContext) return false;
	var ctx = canvas.getContext('2d');

	ctx.strokeRect(10,10,50,50);
}
