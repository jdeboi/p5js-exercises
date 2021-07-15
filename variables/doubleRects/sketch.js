
function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(200);

    fill(255, 0, 0);
    rect(0, 0, mouseX, mouseY);
    rect(mouseX, mouseY, width-mouseX, height-mouseY);

    fill(0, 0, 255);
    triangle(0, mouseY, mouseX/2, 0,  mouseX, mouseY);
    triangle(mouseX, mouseY, mouseX + (width-mouseX)/2, height,  width, mouseY);
    

    // line(mouseX/2, mouseY, mouseX/2, mouseY+20);
    // text(mouseX, mouseX/2, mouseY-5);
    
    // line(mouseX + (width-mouseX)/2, mouseY, mouseX + (width-mouseX)/2, mouseY+20)
    // text(width-mouseX, mouseX + (width-mouseX)/2, mouseY-5);
  }
  