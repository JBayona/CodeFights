/*
Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

Example

For

matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]
the output should be
differentSquares(matrix) = 6.

Here are all 6 different 2 × 2 squares:

1 2
2 2
2 1
2 2
2 2
2 2
2 2
1 2
2 2
2 3
2 3
2 1

https://codefights.com/arcade/intro/level-12/fQpfgxiY6aGiGHLtv/description
*/

function differentSquares(matrix) {
    var squares = {},
        result = 0;
    for (var i = 1; i < matrix.length; i++) {
        var row = matrix[i];
        for (var j = 1; j < row.length; j++) {
            var square = [
                matrix[i - 1][j - 1],
                matrix[i - 1][j],
                matrix[i][j - 1],
                matrix[i][j]
            ];
            if (!squares[square]) result++;
            squares[square] = true;
        }
    }
    return result;
  }

matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]];
console.log(differentSquares(matrix));