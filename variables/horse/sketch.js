let x = 0; 
let y = 0;

function setup() {
	createCanvas(500, 500);
}

function draw() {
  background(255);
 
  textSize(200);
  x = x *.95 + mouseX*.05;
  y = y *.95 + mouseY*.05;
  text('🐎 ', x+20, y+100);

  textSize(80);
  text('🥕', mouseX, mouseY);

}

// function eye() {
//   strokeWeight(2);
//   stroke(0);

//   // white eye
//   fill(255);
//   ellipse(200, 200, 200, 100);
  
//   // iris
//   fill(eyeC);
//   ellipse(200, 200, 100);
  
//   // pupil
//   fill(0)
//   ellipse(200, 200, 20);
// }

// function mousePressed() {
//   eyeC = color(255, 0, 0);
// }

// drawEyes(100, 100, 200, 100)
  // drawEyes(350, 100, 200, 100)

  
// function drawEyes(x, 200, 200y, w, h) {
//   // outer eye
//   strokeWeight(2);
//   stroke(0);
//   fill(255);
//   ellipse(200, 200, w, h);
  
//   // iris
//   fill('brown');
//   ellipse(200, 200, h);
  
//   // pupil
//   fill(0)
//   ellipse(200, 200, 20);

// }