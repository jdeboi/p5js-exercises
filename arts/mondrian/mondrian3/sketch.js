
function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    background(0);
    
    strokeWeight(10);
  
    let cw1 = mouseX;
    let cw2 = width-mouseX;
    let cw3 = cw2/2;
    fill('red');
    rect(0, 0, mouseX, mouseY/2);
    fill('white');
    rect(0, mouseY/2, cw1, mouseY/2)
    fill('blue');
    rect(0, mouseY, cw1, height-mouseY)
  
    fill('white');
    rect(mouseX, mouseY, cw3, height-mouseY);
  
    fill('yellow');
    rect(mouseX+cw3, mouseY, cw3, height-mouseY);
  
    fill('white');
    rect(cw1, 0, cw2, mouseY);
  }