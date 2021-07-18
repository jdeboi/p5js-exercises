
let bieber, paparrazi;

let x = 100, y = 100;
let speed = 15;

function setup() {
  createCanvas(500, 500);

  bieber = loadImage("assets/bieber.png");
  paparrazi = loadImage("assets/paparrazi.jpeg");
}

function draw() {
  if (random() <.1) {
    background(255);
  }
  else background(paparrazi);
  image(bieber, x, y);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    y-=speed;
    if (y < 0) y = height;
  }
  else if (keyCode === DOWN_ARROW) {
    y+=speed;
    if (y > height) y = 0;
  }
  else if (keyCode === LEFT_ARROW) {
    x-=speed;
    if (x < 0) x = width
  }
  else if (keyCode === RIGHT_ARROW) {
    x+=speed;
    if (x > width) x = 0;
  }
}