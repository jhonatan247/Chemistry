var menu = {
    
    preload: function(){
        //Cargando los recursos del estado
        game.load.image('btnPlay', 'images/btnPlay.png');
        game.load.image('fondo', 'images/menuBackground.jpg');
        game.load.image('soundIcon', 'images/sound.png');
    },
    
    create: function(){
        //Se añade la imagen de fondo
        fondogame = game.add.tileSprite(0, 0, 820, 820, "fondo");


        
        var sText = 'Chemistry';
        var txtTitulo = game.add.text(game.width/2, game.height/2-100, sText, {font: "Arial", fill: '#ffffff', align:"center"});
        txtTitulo.fontSize = 100;
        txtTitulo.wordWrapWidth  = 700;
        txtTitulo.wordWrap = true;
        txtTitulo.anchor.setTo(0.5);


        var btnPlay = this.add.button(game.width/2, game.height/2 +250, 'btnPlay', this.iniciar, this);
        btnPlay.anchor.setTo(0.5);
        btnPlay.scale.setTo(0.3, 0.3);
        
        
        //Se añade el botón de sonido y sus eventos para pausar o continuar la música del juego
        var buttonSound = this.add.button(60, 60, 'soundIcon', vacio, this);
        buttonSound.anchor.setTo(0.5);
        buttonSound.scale.setTo(0.5, 0.5);
        if(!soundState)
            buttonSound.alpha = 0.6;
        buttonSound.events.onInputUp.add(function(){inputDown=false;});
        buttonSound.events.onInputDown.add(function(){
            if(!inputDown){
                inputDown = true;
                changeSound(buttonSound);
            }
        });
    },
    //inicia el estdao mapa
    iniciar: function(){
        game.state.start('mapa');
    }
};