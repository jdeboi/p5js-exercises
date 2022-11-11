
function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 255);
}

function draw() {
  background(255);
  noStroke();

  let w = 12*30;
  for (let i = 0; i < 12; i++) {
    fill((i*25+frameCount)%255, 200, 255);
    rect(i*30+(width-w)/2,(height-350)/2, 30, 350 );
  }
  // fill(lerpColor(startCol, endCol, 0));
  // ellipse(width/2, height/2, 300, 600);


}


