


function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(255);
    pairOfEyes(200, 200, 'blue');
    pairOfEyes(250, 300, 'brown');
    pairOfEyes(300, 400, 'green');
}
function pairOfEyes(x, y, eyeColor) {
    eye(x, y, eyeColor);
    eye(x + 125, y, eyeColor);
}

function eye(x, y, eyeColor) {
    fill(255);
    ellipse(x, y, 100, 50);

    // iris
    fill(eyeColor);
    ellipse(x, y, 50);

    // pupil
    fill(0);
    ellipse(x, y, 10);

    fill(255);
    stroke(0);
    ellipse(x, y, 100, 25 + 25 * sin(millis() / 100))
    arc(x, y, 100, 50, PI, 0);
}