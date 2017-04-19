/*
You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

Try to solve this in-place - in a real interview, you will only be allowed to use O(1) additional memory.

Example

For
a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
the output should be

rotateImage(a) =
    [[7, 4, 1],
     [8, 5, 2],
     [9, 6, 3]]

https://codefights.com/interview/BgjZ2duKaYrrjsGcK/description
*/

function rotateImage(a) {
  var rotated = [];
  var tmp = [];
  for(var i = 0; i < a.length; i++){
    tmp = [];
    for(var j = 0; j < a[i].length; j++){
      /*Invertimos los índices para iterar sobre columnas en lugar de
      renglones, insertamos de atrás hacia adelante para obtener el último
      elemento del row en la primera posición*/ 
      tmp.unshift(a[j][i]);
    }
    rotated.push(tmp);
  }
  return rotated;
}

a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
console.log(rotateImage(a));