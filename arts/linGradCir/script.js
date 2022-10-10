let col1, col2, col3, col4;
let colors;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  col1 = color('red');
  col2 = color('yellow');
  col3 = color('blue');
  col4 = color('green');
  
  colors = [col1, col2, col3, col4, col3, col2, col1];
}

function draw() {
  background(255);
  drawCircleLines(200, 1);
};


function drawCircleLines(radius, spacing) {
  translate(width/2, height/2);
  for (let x = -radius; x < radius; x+= spacing) {
    let angle = acos(x/radius);
    let y1 = -radius*sin(angle);
    let y2 = radius*sin(angle);

    let per = map(x, -radius, radius, 0, 1);
    let c = lerpColor(col1, col2, per);
    stroke(c);
    line(x, y1, x, y2);
  }
}