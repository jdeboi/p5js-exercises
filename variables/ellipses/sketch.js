
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 20);
  
  fill(255, 0, 0);
  ellipse(width/2, height/2, 100);
  line(mouseX, 0, mouseX, height);
  line(0, mouseY, width, mouseY);
}