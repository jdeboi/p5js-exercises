// let dx = 0;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0, 10);
  let amp = 50;
  let dx = amp + amp / 2 * sin(millis() / 2000);
  for (let y = 0; y < 100; y++) {
    stroke(255);
    strokeWeight(y);
    line(0, y * dx, width, y * dx);
  }
}

function bounce() {
  let amp = 50;
  let dx = amp + amp / 2 * sin(millis() / 2000);
  // dx+=.2;
  // dx %= 200;
  stroke(255);
  for (let x = 0; x < 50; x++) {
    strokeWeight(x);
    line(x * dx, 0, x * dx, height);
  }
  for (let y = 0; y < 50; y++) {
    strokeWeight(y);
    line(0, y * dx, width, y * dx);
  }

}