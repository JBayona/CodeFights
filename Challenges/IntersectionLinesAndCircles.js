/*
You are given an array of lines. Each line is expressed as an array [m, b], which stands for the line defined by the equation y = m * x + b.

You are also given an array of circles. Each circle is expressed as an array [h, k, r], which represents the circle defined by the equation (x - h)2 + (y - k)2 = r2.

Let l_max be the maximum number of circles that a given line intersects. Let c_max be the maximum number of lines that intersect a given circle.

Of all possible values of l_max and c_max, return the largest one.

Example

For lines = [[1, 0], [-1, 0], [0, -2]] and
circles=[[0, 0, 1], [2, 2, 1], [4, 4, 1]],
the output should be
Intersections(lines, circles) = 3.

Line [1,0] intersects all three circles, while each circle is intersected by at most two lines.
*/


function Intersections(lines, circles) {
    var lmax = 0;
    var templmax = 0;
    var cmax = 0;
    var tempcmax = 0;
    var circle = {};
    for(var i = 0; i < lines.length; i++){
        m = lines[i][0];
        b = lines[i][1];
        for(var j  = 0; j < circles.length; j++){
            h = circles[j][0];
            k = circles[j][1];
            r = circles[j][2];

            if(Math.abs( m * h + b - k) < Math.abs(r) * Math.sqrt(1*1+m*m)){ //formula para saber si intersectan las lineas con el circulo
                templmax++;
                if(circle.hasOwnProperty(j)){
                    circle[j]++;
                }else{
                    circle[j] = 1;
                }
            }
        }
        if(templmax > lmax){
            lmax = templmax;
        }
        templmax = 0;
    }

    for(var prop in circle){
        if(circle[prop] > cmax) cmax = circle[prop];
    }

    if(lmax > cmax) return lmax;
    return cmax;
}

lines = [[1,0],[-1,0],[0,-2]]
circles= [[0,0,1],[2,2,1],[4,4,1]]

console.log(Intersections(lines,circles));