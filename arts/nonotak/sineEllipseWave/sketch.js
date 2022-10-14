// let dx = 0;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0, 10);
  // bounceLines();
  // bounceGrid();
  // sinEllipseWave();
  sinLineWave();
}

function sinEllipseWave() {
  let amplitude = 150;
  let period = millis() / 1000;
  for (let x = 0; x < width; x += 10) {
    let phase = x/50;
    let dy = amplitude * sin(period + phase);

    fill(255);
    stroke(255);
    ellipse(x, height/2 +dy, 5);
  }
}

function sinLineWave() {
  let h = 100;
  let y = height / 2 - h / 2;
  let amp = h;
  
  stroke(255);
  for (let i = 0; i < width; i += 20) {
    
    let dy = amp / 2 * sin(millis() / 1000+i/20);
    
    line(i, dy + y, i, dy + y + h)
  }
}

function bounceLines() {
  let amp = 50;
  let dx = amp + amp / 2 * sin(millis() / 2000);
  for (let y = 0; y < 100; y++) {
    stroke(255);
    strokeWeight(y);
    line(0, y * dx, width, y * dx);
  }
}

function bounceGrid() {
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