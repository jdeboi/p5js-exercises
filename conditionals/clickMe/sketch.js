

function setup() {
  createCanvas(500, 500);
}

function draw() {
  fill(0);
  if (!mouseIsPressed) {
    textSize(20);
    background(0, 255, 0);
    text("click me", 100, 240);
  }
  else {
    textSize(40);
    background(0, 255, 255);
    text("CLICKED!", 100, 240);
  }
}

