/*
Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

Example

For n = 3, the output should be

spiralNumbers(n) = [[1, 2, 3],
                    [8, 9, 4],
                    [7, 6, 5]]

https://codefights.com/arcade/intro/level-12/uRWu6K8E7uLi3Qtvx/description
*/

function spiralNumbers(n) {
  var m = new Array(n);
  var directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0]
    ];
  var currentDirectionIndex = 0;
  var currentRow = 0;
  var currentColumn = 0;
  var currentNum = 1;
  var tmpRow;
  var tmpColumn;
  for (var i = 0; i < n; i++) {
    m[i] = new Array(n);
  }
  for (var i = n * n; i > 0; i--) {
    m[currentRow][currentColumn] = currentNum;
    currentNum++;
    if (i > 1) {
      while (true) {
        tmpRow = currentRow + directions[currentDirectionIndex][0];
        tmpColumn = currentColumn + directions[currentDirectionIndex][1];
        if (tmpRow < 0 || tmpRow >= n || tmpColumn < 0 || tmpColumn >= n || m[tmpRow][tmpColumn]) {
          currentDirectionIndex = (currentDirectionIndex + 1) % 4;
        } else {
          currentRow = tmpRow;
          currentColumn = tmpColumn;
          break;
        }
      }
    }
  }
  return m;
}

n = 3;
console.log(spiralNumbers(n));