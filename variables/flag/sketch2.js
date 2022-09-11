let w = 200;
let h = w * 2 / 3;
let x = 100;
let y = 100;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);
  let w = mouseX - x;
  let h = w * 2 / 3;

  if (mouseIsPressed) {
    h = mouseY - y;
  }
  // flag code
  fill('blue');
  rect(x, y, w / 3, h);
  fill('white');
  rect(x + w / 3, y, w / 3, h);
  fill('red');
  rect(x + 2 * w / 3, y, w / 3, h);


  // x++;
  // y++;

}