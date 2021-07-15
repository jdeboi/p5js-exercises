
function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    let g = map(mouseY, 0, height, 0, 255);
    background(255, g, 0);
    rect(mouseX, 0, mouseY/2, height);


  }
  