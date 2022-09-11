
function setup() {
  createCanvas(500, 500);
}

function draw() {
  let col1 = color('red');
  let col2 = color('yellow');
  let val = map(constrain(mouseX, 0, width), 0, width, 0, 1);
  let col = lerpColor(col1, col2, val);
  background(col);
}
