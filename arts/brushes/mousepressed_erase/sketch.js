
function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {

  if (mouseIsPressed) {
    noStroke()
    fill(random(255), random(255), random(255));
    ellipse(mouseX, mouseY, random(5, 50));

  }

  if (keyIsDown(8)) {
    fill(255);
    ellipse(mouseX, mouseY, 50);
  }


}
