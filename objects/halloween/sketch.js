const graveyard = {
    display: function(rows, cols) {
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          textSize(30);
          text('🪦', c*60, r*60+40);
        }
      }
    },
    ghostHaunt: function() {
      textSize(random(30,100));
      text('👻', random(width), random(height));
    }
  }
  
  function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    background(0, 30);
    graveyard.display(10, 12);
  
    if (mouseIsPressed) {
      graveyard.ghostHaunt();
    }
    
  }