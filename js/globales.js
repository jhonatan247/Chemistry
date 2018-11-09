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
var currentQuestionCoin = 0;
var currentPosition = 0;


var gameQuestions = [
	[
		'¿En qué grupo de la tabla periódica se encuentra el elemento Fe (Hierro)?',
		'¿Cuántos grupos hay en la tabla periódica?',
		'¿Quién creó la tabla periódica?'
	],
	[
		'¿Cuál de los siguientes elementos pertenece a la familia de los alcalinos térreos?',
		'¿Cual es el numero atomico del cloro (Cl)?',
		'¿En que grupo de la tabla periodica esta el oro (Au)?',
		'¿Cuantos elementos ay en la tabla periodica?'
	],
	[
		'¿Cual es el numero atomico del calcio (Ca)?',
		'¿En que año se creo la tabla periodica?',
		'¿Cuantos periodos tiene la tabla periodica?'
	],

	[
		'¿quien creo la estequiometria?',
		'¿Complete la siguente reaccion de descomposicion, con el producto faltante PbCO3=PbO + () ?',
		'¿La ecuacion siguiente presenta una reaccion de?'
	],
	[
		'¿Cual de las siguientes ecuaciones representa una reaccion de descomposicion?',
		'¿Una ecuacion quimica balanceada contiene informacion:?',
		'¿El nucleo atomico esta constituido por:?'
	],
	[
		'¿Cuál de las siguentes respuestas balancea la ecuación Sn+HCl--SnCl2+H2?',
		'¿Cuál de las siguentes respuestas balancea la ecuación Cl2O+H2O--HClO?',
		'¿Cuál de las siguentes respuestas balancea la ecuación CS2+O2--CO2+SO2?'
	],


	[
		'¿Que es una disolución?',
		'¿Como se diferencian las disoluciones según su capacidad para disolver un soluto?',
		'¿Cual es el prefijo del numero 5 en la quimica organica?'
	],
	[
		'¿Quien creo la quimica organica?',
		'¿Cual es el prefijo del numero 13 en la quimica organica?'
	],
	[
		'¿Qué estudia la química orgánica?',
		'¿Cuál es el prefijo del número 1 en la química orgánica?',
		'¿Cuál es el prefijo del número 20 en la química orgánica?'
	]
];
var gameAnswers =  [
	[
		['3','5','8','1'],
		['7','21', '19', '18'],
		['Albert Einstein','Arquimedes de Siracusa', 'Dmitri Mendeleyeu', 'Jhon Dalton']
	],
	[
		['Na','Fe','S','Ba'],
		['7','5', '17', '14'],
		['17','11', '15', '6'],
		['118','114', '111', '105']
	],
	[
		['24','20','27','18'],
		['1891','1939', '1914', '1869'],
		['8','5', '7', '10']
	],

	[
		['Jeremías Benjamín Richter','Friedrich Wöhler','Dmitri Mendeléyev','Charles Darwin'],
		['H2O','CO2', 'CO', 'C'],
		['Descomposicion','Oxidacion y Redccion', 'Combinacion', 'Ninguna de las anteriores']
	],
	[
		['A+B=D','A+B=C','A+B=C+D','C=A+B'],
		['Solo cualitativa','Cualitativa y Cuantitativa', 'Solo Cuantitativa', 'Solo descriptiva'],
		['Protones y Electrones','Neutrones', ' Protones y Neutrones', 'Solo Neutrones']
	],
	[
		['1,3,2,2', '1,2,2,2', '3,4,2,2', '1,1,2,2'],
		['2,3,2', '1,1,2', '1,2,1', '1,4,3'],
		['2,5,1,3','1,3,1,2', '2,2,1,1', '1,3,2,2']
	],

	[
		['Es una mezcla heterogenea de dos o mas sustancias','Es la separacion de 2 o mas mezclas heterogeneas','Es una mezcla de acidos e hidrogenos','Es una mezcla homogénea de dos o mas sustancias'],
		['Disolucion neutra ','Segun el tipo de mezcla que nos expongan', 'Disolucion saturada e insaturada', 'Segun su contenido de alcohol'],
		['propa','buta', 'eta', 'penta']
	],
	[
		['Albert Einstein','Friedrich Wöhler','Thomas Edison','Charles Darwin'],
		['freedeca','trideca', 'treedeca', 'tresdeca']
	],
	[
		['Se encarga del estudio del carbono y los compuestos que formen con otros elementos ','Se encarga del estudio de los seres vivos','Se encarga del estudio de los reacciones ','Ningúna de las anteriores'],
		['Propa','Eta','Meta','Buta'],
		['Penta','Buta','Propa','Eico']
	]
];
var gameCorrects = [
	[2,3,2],
	[3,2,1,0],
	[1,3,2],

	[0,1,2],
	[3,1,2],
	[2,1,1],

	[3,2,3],
	[1,1],
	[0,2,3]
];


var cursors;
var jumpButton;
var questions;
var obstacles;

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
