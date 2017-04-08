/*
Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, 
each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

Example

For the first example below, the output should be true. For the other grid, the output should be false: 
each of the nine 3 × 3 sub-grids should contain all of the digits from 1 to 9.

https://codefights.com/arcade/intro/level-12/tQgasP8b62JBeirMS/description
*/

//Basic idea: This is a stupid problem that anyone can do.
//  If I were given this in an interview, I'd reconsider the company.

//Turn columns into rows
var transpose = grid =>
    grid[0].map(
        (_,c) => grid.map(
            row => row[c]
        )
    )

//Turn sub-grids into rows
var expandSubGrids = grid => {
    var three = Math.sqrt(grid.length);
    return grid[0].map(
        (_,i) => grid[0].map(
            (_,j) => grid[(i/three|0)*three+j/three|0][i%three*three+j%three]
        )
    )
}

//Check a given row for duplicates
var checkRow = row => {
    var count = [];
    for(var cell of row) {
        if(cell != '.') {
            if(count[cell])
                return false;
            count[cell] = 1;
        }
    }
    return true;
}

var sudoku = grid =>
    grid.every(checkRow) &&
    transpose(grid).every(checkRow) &&
    expandSubGrids(grid).every(checkRow)


//Opcion 2

function sudoku2(grid) {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var c = grid[i][j];
            if (c !== '.') {
                // check row
                for (var z = 0; z < 9; z++) {
                    if (j !== z && grid[i][z] === c)
                        return false;
                }
                // check column
                for (var z = 0; z < 9; z++) {
                    if (i !== z && grid[z][j] === c)
                        return false;
                }
                // check square
                var a = i - i%3,
                    b = j - j%3;
                for (var x = a; x < a+3; x++) {
                    for (var y = b; y < b+3; y++) {
                        if (x !== i && y !== j && grid[x][y] === c)
                            return false;
                    }
                }
            }
        }
    }
    return true;
}

//Opcion 3

// True, if product of #s in row is 9!
p = a => eval(a.join`*`)==362880

// Check each row, column and 3 block grid using p() 
sudoku = grid => 
    grid.every((r,i) =>
               p(r) &&
               p(grid.map(r => r[i])) &&
               p(r.map((_,j) => grid[3*(i/3|0)+(j/3|0)][3*(i%3)+(j%3)])))