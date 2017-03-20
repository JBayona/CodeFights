/*
Given a rectangular matrix, return all of the elements of the matrix in spiral order.

Example

For

matrix =
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
the output should be
matrixElementsInSpiralOrder(matrix) = [1, 2, 3, 4, 5, 6, 7, 8, 9].


*/

function matrixElementsInSpiralOrder(matrix) {
    if(!matrix.length) { return []}
    var topRow = 0;
    var btmRow = matrix.length-1;
    var leftCol = 0;
    var rightCol = matrix[0].length-1; 
    var arr = [];
    
    while(topRow<=btmRow && leftCol<=rightCol) {
        for(var i=leftCol; i<=rightCol; i++) {
            arr.push(matrix[topRow][i]); 
        }
        topRow++
        for(var i=topRow; i<=btmRow; i++) {
            arr.push(matrix[i][rightCol]); 
        }
        rightCol--; 
        if(topRow<=btmRow) {
          for(var i=rightCol; i>=leftCol; i--) {
            arr.push(matrix[btmRow][i]);
          }
          btmRow--;
        }
        if(leftCol<=rightCol) {
          for(var i=btmRow; i>=topRow; i--) {
            arr.push(matrix[i][leftCol]);
          }
          leftCol++; 
        }
    }
    return arr; 
}

