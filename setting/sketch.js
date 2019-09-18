/*
	setting sketch
	9.11.2019
	
*/

// character variables
var x = 200;
var y = 100;
var faceSize = 200;
var eyeSize = 30;
var eyeOffset = 50;
var c = 'pink'; // color
var greeting = '';

// second character -- kim
var kimX = 700;
var kimY = 200;
var kimSize = 200;
var kimColor = '#fffdd1';
var kimGreeting = '';



var story1 = "Dandrea and Kim were in some weird places.";

var scene ="city";


function setup() {
	createCanvas(windowWidth, 600);
//    scene = random(["city" , "forest", "ocean"]);
    
}
    

 
     function mousePressed() {
	if (scene == "city") {
		scene = "forest";
	} else if (scene == "forest") {
		scene = "ocean";
	} else if (scene == "ocean") {
		scene = "city";	
	}
}
  
function draw() {
	// set the setting
	if (scene == "city") {
		background('orange');
		
		/* city scene */
		fill('black');
		for (let x = 0; x < width; x += 30) {
			ellipse(x, 20 + random(200), 40, height - 50);
		}
		
	} else if (scene == "forest") {
		background("gray");
		
		/* forest scene */
		fill('#000033');
		noStroke();
		
		for (let x = 0; x < width; x += 25) {
			circle(
				x, 100 + random(100),
				x + 50, 600,
				x - 50, 600
			);	
		}
		fill('gray');
		circle(width - 100, 100, 100);
		
	} else if (scene == "ocean") {
		background("pink");
		
		/* ocean scene */
		stroke('blue');
		for (let x = 0; x < width; x += 100) {
			let y = random(height);
			noFill();
			beginShape();
			curveVertex(x - 100, y + 100);
			curveVertex(x, y);
			curveVertex(x + 100, y);
			curveVertex(x + 100, y + 50);
			curveVertex(x, y);
			curveVertex(x - 100, y);
			endShape();
			
			ellipse(x + 100, y, 20);
			fill('blue');
			ellipse(x + 100, y, 10);
		}
	}
 
    
	
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


