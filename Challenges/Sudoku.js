/*
Sudoku solver

Here's your task: given 9 × 9 matrix representing a sudoku puzzle, return a solved sudoku.

In case you're not familiar with sudoku rules, here they are: the objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 subgrids that compose the grid contains all of the digits from 1 to 9.

It is guaranteed that the given sudoku is solvable, and that only one solution exists.

Get ready, you're about to solve some of the hardest sudokus. Have fun :)

Example

For

sudoku = [[5,3,0,0,7,0,0,0,0], 
          [6,0,0,1,9,5,0,0,0], 
          [0,9,8,0,0,0,0,6,0], 
          [8,0,0,0,6,0,0,0,3], 
          [4,0,0,8,0,3,0,0,1], 
          [7,0,0,0,2,0,0,0,6], 
          [0,6,0,0,0,0,2,8,0], 
          [0,0,0,4,1,9,0,0,5], 
          [0,0,0,0,8,0,0,7,9]]
the output should be

sudokuSolver(sudoku) = [[5,3,4,6,7,8,9,1,2], 
                        [6,7,2,1,9,5,3,4,8], 
                        [1,9,8,3,4,2,5,6,7], 
                        [8,5,9,7,6,1,4,2,3], 
                        [4,2,6,8,5,3,7,9,1], 
                        [7,1,3,9,2,4,8,5,6], 
                        [9,6,1,5,3,7,2,8,4], 
                        [2,8,7,4,1,9,6,3,5], 
                        [3,4,5,2,8,6,1,7,9]]
*/

function sudokuSolver(sudoku) {
    solveSudoku(sudoku,0,0)
    return sudoku
}


// recursive algo
function solveSudoku(grid, row, col) {
    var cell = findUnassignedLocation(grid, row, col);
    row = cell[0];
    col = cell[1];

    // base case: if no empty cell  
    if (row == -1) {
        console.log("solved");
        return true;
    }

    for (var num = 1; num <= 9; num++) {

        if ( noConflicts(grid, row, col, num) ) {   
            grid[row][col] = num;

            if ( solveSudoku(grid, row, col) ) {                
                return true;
            }

            // mark cell as empty (with 0)    
            grid[row][col] = 0;
        }
    }

    // trigger back tracking
    return false;
}


function findUnassignedLocation(grid, row, col) {
    var done = false;
    var res = [-1, -1];

    while (!done) {
        if (row == 9) {
            done = true;
        }
        else {
            if (grid[row][col] == 0) {
                res[0] = row;
                res[1] = col;
                done = true;
            }
            else {
                if (col < 8) {
                    col++;
                }
                else {
                    row++;
                    col = 0;
                }
            }
        }
    }

    return res;
}

function noConflicts(grid, row, col, num) {
    return isRowOk(grid, row, num) && isColOk(grid, col, num) && isBoxOk(grid, row, col, num);
}

function isRowOk(grid, row, num) {
    for (var col = 0; col < 9; col++)
        if (grid[row][col] == num)
            return false;

    return true;
}
function isColOk(grid, col, num) {
    for (var row = 0; row < 9; row++)
    if (grid[row][col] == num)
        return false;

    return true;    
}
function isBoxOk(grid, row, col, num) {
    row = Math.floor(row / 3) * 3;
    col = Math.floor(col / 3) * 3;

    for (var r = 0; r < 3; r++)
        for (var c = 0; c < 3; c++)
            if (grid[row + r][col + c] == num)
                return false;

    return true;
}

function printGrid(grid) {
    var res = "";

    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            res += grid[i][j];
        }
        res += "\n";
    }
    console.log(res);
}

sudoku = [[5,3,0,0,7,0,0,0,0], 
          [6,0,0,1,9,5,0,0,0], 
          [0,9,8,0,0,0,0,6,0], 
          [8,0,0,0,6,0,0,0,3], 
          [4,0,0,8,0,3,0,0,1], 
          [7,0,0,0,2,0,0,0,6], 
          [0,6,0,0,0,0,2,8,0], 
          [0,0,0,4,1,9,0,0,5], 
          [0,0,0,0,8,0,0,7,9]]
console.log(sudokuSolver(sudoku));