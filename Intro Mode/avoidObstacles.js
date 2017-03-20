/*
You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.

Example

For inputArray = [5, 3, 6, 7, 9], the output should be
avoidObstacles(inputArray) = 4.

Check out the image below for better understanding:

https://codefights.com/arcade/intro/level-5/XC9Q2DhRRKQrfLhb5/description
*/

function avoidObstacles(arr) {
  for(var n=2;;n++){ //Todos los posibles numeros comenzando desde 2
    if(arr.every(x => x%n !=0)){ //Si ni no tiene modulo de 0 significa que no choca, es decir
    	//no son multiplos
      return n;
    }
  } 
}

inputArray = [1, 4, 10, 6, 2];
console.log(avoidObstacles(inputArray))