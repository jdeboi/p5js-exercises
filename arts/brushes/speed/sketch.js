
function setup() {
  createCanvas(500, 500);
  background(0, 0, 255);
}

function draw() {
  background(0, 0, 255, 4);
  textSize(50);
  noStroke();

  let mouseSpeed = dist(mouseX, mouseY, pmouseX, pmouseY)*2;
  fill(255, mouseSpeed, 0);


  ellipse(mouseX, mouseY, mouseSpeed);

}

