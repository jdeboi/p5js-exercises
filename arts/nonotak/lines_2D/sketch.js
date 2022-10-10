// let dx = 0;
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0, 10);
    bounce();
}

function bounce() {
    let amp = 50;
    let dx = amp + amp / 2 * sin(millis() / 2000);
    // dx+=.2;
    // dx %= 200;
    stroke(255);
    for (let x = 0; x < 50; x++) {
        strokeWeight(x);
        line(x * dx, 0, x * dx, height);
    }
    for (let y = 0; y < 50; y++) {
        strokeWeight(y);
        line(0, y * dx, width, y * dx);
    }

}