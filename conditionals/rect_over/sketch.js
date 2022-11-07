let x = 100;
let y = 100;
const w = 200;
const h = 50;

function setup() {
  createCanvas(500, 500);
  background(255);

  x = width/2 - w/2;
  y = height/2 - h/2;
}

function draw() {
textSize(20);
  if (insideRectangle()) {
    
    fill('red');
    rect(x, y, w, h);
    fill(0);
    text("ON", x + w/2 - textWidth("ON")/2, y+h*.6);
  }
  else {
    fill('blue');
    rect(x, y, w, h);
    fill(0);
    text("OFF", x + w/2 - textWidth("OFF")/2, y+h*.6);
  }
  

}

function insideRectangle() {
    if (mouseX > x && mouseX < x+w && mouseY > y && mouseY < y+h) {
        return true;
    }
  return false;
}