let pChange = 0;
let startCol, endCol;

function setup() {
  createCanvas(windowWidth, windowHeight);

  randomizeCol();
}

function draw() {
  background(0);
  
  jamesTurrell(200, height/3, 5, 50, 100);
  jamesTurrell(500, height/3, 9, 30, 70);
}


function jamesTurrell(x, y, numCircles, wSp, hSp) {
  noStroke();
  // let startC = color(0, 255, 255);
  // let endC = color(255, 0, 0);
  // let x = width/2;
  // let y = height/2;
  for (let i = numCircles; i> 0; i--) {
    var percent = map(i, numCircles, 0, 1, 0); 
    let wrap = (percent+pChange)%2;
    if (wrap > 1) {
      var c = lerpColor(startCol, endCol, 2-wrap);
    }
    else {
      var c = lerpColor(startCol, endCol, wrap);
    }
   
    fill(c);
    ellipse(x, y+i*hSp/3, i*wSp, i*hSp)

  }

  pChange += .005;
}

function mousePressed() {
  randomizeCol();
}

function randomizeCol() {
  startCol = color(random(255), random(255), random(255));
  endCol = color(random(255), random(255), random(255));
}