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