
function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
  let palette = ['red', 'turquoise', 'blue', 'purple'];
  fill(random(255), random(255), random(255));
  // background(0, 0, 255, 5);
  noStroke();
  // fill(255);
  ellipse(mouseX, mouseY, random(5, 50));

  // fill(255);
  ellipse(mouseX+random(-50, 50), mouseY+random(-50, 50), 5);
  
}
