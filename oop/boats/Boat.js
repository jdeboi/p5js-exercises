class Boat {

    constructor(x, y, direction) {
      this.x = x;
      this.startY = y;
      this.y = y;
  
      this.direction = direction;
    }
  
    display() {
      textSize(50);
  
      if (this.direction > 0) {
        push();
        translate(this.x, this.y);
        scale(-1, 1);
        text('⛵', 0, 0);
        pop();
      }
      else {
        text('⛵', this.x, this.y);
      }
    }
  
    move() {
      this.x += this.direction;
      this.y = this.startY + 10*sin(this.x/50);
  
      if (this.x > width) {
        this.x = 0;
      }
      else if (this.x < 0) {
        this.x = width;
      }
    }
  
    
  }