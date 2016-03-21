var COLS =10,ROWS =20;
var board = [];
var lose;
var interval;
var cuurent;
var currentX, currentY;

//block pattern
var shapes = [
	[1,1,1,1],
	[1,1,1,0,
	 1],
	[1,1,1,0,
	 0,0,1],
	[1,1,0,0,
	 1,1],
	[1,1,0,0,
	 0,1,1],
	[0,1,1,0,
	 1,1],
	[0,1,0,0,
	 1,1,1]
];

//block colors
var colors = ['cyan','orange','blue','yellow','red','green','purple'];

function newGame(){
	//timer clear
	clearInterval(interval);

	//盤面初期化
	init();

	//操作ブロックをセット
	newShape()

	//ゲームオーバーフラグタオス
	lose = false;

	//250ms毎に関数tickを呼び出し
	interval = setInterVal(tick, 250);

}