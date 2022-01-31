
function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {

  if (mouseIsPressed) {
    console.log("PRESSED " + frameCount);
    noStroke()
    fill(random(255), random(255), random(255));
    ellipse(mouseX, mouseY, random(5, 50));

  }

  if (keyIsDown(32)) {
    console.log("SPACE PRESSED " + frameCount);
    fill(255);
    ellipse(mouseX, mouseY, 50);
  }


}
