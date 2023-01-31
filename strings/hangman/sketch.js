let gameStatus = "PLAYING";
let secretWord = "";
let guessed = "";
let wrongLetters = "";


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  secretWord = random(["hello", "world"]);
  initGuessedWord();
  console.log(guessed);

  textSize(18);
}

function draw() {
  if (gameStatus == "LOST") {
    background(0);
    fill(255);
    text("GAME OVER", 30, 30);
  }
  else if (gameStatus == "WON") {
    background(0);
    fill(255);
    text("YOU WIN", 30, 30);
  }
  else {
    drawHangMan(wrongLetters.length);
    displaySecretsecretWord();
    displayWrongGuesses();
  }
}

function keyPressed() {
  checkGuess(key);
}

function checkGuess(letter) {
  let index = secretWord.indexOf(letter);
   if (index > -1) {
     guessed = getGuessedWord(letter);
     if (guessed == secretWord) {
       gameStatus = "WON";
     }
   } 
  else if (wrongLetters.indexOf(letter) == -1) {
    wrongLetters += letter;
    if (wrongLetters.length == 7) {
      gameStatus = "LOST";
    }
  }
  
}

function getGuessedWord(letter) {
  let w = "";
  for (let i = 0; i < secretWord.length; i++) {
    if (guessed[i] != "_") {
      w += guessed[i];
    }
    else if (secretWord[i] == letter) {
      w += letter;
    }
    else {
      w += "_"
    }
  }
  return w;
}

function displaySecretsecretWord() {
  fill('black');
  push();
  translate(50, 450);
  for (let i = 0; i < guessed.length; i++) {
    text(guessed[i], i*30, 0);
  }
  pop();
}

function displayWrongGuesses() {
  fill('red');
  text(wrongLetters, 100, 500, 300);
}

function initGuessedWord() {
  guessed= "";
  for (let i = 0; i < secretWord.length; i++) {
    guessed += "_";
  }
}
//////////////
// no need to edit
function drawHangMan(step) {
  fill('white');
  push();
  translate(100, 50);
  if (step > 0) {
    // horizontal base line
    line(0, 300, 200, 300);
  // }
  // if (step > 1) {
    // vertical line
    line(0, 300, 0, 0);
  // }
  // if (step > 2) {
    // top line
    line(0, 0, 150, 0);
    // diagonal
    line(0, 50, 50, 0);
  }
  if (step > 1) {
    translate(100, 70);
    // head
    line(0, -70, 0, 25);
    ellipse(0, 0, 50);
  }
  if (step > 2) {
     // body
    line(0, 25, 0, 100);
  }
  if (step > 3) {
    // left leg
    line(0, 100, -25, 150);
  }
 if (step > 4) {
    // right leg
    line(0, 100, 25, 150);
 }
  if (step > 5) {
    // left arm
    line(0, 70, -25, 50);
  }
  if (step > 6) {
    // right arm
    line(0, 70, 25, 50);
  }
  pop();
}