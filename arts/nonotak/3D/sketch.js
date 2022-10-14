
function setup() {
  createCanvas(500, 500, WEBGL);
  rectMode(CENTER);
}

function draw() {
  background(0, 10);
  
  oscillatingTunnel();
  
}

function oscillatingTunnel() {
  for (let z = 0; z < 1000; z += 10) {
    push();
    translate(width/4*sin(millis()/2000), 0, z);
    noFill();
    stroke(255);
    rect(0, 0, 100);
    // sphere(70);
    pop();
  }
}