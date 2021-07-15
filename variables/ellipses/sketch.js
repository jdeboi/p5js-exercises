
function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
  }
  
  function draw() {
    background(200);


    let diamX = map(mouseX, 0, width, width, 0);
    let diamY = map(mouseY, 0, height, height, 0);
    noStroke();
    fill(255, 0, 255);
    rect(width/2, height/2, diamX, diamY);
    fill(0, 0, 255);
    ellipse(width/2, height/2, diamX, diamY);

  }
  