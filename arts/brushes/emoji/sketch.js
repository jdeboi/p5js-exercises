let emoji = '🔥';

function setup() {
  createCanvas(500, 500);
  
}

function draw() {
  background(0, 0, 255, 5);
  if (mouseIsPressed) {
    let mouseSpeed = dist(mouseX, mouseY, pmouseX, pmouseY)*2;
 
    textSize(mouseSpeed);
    text(emoji, mouseX, mouseY);
  }

}

function keyPressed() {
  
  if (key == 'a') {
    emoji = '🌹';
  }
  else if (key == 's') {
    emoji = '🔥'
  }
  else if (key == 'd') {
    emoji = '🍏'
  }
  else if (key == 'f') {
    emoji = '💎'
  }
  else if (key == 'g') {
    emoji = '💜'
  }
}