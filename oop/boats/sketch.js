const boats = [];
const waves = [];

function setup() {
  createCanvas(500, 500);
 

  for (let i = 0; i < 10; i++) {
    boats.push(new Boat(i*20, i*20+200, -1));
    boats.push(new Boat(i*20, i*20+210, 1));
  }

  for (let i = 0; i < 30; i++) {
    waves.push(new Wave());
  }
}

function draw() {
  background('blue');

   for (const w of waves) {
    w.display();
  }
  
  for (const b of boats) {
   b.display();
   b.move();
  }

 
}
