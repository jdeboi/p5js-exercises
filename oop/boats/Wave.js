class Wave {
    constructor() {
      this.x = random(width);
      this.y = random(height);
    }
  
    display() {
      let x = this.x + 5 * sin(millis() / 300 + this.y);
      let y = this.y + 5 * sin(millis() / 300);
      textSize(14);
      text('🌊', x, y);
    }
  
  }