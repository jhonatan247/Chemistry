//Se crea el juego
var game = new Phaser.Game(820, 820, Phaser.CANVAS, "container");

//se añaden los estados del juego
game.state.add('mapa', mapa);
game.state.add('menu', menu);
game.state.add('selectedView', selectedView);
game.state.add('gameOver', gameOver);
game.state.add('win', win);


var index =0;
var main = {
	preload: function() {  
        //Cargando los recursos del estado
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.load.audio("sound", "sounds/principal.wav");
	},
	
	create: function() { 
        //Se añade la música
        sound =game.add.audio("sound");
    },
    update:function(){
        game.state.start('menu');
        sound.play("", 0,1,true);
    
    }
}
//se añade el estado main
game.state.add('main', main);   
//se inicia el estado main
game.state.start('main');