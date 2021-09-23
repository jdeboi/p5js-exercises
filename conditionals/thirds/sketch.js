
var x = 0;
var y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // if (mouseX > width/3 && mouseX < width/3*2) {
  //   background(0, 255, 255);
  //   text("middle 3rd", width/2-50, height/2);
  // }
  // else {
  //   background(255, 0, 255);
  //   text("outside thirds", width/2-50, height/2);
  // }

  textSize(30);

  if (mouseX < width/3 || mouseX > width/3*2) {
    background(255, 0, 255);
    text("outside thirds", width/2-50, height/2);
  }
  else {
    background(0, 255, 255);
    text("middle 3rd", width/2-50, height/2);

  }
}
