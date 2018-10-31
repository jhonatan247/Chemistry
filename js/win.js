var win = {
	preload: function() {  
        game.load.image("salir", "images/exit.png");
    },
    
    create: function() { 
        
        
        game.stage.backgroundColor = '#212F3C';
        var sText = 'congratulations, your score is '+points;
        var txtTitulo = game.add.text(game.width/2, game.height/2, sText, {font: "Arial", fill: '#ffffff', align:"center"});
        txtTitulo.fontSize = 40;
        txtTitulo.wordWrapWidth  = 700;
        txtTitulo.wordWrap = true;
        txtTitulo.anchor.setTo(0.5);
        
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