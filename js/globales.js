//Variables globales de la aplicación
var background;
var player;
var floor;
var points = 0;
var pointsMessage;
var level = 1;
var lives = 3;
var livesMessage;
var currentQuestion = 0;

var currentPosition = 0;


var gameQuestions = [
	'¿Cuál es el número atómico del hodrógeno?', 
	'¿En qué grupo de la tabla periódica se encuentra el elemento Fe (Hierro)?',
	'¿Cuántos grupos hay en la tabla periódica?',
	'¿Quién creó la tabla periódica?',
	'¿Cuál de las siguentes respuestas balancea la ecuación Sn+HCl--SnCl2+H2?',
	'¿Cuál de las siguentes respuestas balancea la ecuación Na+Cl2--NaCl?',
	'¿Cuál de las siguentes respuestas balancea la ecuación Cl2O+H2O--HClO?',
	'¿Cuál de las siguentes respuestas balancea la ecuación CS2+O2--CO2+SO2?',
	'¿Qué estudia la química orgánica?',
	'¿Cuál es el prefijo del número 1 en la química orgánica?',
	'¿Cuál es el prefijo del número 20 en la química orgánica?'
];
var gameAnswers =  [
	['1','3', '25', 'Ningúna de las anteriores'],
	['3','5','8','1'],
	['7','21', '19', '18'],
	['Albert Einstein','Arquimedes de Siracusa', 'Dmitri Mendeleyeu', 'Jhon Dalton'],
	['1,3,2,2', '1,2,2,2', '3,4,2,2', '1,1,2,2'],
	['3,2,2', '1,1,1','2,1,2','2,3,1'],
	['2,3,2', '1,1,2', '1,2,1', '1,4,3'],
	['2,5,1,3','1,3,1,2', '2,2,1,1', '1,3,2,2'],
	['Se encarga del estudio del carbono y los compuestos que formen con otros elementos ','Se encarga del estudio de los seres vivos','Se encarga del estudio de los reacciones ','Ningúna de las anteriores'],
	['Propa','Eta','Meta','Buta'],
	['Penta','Buta','Propa','Eico']
];
var gameCorrects = [0,2,3,2,1,2,1,1,0,2,3];


var cursors;
var jumpButton;
var questions;

var checkpoints;

var facing = 'right';

var right = false;
var left = false;
var up = false;
var down = false;

var soundState=true;

var sound;

var inputDown = false;

var maxLengthTitulo =18;

//función de pausar o reanudar la música
function changeSound(btn){
    if(soundState){
        sound.pause();
        btn.alpha = 0.5;
    }else{
        sound.resume();
        btn.alpha = 1;
    }
    soundState = !soundState;
}
//función que no hace nada
function vacio(){}
