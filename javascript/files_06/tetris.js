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

//操作ブロックをセット
function newShape(){
	//仕様ブロックをパターンから抽出
	var id = Math.floor(Math.random() * shapes.length);
	var shape = shapes[id];

	current = [];
	for (var y = 0; y < 4; ++y) {
		current[y] =[];
		for (var x = 0; x < 4; ++x) {
			var i = 4 * y + x;
			if (typeof shape[i] != 'undefind' && shape[i]) {
				current[y][x] = id +1;
			}else{
				current[y][x] = 0;
			}
		}
	}

	//盤面丈夫にセット
	currentX = 5;
	currentY = 0;
}

function tick(){
	//降下
	if(valid(0,1)){
		++currentY;
	}else{
		//着地時の処理
		//ブロック固定
		freeze();
		//ライン消去
		clearLines();

		//ゲームオーバー条件
		if(lose){
			//newGame();
			return false;
		}

		//新しいブロック
		newShape();
	}
}

//ブロックの移動可否
function valid(offsetX, offsetY, newCurrent){
	offsetX = offsetX || 0;
	offsetY = offsetY || 0;
	offsetX = offsetX + offsetX;
	offsetY = offsetY + offsetY;
	newCurrent = newCurrent || current;

	for (var y = 0; y < 4; ++y) {
		for (var x = 0; x < 4; ++x) {
			if(newCurrent[y][x]){
				if(typeof board[y + offsetY] == 'undefind'
					|| typeof board[y + offsetY][x + offsetX]
					|| x + offsetX < 0
					|| y + offsetY >=  ROWS
					|| x + offsetX >= COLS ){
						if(offsetY == 1 && offsetX - currentX == 0 && offsetY - currentY == 1){
							alert("game over");

							//ゲームオーバーフラグ
							lose = true;
					}
				return false;
				}
			}
		}
	}
	return true;
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
	interval = setInterval(tick, 250);

}
newGame();
