var selectedView = {
    preload: function() {  
        game.load.image("salir", "images/exit.png");
        game.load.image("fondo", "images/questionBackground.jpg");
    },
    
    create: function() { 
        
        background = game.add.tileSprite(0, 0, 1458, 820, "fondo");
        
        var sText =gameQuestions[currentQuestion];
        console.log(questions);
        //añade el título
        var txtTitulo = game.add.text(game.width/2, game.height/2 -250, sText, {font: "Bold Arial", fill: '#ffffff', align:"center"});
        txtTitulo.fontSize = 35;
        txtTitulo.wordWrapWidth  = 700;
        txtTitulo.wordWrap = true;
        txtTitulo.anchor.setTo(0.5);
        
        sText = 'a) '+gameAnswers[currentQuestion][0];

        var txtA = game.add.text(0, 0, sText , {font: "Arial", fill: '#ffffff', align:"left"});
        txtA.fontSize = 25;
        txtA.wordWrapWidth  = 350;
        txtA.wordWrap = true;
        txtA.x = game.width/2;
        txtA.y = game.height/2-150;
        txtA.inputEnabled = true;
        txtA.events.onInputOver.add(this.over, this);
        txtA.events.onInputOut.add(this.out, this);
        txtA.events.onInputDown.add(this.selectA, this);

        sText = 'b) '+gameAnswers[currentQuestion][1];
        var txtB = game.add.text(0, 0, sText , {font: "Arial", fill: '#ffffff', align:"left"});
        txtB.fontSize = 25;
        txtB.wordWrapWidth  = 350;
        txtB.wordWrap = true;
        txtB.x = game.width/2;
        txtB.y = game.height/2-75;
        txtB.inputEnabled = true;
        txtB.events.onInputOver.add(this.over, this);
        txtB.events.onInputOut.add(this.out, this);
        txtB.events.onInputDown.add(this.selectB, this);

        sText = 'c) '+gameAnswers[currentQuestion][2];
        var txtC = game.add.text(0, 0, sText , {font: "Arial", fill: '#ffffff', align:"left"});
        txtC.fontSize = 25;
        txtC.wordWrapWidth  = 350;
        txtC.wordWrap = true;
        txtC.x = game.width/2;
        txtC.y = game.height/2;
        txtC.inputEnabled = true;
        txtC.events.onInputOver.add(this.over, this);
        txtC.events.onInputOut.add(this.out, this);
        txtC.events.onInputDown.add(this.selectC, this);

        sText = 'd) '+gameAnswers[currentQuestion][3];
        var txtD = game.add.text(0, 0, sText , {font: "Arial", fill: '#ffffff', align:"left"});
        txtD.fontSize = 25;
        txtD.wordWrapWidth  = 350;
        txtD.wordWrap = true;
        txtD.x = game.width/2;
        txtD.y = game.height/2+75;
        txtD.inputEnabled = true;
        txtD.events.onInputOver.add(this.over, this);
        txtD.events.onInputOut.add(this.out, this);
        txtD.events.onInputDown.add(this.selectD, this);
        
        var buttonExit = game.add.button(770, 50, "salir", this.goToBack, this);
        buttonExit.anchor.setTo(0.5);         
        buttonExit.scale.setTo(0.4, 0.4);  
        
    },
    update:function(){

    },
    over:function(item){
        item.fill = "#ffff44";

    },
    out:function (item) {
        item.fill = "#ffffff";
    },
    selectA:function(){
        if(gameCorrects[currentQuestion]==0){
            points+= 1000;
        }else{
            lives --;
        }
        if(lives <= 0){
            game.state.start('gameOver');
        }else{
            game.state.start('mapa');
        }
    },
    selectB:function(){
        if(gameCorrects[currentQuestion]==1){
            points+= 1000;
        }else{
            lives --;
        }
        if(lives <= 0){
            game.state.start('gameOver');
        }else{
            game.state.start('mapa');
        }
    },
    selectC:function(){
        if(gameCorrects[currentQuestion]==2){
            points+= 1000;
        }else{
            lives --;
        }
        if(lives <= 0){
            game.state.start('gameOver');
        }else{
            game.state.start('mapa');
        }
    },
    selectD:function(){
        if(gameCorrects[currentQuestion]==3){
            points+= 1000;
        }else{
            lives --;
        }
        if(lives <= 0){
            game.state.start('gameOver');
        }else{
            game.state.start('mapa');
        }
    },
    goToBack:function(){
        lives--;
        if(lives <= 0){
            game.state.start('gameOver');
        }else{
            game.state.start('mapa');
        }
    }
    

}