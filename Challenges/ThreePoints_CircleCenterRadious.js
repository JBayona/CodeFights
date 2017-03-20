/*
For any given triangle, a circle can be circumscribed around it: 
 
Given the three (x, y) coordinates of a triangle, find the (x, y) coordinates of the center of the circumscribed circle and its radius.

It is guaranteed that all tests have an integer solution.

Example

For

triangle = [[3,2],
            [1,4],
            [5,4]]
the output should be
circumcircle(triangle) = [3, 4, 2].

The circumscribed circle is centered at (3, 4) and has a radius of 2. */

//JS

function circumcircle(triangle) {
    a = triangle[0];
    b = triangle[1];
    c = triangle[2];
    a = { x: a[0], y: a[1]};
    b = { x: b[0], y: b[1]};
    c = { x: c[0], y: c[1]};

    //line between a and b: s1 + k * d1
    s1 = {x:(a.x + b.x)/2.0, y:(a.y + b.y)/2}
    d1 = {x:b.y - a.y, y: a.x - b.x}
    //line between a and c: s2 + k * d2
    s2 = {x: (a.x + c.x)/2.0, y: (a.y + c.y)/2}
    d2 = {x: c.y - a.y, y: a.x - c.x}
    //intersection of both lines:
    //s1 + k * d1 == s2 + l * d2
    l = d1.x * (s2.y - s1.y) - d1.y * (s2.x - s1.x)
    l = l / (d2.x * d1.y - d2.y * d1.x)
    m = {x: s2.x + l * d2.x, y: s2.y + l * d2.y}
    dx = m.x - a.x
    dy = m.y - a.y
    r = Math.sqrt(dx * dx + dy * dy)
    return [m.x, m.y, r]
}

var triangle = [[1,4], 
 [-2,3], 
 [5,2]]
console.log(circumcircle(triangle));