/*
Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, 
each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

Example

For the first example below, the output should be true. For the other grid, the output should be false: 
each of the nine 3 × 3 sub-grids should contain all of the digits from 1 to 9.

https://codefights.com/arcade/intro/level-12/tQgasP8b62JBeirMS/description
*/

function sudoku(grid) {
  var checkBlock = function(block) {
    var sample = '123456789';
    block.sort();
    if (block.join('') === sample) {
      return true;
    }
    return false;
  }

  var subgrids = [];

  for (var i = 0; i < 3; i++) {
    subgrids.push([]);
    for (var j = 0; j < 3; j++) {
      subgrids[i].push([]);
    }
  }

  for (var i = 0; i < 9; i++) {
    var horizontal = [];
    var vertical = [];
    for (var j = 0; j < 9; j++) {
      horizontal.push(grid[i][j]);
      vertical.push(grid[j][i]);
      subgrids[Math.floor(i / 3)][Math.floor(j / 3)].push(grid[i][j]);
    }
    if (!checkBlock(horizontal)) {
      return false;
    }
    if (!checkBlock(vertical)) {
      return false;
    }
  }

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (!checkBlock(subgrids[i][j]))
        return false;
      }
    }

  return true;
}