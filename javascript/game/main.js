enchant();

/*

Core
-rootScene
--Sprite(Bear)

*/

window.onload = function() {
	var core = new Core(320,320);
	core.preload('game/chara1.png');
	core.fps = 10;

	core.onload = function(){
		var bear = new Sprite(32, 32);
		bear.image = core.assets['game/chara1.png'];
		bear.x = 0;
		bear.y = 0;

		bear.frame = 1;

		bear.addEventListener('enterframe' , function(){
			this.x += 5;
			this.frame = this.age % 3 + 5;

			if(this.x >= 320)  this.x = 0;
		});

		core.rootScene.addChild(bear); 
	}
	core.start();
};