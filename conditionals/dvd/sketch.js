let dvd;
let x = 0;
let y = 0;
let xSpeed = 1;
let ySpeed = 1;

function setup() {
  createCanvas(500, 500);
  dvd = loadImage("assets/dvd.png");
  x = random(200);
  y = random(200);
}

function draw() {
  background(255);

  image(dvd, x, y);
  
  move();
  bounce();
}

function bounce() {
  if (x > width - dvd.width) {

    xSpeed *= -1
  }
  else if (x < 0) {
    xSpeed *= -1;
  }

  if (y > height - dvd.height) {
    ySpeed *= -1;
  }
  else if (y < 0) {
    ySpeed *= -1;
  }
}

function move() {
  x += xSpeed;
  y += ySpeed;
}