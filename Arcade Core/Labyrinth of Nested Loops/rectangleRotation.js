/*
 rectangle with sides equal to even integers a and b is drawn on the Cartesian plane. Its center (the intersection point of its diagonals) coincides with the point (0, 0), but the sides of the rectangle are not parallel to the axes; instead, they are forming 45 degree angles with the axes.

How many points with integer coordinates are located inside the given rectangle (including on its sides)?

Example

For a = 6 and b = 4, the output should be
rectangleRotation(a, b) = 23.

The following picture illustrates the example, and the 23 points are marked green.



https://codefights.com/arcade/code-arcade/labyrinth-of-nested-loops/tuKA5f3zpzkKKejJx
*/

function rectangleRotation(A, B) {
  var c = 0;
  
  for (var i=-A-B; i<=A+B; i++) {
    for (var j=-A-B; j<=A+B; j++) {
      if (Math.abs(i+j)*Math.sqrt(2) <= A && Math.abs(i-j)*Math.sqrt(2) <= B) c++;
    }
  }
  
  return c;
}

a = 6;
b = 4
console.log(rectangleRotation(a,b));