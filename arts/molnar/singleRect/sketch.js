
function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  noFill();
}

function draw() {

  let s = random(200);
  stroke(random(255), random(255), random(255));
  rect(width/2, height/2, s);
  
}