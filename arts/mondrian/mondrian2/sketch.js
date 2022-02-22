
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  strokeWeight(10);

  fill('red');
  rect(0, 0, mouseX, mouseY/2);

  fill('blue');
  rect(0, mouseY/2, mouseX, mouseY/2);

  fill('white');
  rect(mouseX, 0, width-mouseX, mouseY);

  fill('yellow');
  rect(0, mouseY, width, height-mouseY);
  
}