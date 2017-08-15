/*
Given an image of NxN matrix, write a method to rotate the
image by 90 degrees. Can you do it in place?
We can do this moving the top edge to the righ edge, the 
right edge to the bottom edge, the bottom edge to the left
edge and the left edge to the top edge.
Swap index by index - Complex O(N^2)
*/

function rotate(matrix, n){
  for(var i = 0; i < n/2; i++){
    var first = i;
    var last = n - 1 - i;
    for(var j = first; j < last; j++){
      var offset = j - first;
      //Save top
      var top = matrix[first][j];

      //left to top (left -> top)
      matrix[first][j] = matrix[last - offset][first];

      //bottom to left (bottom -> left)
      matrix[last - offset][first] = matrix[last][last - offset];

      //right top to bottom (right -> bottom)
      matrix[last][last - offset] = matrix[j][last];

      //top to right (top -> right)
      matrix[j][last] = top;
    }
  }
  return matrix;
}

matrix =[ [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]];
n = 3;
console.log(rotate(matrix,n));