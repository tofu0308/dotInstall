enchant();

/*

Core
-rootScene
--Sprite(Bear)

*/

window.onload = function() {
	var core = new Core(320,320);
	core.preload('game/chara1.png');
	core.fps = 5;

	core.onload = function(){
		var bear = new Sprite(32, 32);
		bear.image = core.assets['game/chara1.png'];
		bear.x = 0;
		bear.y = 0;

		bear.frame = 1;


		bear.addEventListener('enterframe' , function(){
			
			//アニメーション
			this.frame = this.age % 3 ;

			// 十字キーで操作
			if(core.input.left) this.x -= 5;
			if(core.input.right) this.x += 5;
			if(core.input.up) this.y -= 5;
			if(core.input.down) this.y += 5;
		});

		//touch -> remove
		bear.on('touchstart' , function(){
			core.rootScene.removeChild(this);
		});



		core.rootScene.addChild(bear); 
	}
	core.start();
};