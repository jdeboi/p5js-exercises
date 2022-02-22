
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  
  strokeWeight(10);


  
  fill('red');
  rect(0, 0, mouseX, mouseY);

  fill('blue');
  rect(0, mouseY, mouseX, height-mouseY);


  fill('yellow');
  rect(mouseX, mouseY, width-mouseX, height-mouseY);

  fill('white');
  rect(mouseX, 0, width-mouseX, mouseY);
}