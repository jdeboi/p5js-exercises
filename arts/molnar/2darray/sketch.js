
function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  noFill();
}

function draw() {

  for (let x = 0; x < 15; x++) {
    for (let y = 0; y < 15; y++) {
        s = random(40);
        stroke(random(255), random(255), random(255));

        rect(x*50+20, y*50+20, s);

    }
  }
}
