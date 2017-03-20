/*
You are given 4 points on a Cartesian plane. Return true if these points form a square, and false otherwise.

Example

For

points = [0, 0, 
          0, 3,
          3, 3, 
          3, 0]
the output should be
Square_Check(points) = true.
*/

function Square_Check(points) {
  p1 = {x:points[0], y:points[1]};
  p2 = {x:points[2], y:points[3]};
  p3 = {x:points[4], y:points[5]};
  p4 = {x:points[6], y:points[7]};

  d2 = distSqr(p1, p2);  // from p1 to p2
  d3 = distSqr(p1, p3);  // from p1 to p3
  d4 = distSqr(p1, p4);  // from p1 to p4

  // If lengths if (p1, p2) and (p1, p3) are same, then
  // following conditions must met to form a square.
  // 1) Square of length of (p1, p4) is same as twice
  //    the square of (p1, p2)
  // 2) p4 is at same distance from p2 and p3
  if (d2 == d3 && 2*d2 == d4)
  {
      d = distSqr(p2, p4);
      return (d == distSqr(p3, p4) && d == d2);
  }

  // The below two cases are similar to above case
  if (d3 == d4 && 2*d3 == d2)
  {
      d = distSqr(p2, p3);
      return (d == distSqr(p2, p4) && d == d3);
  }
  if (d2 == d4 && 2*d2 == d3)
  {
      d = distSqr(p2, p3);
      return (d == distSqr(p3, p4) && d == d2);
  }

  return false;

}

//Distance between two points
distSqr = (p,q) => (p.x - q.x)*(p.x - q.x) + (p.y - q.y)*(p.y - q.y);

points = [-4, 4, -10, -5, 0, -7, 0, 1]
console.log(Square_Check(points))