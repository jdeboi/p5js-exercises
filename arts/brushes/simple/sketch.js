
function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
  background(0, 0, 255, 5);
  noStroke();
  fill(random(255), random(255), random(255));
  ellipse(mouseX, mouseY, 40);

}
