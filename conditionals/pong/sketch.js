let ballX = 0;
let ballY = 0;
const ballSpeed = 5;
let ballSpeedX = 0;
let ballSpeedY = 0;

const paddleSpeed = 5;
const paddleW = 10;
const paddleH = 60;
const paddleLeftX = 5;
const paddleRightX = 485;
let paddleLeftY = 10;
let paddleRightY = 5;

let player1Score = 0;
let player2Score = 0;

function setup() {
  createCanvas(500, 500);
  
  initializeBall();
}

function draw() {
  background(0);

  displayNet();
  displayScore(); 

  updateBallPosition();
  displayBall();
  
  updateRightPaddlePosition();
  updateLeftPaddlePosition();
  displayPaddles();

  if (player1Score >= 10) {
    background(0);
    text("Player 1 wins!", 100, 100);
    noLoop();
  }
  if (player2Score >= 10) {
    background(0);
    text("Player 2 wins!", 100, 100);
    noLoop();
  }
}

/////////////////////////////
// BALL
/////////////////////////////
function displayBall() {
  rect(ballX, ballY, 10);
}

function updateBallPosition() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;
  
  if (isBouncingTop()) {
    bounceY();
  }
  else if (isBouncingBottom()) {
    bounceY();
  }
  else if (isHittingLeftPaddle()) {
    bounceX();
  }
  else if (isHittingRightPaddle()) {
    bounceX();
  }  
  else if (isHittingLeftWall()) {
    player2Score++;
    initializeBall();
  }
  else if (isHittingRightWall()) {
    player1Score++;
    initializeBall();
  }
}

function isBouncingTop() {
  return ballY < 0;
}

function isBouncingBottom() {
  return ballY > height;
}

function isHittingLeftPaddle() {
  if (ballX >= paddleLeftX && ballX <= paddleLeftX + paddleW && ballY >= paddleLeftY && ballY <= paddleLeftY + paddleH) {
    return true;
  }
  return false;
}

function isHittingRightPaddle() {
  if (ballX >= paddleRightX && ballX <= paddleRightX + paddleW && ballY >= paddleRightY && ballY <= paddleRightY + paddleH) {
    return true;
  }
  return false;
}

function isHittingLeftWall() {
  return ballX < 0;
}

function isHittingRightWall() {
  return ballX > width;
}

// no need to edit
function takeStepBack() {
  ballX -= ballSpeedX;
  ballY -= ballSpeedY;
}

// no need to edit
function bounceX() {
  takeStepBack();
  ballSpeedX *= -1;
}

// no need to edit
function bounceY() {
  takeStepBack();
  ballSpeedY *= -1;
}


// no need to edit
function initializeBall() {
  ballX = width / 2;
  ballY = height / 2;
  let ballDirection = random([-1, 1]);
  angleMode(DEGREES);
  let ballTheta = random(-45, 45);
  ballSpeedX = ballDirection* ballSpeed * cos(ballTheta);
  ballSpeedY = ballSpeed * sin(ballTheta);
}

/////////////////////////////
// PADDLES
/////////////////////////////
function displayPaddles() {
  fill(255);
  rect(paddleLeftX, paddleLeftY, paddleW, paddleH);
  rect(paddleRightX, paddleRightY, paddleW, paddleH);
}

function updateRightPaddlePosition() {
  if (keyIsDown(UP_ARROW)) {
    paddleLeftY -= paddleSpeed;
    if (paddleLeftY < 0) {
      paddleLeftY = 0;
    }
  }
  else if (keyIsDown(DOWN_ARROW)) {
    paddleLeftY += paddleSpeed;
    if (paddleLeftY > height - paddleH) {
      paddleLeftY = height - paddleH;
    }
  }
}

function updateLeftPaddlePosition() {
  paddleRightY = constrain(mouseY, 0, height-paddleH);
}

// no need to edit
function displayNet() {
  for (let i = 0; i < height; i += 20) {
    rect(width / 2 - 5, i, 10);
  }
}

function displayScore() {
  textSize(18);
  text("Player 1 \n" + player1Score, 100, 20);
  text("Player 2 \n" + player2Score, 300, 20);
}