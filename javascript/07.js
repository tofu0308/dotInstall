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
	
	ctx.strokeRect(10,10,50,100);
	ctx.fillRect(10,10,100,50);
	ctx.clearRect(20,20,20,20);
	*/

	//線の色
	//ctx.strokeStyle = "rgba(255,0,0,0.5)";
	
	//線の幅（太さ）
	//ctx.lineWidth = 15;
	
	//角の設定
	//round　角丸
	//bevel　面取
	//miter 面取しない

	/*
	ctx.lineJoin = "bevel";
	ctx.strokeRect(10,10,50,50);
	*/
	
	//塗り色
	/*
	ctx.fillStyle = "rgba(0,255,255,0.5)"
	ctx.fillRect(80,10,50,50);
	*/

	//線形グラデーション
	//var g = ctx.createLinearGradient(0,0,100,100);

	//円形グラデーション
	/*
	var g = ctx.createRadialGradient(50,50,20,50,50,60);
	
	g.addColorStop(0.0,"red");
	g.addColorStop(0.5,"purple");
	g.addColorStop(1.0,"yellow");
	ctx.fillStyle = g;
	*/

	
	//shadow
	/*
	ctx.shadowColor = "#ccc";
	ctx.shadowOffsetX = 5;
	ctx.shadowOffsetY = 5;
	ctx.shadowBlur = 2;
	*/

	//alpha
	/*
	ctx.globalAlpha = 0.5;
	*/

	//変形
	/*
	ctx.scale(0.8,0.8);
	ctx.rotate(30/180*Math.PI);
	ctx.translate(100,10);

	ctx.fillRect(0,0,100,100);
	*/

	//線
	/*
	ctx.beginPath();
	ctx.moveTo(20,20);
	ctx.lineTo(120,20);
	ctx.lineTo(120,120);
	ctx.closePath();
	ctx.fill();
	*/
	//ctx.stroke();

	//曲線
	/*
	ctx.beginPath();
	ctx.arc(100,100,50,10/180*Math.PI,210/180*Math.PI);
	ctx.stroke();
	*/

	//円
	/*
	ctx.beginPath();
	ctx.arc(100,100,50,0/180*Math.PI,360/180*Math.PI);
	ctx.stroke();
	*/

	ctx.beginPath();
	ctx.arc(100,100,50,10/180*Math.PI,280/180*Math.PI);
	ctx.lineWidth = 15;
	
	//round butt square
	ctx.lineCap ="round";
	ctx.stroke();







}

