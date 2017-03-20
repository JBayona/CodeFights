/*
After becoming famous, CodeBots decided to move to a new building and live together. The building is represented by a rectangular matrix of rooms, each cell containing an integer - the price of the room. Some rooms are free (their cost is 0), but that's probably because they are haunted, so all the bots are afraid of them. That is why any room that is free or is located anywhere below a free room in the same column is not considered suitable for the bots.

Help the bots calculate the total price of all the rooms that are suitable for them.

Example

For

matrix = [[0, 1, 1, 2], 
          [0, 5, 0, 0], 
          [2, 0, 3, 3]]
the output should be
matrixElementsSum(matrix) = 9.

Here's the rooms matrix with unsuitable rooms marked with 'x':

[[x, 1, 1, 2], 
 [x, 5, x, x], 
 [x, x, x, x]]
Thus, the answer is 1 + 5 + 1 + 2 = 9.
*/

function matrixElementsSum(matrix) {
  var free = false;
  result = 0;
  //Transponse matrix, switch column for rows
  //http://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript
  var matrix = matrix[0].map(function(col, i) { 
      return matrix.map(function(row) { 
        return row[i] 
      })
  });
  //console.table(matrix);
  for(var i = 0; i < matrix.length; i++){
    for(var j = 0; j < matrix[i].length; j++){
      if(matrix[i][j] == 0){
        free = true;
      }else if(matrix[i][j] != 0 && free){
        continue;
      }else if(matrix[i][j] != 0 && !free){
        result += matrix[i][j];
      }
    }
    //Restart per column (or row after transponse)
    free = false;
  }
  return result;
}

matrix = [[1,1,1], 
 [2,2,2], 
 [3,3,3]]