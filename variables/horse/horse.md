# Instructions

Our objective is to get the horse to follow the carrot [like this example](). To give an illusion of chasing, we're going to use the idea of a **moving average**. 

1. Make the carrot move with the mouse.
2. Create two variables at the top of your sketch for the horse - `x` and `y` and initialize them to 0 and use them to display the horse.
3. To make the horse loosely follow the carrot, every time the `draw()` runs, set the horse's `x` value to be 95% its current value, plus 5% of the x coordinate where you would like the horse to go.

4. Repeat this step with the `y` value.