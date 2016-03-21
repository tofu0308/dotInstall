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

//盤面初期化関数
function init(){
	for (var y = 0; y < ROWS; ++y) {
		board[y]=[];

		for (var x = 0; x < ROWS; ++x) {
			board[y][x]=0;			
		}
	}
}



//ページ読み込み時
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
newGame();
