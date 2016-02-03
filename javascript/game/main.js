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
			
			//アニメーション
			this.frame = this.age % 3 ;

			// 十字キーで操作
			if(core.input.left) this.x -= 5;
			if(core.input.right) this.x += 5;
			if(core.input.up) this.y -= 5;
			if(core.input.down) this.y += 5;

			//衝突判定
			// intersect 
			if(this.intersect(enemy)){
				//label.text = 'hit!';
			}

			//within
			if(this.within(enemy , 10)){
				label.text = 'HIT!';
			}

			
		});


		var enemy = new Sprite(32, 32);
		enemy.image = core.assets['game/chara1.png'];
		enemy.x = 80;
		enemy.y = 0;
		enemy.frame = 5;

		enemy.addEventListener('enterframe' , function(){
			
		});

		//touch -> remove
		bear.on('touchstart' , function(){
			core.rootScene.removeChild(this);
		});

		core.rootScene.on('touchstart' , function(e){
			bear.x = e.x;
			bear.y = e.y;
		});

		// label
		var label = new Label();
		label.x = 280;
		label.y = 5;
		label.color = 'red'
		label.font = '14px "Arial"';
		/*
		label.text = '0';
		
		//frame数取得　-> label　書き換え		
		label.on('enterframe' , function(){
			label.text = (core.frame / core.fps).toFixed(2);
		});
		*/


		core.rootScene.addChild(enemy);
		core.rootScene.addChild(label);
		core.rootScene.addChild(bear);
	}
	core.start();
};