/*
	story sketch
	9.5.2019
	owen roberts
	mmp 310
*/

// character variables
var x = 200;
var y = 100;
var faceSize = 200;
var eyeSize = 30;
var eyeOffset = 50;
var c = 'pink'; // color
var greeting = '"BONJOUR!"';

// second character -- kim
var kimX = 700;
var kimY = 200;
var kimSize = 200;
var kimColor = '#fffdd1';
var kimGreeting = '"Bonjour, comment allez-vous."';



var story1 = "Dandrea and Kim had a fun day at the beach.";

var bg;
function preload(){
    bg= loadImage('download.jpg');



}

function setup() {
	createCanvas(windowWidth, 600);
	image (bg,0,0, windowWidth,600);
    
	
    //Dandrea Character
	fill(c);
	ellipse(x, y, faceSize); // face
	fill('#cce0ff');
	stroke('white');
	strokeWeight(4);
	circle(x - eyeOffset, y - eyeOffset, eyeSize, eyeSize); // left eye
	circle(x + eyeOffset, y - eyeOffset, eyeSize, eyeSize); // right eye
	
	textSize(40);
	fill('black');
	noStroke();
	text(greeting, x + 100, y - 50);
    
    
    // kim character
	fill(kimColor);
	stroke('black');
	// face
	arc(kimX, kimY, kimSize, kimSize, PI, HALF_PI + HALF_PI, PIE);
	// left eye
	fill('#d1fdff');
	triangle(
		kimX - 50, kimY - 75, 
		kimX, kimY - 50, 
		kimX - 50, kimY - 25
	);
	
	// right eye
	quad(
		kimX + 30, kimY - 75, 
		kimX + 25, kimY - 25, 
		kimX + 75, kimY - 50, 
		
	);
		
	fill('black');
	noStroke();
	text(kimGreeting, kimX - 200, kimY + 150);
	
	
	textAlign(CENTER);
	text(story1, width/2, height - 50);
}


