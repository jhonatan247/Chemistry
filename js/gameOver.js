var gameOver = {
	preload: function() {  
        game.load.image("salir", "images/exit.png");
        game.load.image("fondo", "images/gameOver.jpg");
    },
    
    create: function() { 
        
        background = game.add.tileSprite(0, 0, 834, 820, "fondo");
        
        var buttonExit = game.add.button(770, 50, "salir", this.goToBack, this);
        buttonExit.anchor.setTo(0.5);         
        buttonExit.scale.setTo(0.4, 0.4);  
        lives = 3;
        points = 0;
        level = 1;
		currentQuestion = 0;
		currentPosition = 0;
        
    },
    update:function(){

    },
    goToBack:function(){
        game.state.start('menu');
    }
}