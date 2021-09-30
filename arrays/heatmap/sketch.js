let grades = [];
  
  function setup() {
    createCanvas(500, 500);
  
    for (let i = 0; i < 4; i++) {
      grades[i] = [];
      for (let j = 0; j < 10; j++) {
        grades[i].push(random(60, 100));
      }
    }
  }
  
  function draw() {
    displayHeatMap();
  }
  
  function displayHeatMap() {
    let r = color(255, 0, 0);
    let g = color(0, 255, 0);
    for (let i = 0; i < grades.length; i++) {
      for (let j = 0; j < grades[0].length; j++) {
        let per = map(grades[i][j], 60, 100, 0, 1);
        let col = lerpColor(r, g, per);
        fill(col);
        let w = 40;
        rect(j*w, i*w, w);
      }
    }
  }