/*
盤面の状態を描画する処理
*/

var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d');
var W = 300, H =600;
var BLOCK_W = W / COLS, BLOCK_H = H / ROWS;

function render() {
	ctx.clearRect(0,0,W,H);
	ctx.strokeStyle = 'black';

	//盤面を描画
	for (var x = 0; x < COLS; ++x) {
		for (var y =0; y < ROWS; ++y) {
			if ( board[ y ][ x ] ) {
				ctx.fillStyle = colors[board[y][x] - 1];
				drawBlock(x,y);
			}		
		}
	}

	//操作ブロック描画
	for ( var y = 0; y < 4; ++y ) {
		for ( var x = 0; x < 4; ++x ) {
			if ( current[ y ][ x ] ) {
				ctx.fillStyle = colors[ current[ y ][ x ] - 1 ];
				drawBlock( currentX + x, currentY + y );
			}
		}
	}
}

// 30ミリ秒ごとに状態を描画する関数を呼び出す
setInterval( render, 30 );

// x, yの部分へマスを描画する処理
function drawBlock( x, y ) {
  ctx.fillRect( BLOCK_W * x, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1 );
  ctx.strokeRect( BLOCK_W * x, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1 );
}


