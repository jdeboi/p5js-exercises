# Instructions  

Fill the 400x600 canvas with a composition **inspired by** Bauhaus design. See below for examples. 

Required:

* use **at least one** of each: circle, triangle, rectangle, line
* 5 colors (including black and white)

Optional:
* `text()` (see below)
* `arc()` (see below)

### Examples

![bauhaus poster](./assets/bauhaus/poster0.jpeg)

![bauhaus poster](./assets/bauhaus/poster1.jpeg)

![bauhaus poster](./assets/bauhaus/poster2.jpg)

![bauhaus poster](./assets/bauhaus/poster6.jpeg)

![bauhaus poster](./assets/bauhaus/poster3.jpeg)

![bauhaus poster](./assets/bauhaus/poster4.jpeg)

![bauhaus poster](./assets/bauhaus/poster5.jpeg)

![bauhaus poster](./assets/bauhaus/bauhaus.jpeg)

---
### (Optional) Arcs

![arc](assets/arcs.png)
```javascript
function draw() {
  /////// stroke arc
  strokeCap(SQUARE);
  noFill();
  strokeWeight(20);
  stroke(255, 0, 0);
  // x, y, r1, r2, startAng, endAng
  arc(100, 100, 100, 100, 0, 90);

  /////// filled arc
  noStroke(255, 0, 0);
  fill(0, 0, 255);
  // x, y, r1, r2, startAng, endAng
  arc(200, 100, 100, 100, 0, 90);
}
```

---

### (Optional) Typography

To add text to your sketch, first load a Bauhaus font. Add the following code to the top of your sketch (above `setup()`):

```javascript
let font;

function preload() {
  font = loadFont("assets/BAUHS93.ttf");
}
```

Your `setup()` should look like:

```javascript
function setup() {
  createCanvas(400, 600);

  // add these two lines
  angleMode(DEGREES);
  textFont(font, 40);
}
```


Now you can use `text()` in the `draw()` to display text:

```javascript
function draw() {
  background(255);
  fill(0);
  text("BAUHAUS", 100, 100);
}
```

![text](assets/text.png)