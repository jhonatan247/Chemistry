var mapa = {
	preload: function() {  
        //Cargando los recursos del estado
		game.load.image("fondo", "images/mapa1.jpg");
		game.load.image("joystick", "images/joystick.png");
		game.load.image("salir", "images/exit.png");
		game.load.image("floor", "images/floor.png");
		game.load.image("question", "images/question.png");
		game.load.image("coin", "images/coin.png");
		game.load.image("radiactive", "images/radiactivo.png");
		game.load.image("checkpoint", "images/checkpoint.png");
        
		game.load.spritesheet("character", "images/characterSprite.png", 420, 491); 
	},
	
	create: function() { 
        //Añadiendo fondo
		background = game.add.tileSprite(0, 0, 2560, 1600, "fondo");

		background.scale.setTo(0.5125, 0.5125); 
		background.tilePosition.x = currentPosition;


		game.physics.startSystem(Phaser.Physics.ARCADE);   
		game.physics.arcade.gravity.y = 400;

		player =  game.add.sprite(50, 600, "character");
		player.scale.setTo(0.3, 0.3);   
		player.animations.add("right", [22, 23, 24, 25, 26, 27, 28, 29, 30], 10, true); 
		player.animations.add("jumpRight", [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41], 6, false); 


		player.animations.add("left", [19, 18, 17, 16, 15, 14, 13, 12, 11], 10, true); 
		player.animations.add("jumpLeft", [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 6, false); 

	    game.physics.enable(player, Phaser.Physics.ARCADE);

	    player.body.bounce.y = 0.2;
	    player.body.collideWorldBounds = true;
	    player.body.setSize(420, 491, 5, 210);

        player.frame = 21;

        floor = game.add.sprite(0, 756, "floor")

        pointsMessage = game.add.text(20, 20, "Puntos: "+points, {font: "Bold Arial", fill: '#ffffff'});
        pointsMessage.fontSize = 25;

        levelMessage = game.add.text(300, 20, "Nivel: "+level, {font: "Bold Arial", fill: '#ffffff'});
        levelMessage.fontSize = 25;

        livesMessage = game.add.text(580, 20, "Vidas: "+lives, {font: "Bold Arial", fill: '#ffffff'});
        livesMessage.fontSize = 25;
        //Añadiendo grupo de preguntas
        questions = game.add.group();
        questions.position.x = currentPosition*3;
	    questions.physicsBodyType = Phaser.Physics.ARCADE;

		questions.enableBody = true;

	    var q1 = questions.create(700, 550, 'question');
        q1.scale.setTo(0.3, 0.3); 
        q1.key = 1;

	    var q2 = questions.create(1500, 550, 'question');
        q2.scale.setTo(0.3, 0.3); 
        q2.key = 2;

	    var q3 = questions.create(2300, 550, 'question');
        q3.scale.setTo(0.3, 0.3); 
        q3.key = 3;

        var q4 = questions.create(3700, 550, 'question');
        q4.scale.setTo(0.3, 0.3); 
        q4.key = 4;

	    var q5 = questions.create(4500, 550, 'question');
        q5.scale.setTo(0.3, 0.3); 
        q5.key = 5;

	    var q6 = questions.create(5300, 550, 'question');
        q6.scale.setTo(0.3, 0.3); 
        q6.key = 6;

        var q7 = questions.create(6700, 550, 'question');
        q7.scale.setTo(0.3, 0.3); 
        q7.key = 7;

	    var q8 = questions.create(7500, 550, 'question');
        q8.scale.setTo(0.3, 0.3); 
        q8.key = 8;

	    var q9 = questions.create(8300, 550, 'question');
        q9.scale.setTo(0.3, 0.3); 
        q9.key = 9;

        questions.setAll('body.allowGravity', false);


        //Añadiendo grupo de obstáculos
        obstacles = game.add.group();
        obstacles.position.x = currentPosition*3;
	    obstacles.physicsBodyType = Phaser.Physics.ARCADE;

		obstacles.enableBody = true;

	    var obst1 = obstacles.create(700, 680, 'radiactive');
        obst1.scale.setTo(0.3, 0.3); 

	    var obst2 = obstacles.create(1370, 550, 'radiactive');
        obst2.scale.setTo(0.3, 0.3); 

	    var obst3 = obstacles.create(2170, 680, 'radiactive');
        obst3.scale.setTo(0.3, 0.3); 

        var obst4 = obstacles.create(3570, 680, 'radiactive');
        obst4.scale.setTo(0.3, 0.3); 

	    var obst5 = obstacles.create(4370, 550, 'radiactive');
        obst5.scale.setTo(0.3, 0.3); 

	    var obst6 = obstacles.create(5300, 680, 'radiactive');
        obst6.scale.setTo(0.3, 0.3); 

        var obst7 = obstacles.create(6570, 550, 'radiactive');
        obst7.scale.setTo(0.3, 0.3); 

	    var obst8 = obstacles.create(7500, 680, 'radiactive');
        obst8.scale.setTo(0.3, 0.3); 

	    var obst9 = obstacles.create(8170, 680, 'radiactive');
        obst9.scale.setTo(0.3, 0.3); 

        var obst10 = obstacles.create(2870, 640, 'radiactive');
        obst10.scale.setTo(0.3, 0.3); 

	    var obst11 = obstacles.create(5870, 680, 'radiactive');
        obst11.scale.setTo(0.3, 0.3); 

	    var obst12 = obstacles.create(8870, 680, 'radiactive');
        obst12.scale.setTo(0.3, 0.3); 

        var obst13 = obstacles.create(3240, 680, 'radiactive');
        obst13.scale.setTo(0.3, 0.3); 

	    var obst14 = obstacles.create(6240, 640, 'radiactive');
        obst14.scale.setTo(0.3, 0.3); 

	    var obst15 = obstacles.create(9240, 680, 'radiactive');
        obst15.scale.setTo(0.3, 0.3); 

        obstacles.setAll('body.allowGravity', false);

		//grupo de checkpoints
        checkpoints = game.add.group();
	    checkpoints.physicsBodyType = Phaser.Physics.ARCADE;
		checkpoints.enableBody = true;
		checkpoints.position.x = currentPosition*3;

	    var ch1 = checkpoints.create(3000, 680, 'checkpoint');
        ch1.scale.setTo(0.3, 0.3); 
        ch1.key = 2;

	    var ch1 = checkpoints.create(6000, 680, 'checkpoint');
        ch1.scale.setTo(0.3, 0.3); 
        ch1.key = 3;

	    var ch1 = checkpoints.create(9000, 680, 'checkpoint');
        ch1.scale.setTo(0.3, 0.3); 
        ch1.key = 4;

		checkpoints.setAll('body.allowGravity', false);

		//botón para regresar al menú
        var buttonExit = game.add.button(770, 50, "salir", this.goToBack, this);
        buttonExit.anchor.setTo(0.5);         
		buttonExit.scale.setTo(0.4, 0.4);   
        
        //Se añaden los botones joystick para moverse sobre el mapa
		var joystick1 = game.add.button(560, 650, "joystick", vacio, this); 
		joystick1.anchor.setTo(0.5);
        joystick1.rotation = 3.1416;
		joystick1.alpha = 0.7;   
        
		var joystick2 = game.add.button(720, 650, "joystick", vacio, this);
		joystick2.anchor.setTo(0.5);
		joystick2.alpha = 0.7;
        
		var joystick3 = game.add.button(640, 730, "joystick", vacio, this);
		joystick3.anchor.setTo(0.5);
        joystick3.rotation = 3.1416/2;
		joystick3.alpha = 0.7;
        
		var joystick4 = game.add.button(640, 570, "joystick", vacio, this);
		joystick4.anchor.setTo(0.5);
        joystick4.rotation = 3.1416*3/2;
		joystick4.alpha = 0.7;

		cursors = game.input.keyboard.createCursorKeys();
    	jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		
        //se añaden los eventos a cada botón (El evento onInputDown también detecta las pulsaciones en pantalals táctiles)
        buttonExit.events.onInputDown.add(this.goToBack);
        
        joystick1.events.onInputUp.add(function(){left=false; 
			joystick1.alpha = 0.6;});
        joystick1.events.onInputDown.add(function(){left=true;
			joystick1.alpha = 1;});
		
		
        joystick2.events.onInputUp.add(function(){right=false;
			joystick2.alpha = 0.6;});
        joystick2.events.onInputDown.add(function(){right=true;
			joystick2.alpha = 1;});
		
        joystick3.events.onInputUp.add(function(){down=false;
			joystick3.alpha = 0.6;});
        joystick3.events.onInputDown.add(function(){down=true;
			joystick3.alpha = 1;});
		
        joystick4.events.onInputUp.add(function(){up=false;
			joystick4.alpha = 0.6;});
        joystick4.events.onInputDown.add(function(){up=true;
			joystick4.alpha = 1;});
	},
	
	update: function(){ 
		
        //Se mueven los objetos del mapa a la dirección que el usuario indique
		
        if(!player.body.onFloor()){
        	if(cursors.right.isDown||right){
				this.derecha();
			}
        	if(cursors.left.isDown||left){
				this.izquierda();
			}
        
        }
		else if(jumpButton.isDown||up){
			player.body.velocity.y = -500;

	        if (facing == 'left')
	        {
		 		player.animations.play("jumpLeft");
	        }
	        else
	        {
		 		player.animations.play("jumpRight");
	        }
		}else if(cursors.right.isDown||right){
			this.derecha();
		 	player.animations.play("right");
		 	facing = 'right';
		}
		else if(cursors.left.isDown||left){	
			this.izquierda();
		 	player.animations.play("left");
		 	facing = 'left';
        }else{
	        player.animations.stop();

	        if (facing == 'left')
	        {
	            player.frame = 20;
	        }
	        else
	        {
	            player.frame = 21;
	        }

    	}
    	game.physics.arcade.overlap(player, questions, this.questionCollision, null, this);
    	game.physics.arcade.overlap(player, checkpoints, this.checkpointCollision, null, this);
    	game.physics.arcade.overlap(player, obstacles, this.obstacleCollision, null, this);
	},
    //funciones para mover los objetos del mapa
	 izquierda: function(){  
		 if (background.tilePosition.x < currentPosition){ 
	        background.tilePosition.x += 1;
            floor.position.x +=3;
            questions.position.x +=3;
            checkpoints.position.x +=3;
            obstacles.position.x +=3;
		 }
     },
	 derecha: function(){  
		 if (background.tilePosition.x > -3116){ 
	        background.tilePosition.x -= 1;
			floor.position.x -=3;
            questions.position.x -=3;
            checkpoints.position.x -=3;
            obstacles.position.x -=3;
		 }
	 },
    //función para volver al menu
    goToBack: function(){
    	currentPosition = background.tilePosition.x;
        game.state.start('menu');
    },
    questionCollision: function(player, question){
    	currentPosition = background.tilePosition.x-120;
    	currentQuestion = question.key-1;
    	question.kill();
        game.state.start('selectedView');
    },
    checkpointCollision: function(player, checkpoint){
    	level = checkpoint.key;
    	levelMessage.setText("Nivel: "+ level);
    	if(level == 4){
	        game.state.start('win');    	
	    }
    	
    },
    obstacleCollision: function(player, obstacle){
    	obstacle.kill();
    	lives--;
    	livesMessage.setText('Vidas: '+ lives);
    	if(lives<=0){
	        game.state.start('gameOver'); 
    	}
    	
    }

}

