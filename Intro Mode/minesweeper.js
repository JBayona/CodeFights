/*
In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

Example

For

matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
the output should be

minesweeper(matrix) = [[1, 2, 1],
                       [2, 1, 1],
                       [1, 1, 1]]       
Check out the image below for better understanding:

https://codefights.com/arcade/intro/level-5/ZMR5n7vJbexnLrgaM/description
*/

function minesweeper(matrix) {
    var mineNum = [];
    for (var row = 0; row < matrix.length; row++) {
        mineNum[row] = [];
        for (var col = 0; col < matrix[row].length; col++) {
            var cellNum = 0;
            
            var startRow = (row - 1 >= 0) ? row - 1 : row;
            var endRow = (row + 1 < matrix.length) ? row + 1 : row;
            
            for (var i = startRow; i <= endRow; i++) {
                var startCol = (col - 1 >= 0) ? col - 1 : col;
                var endCol = (col + 1 < matrix[row].length) ? col + 1 : col;
                
                for (var j = startCol; j <= endCol; j++) {
                    if (matrix[i][j] && !(i == row && j == col)) {
                        cellNum++;
                    }
                }
            }
            
            mineNum[row][col] = cellNum;
        }

    }
    
    return mineNum;
}


matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
 console.log(minesweeper(matrix));