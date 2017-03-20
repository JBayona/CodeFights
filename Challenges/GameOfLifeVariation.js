/*
If you are not familiar with Conway's Game of Life Variations, now might be a good time to take a look at it.

Given the definition for a variation of Conway's Game of Life and an initialState, return the number of living cells after the given number of iterations.

Note, that the game board should wrap (using the toroidal array method), where the left and right sides are consider stitched together and so are the top and bottom.

Example

For definition = "B3/S23",

initialState = ["       ", 
                "       ", 
                "   #   ", 
                "  ###  ", 
                "   #   ", 
                "       ", 
                "       "]
and iterations = 4, the output should be
ConwaysVariationsOfLife(definition, initialState, iterations) = 12.

In the given example the classic game is defined. The initialState would evolve to...

["       ",
 "  ###  ",
 " #   # ",
 " #   # ",
 " #   # ",
 "  ###  ",
 "       "]
...after 4 iterations.

12 cells are alive, so your code should return 12.
*/

function ConwaysVariationsOfLife(definition, initialState, iterations) {
    row = initialState.length;
    column = initialState[0].length;
    count = 0;

    //Set 1 all the alive cells, otherwise 0
    cells = []
    for (var i=0; i<row; i++) {
        cells[i] = [];
        for (var j=0; j<column; j++) {
            cells[i][j] = initialState[i][j] == '#' ? 1 : 0;
        }
    }

    for(var i = 1; i <= iterations; i++){
		update(definition);
		if(i == iterations){
			var count = 0;
			for(var i=0; i < result.length; i++){
				for(var j=0; j<result[i].length; j++){
					if(result[i][j]){
						count++;
					}
				}
			}
			return count;
		}
    }
}

//Return the number of alive neighbours for a cell
function countNeighbours(x, y) {
	var amount = 0;
	if (isFilled(x-1, y-1)) amount++;
	if (isFilled(x,   y-1)) amount++;
	if (isFilled(x+1, y-1)) amount++;
	if (isFilled(x-1, y  )) amount++;
	if (isFilled(x+1, y  )) amount++;
	if (isFilled(x-1, y+1)) amount++;
	if (isFilled(x,   y+1)) amount++;
	if (isFilled(x+1, y+1)) amount++;
	return amount;
}

function isFilled(x, y) {
//La validación de x y y es para ir de un lado a otro de la matriz en caso de ser un límite.
	if(x == -1){
		x = row-1;
	}
	if(x == row){
		x = 0;
	}
	if(y == -1){
		y = column-1;
	}
	if(y == column){
		y = 0;
	}
   return cells[x][y];
}


 //Check which cells are still alive
function update(definition) {
    
    result = [];
    
    var B = definition.match('B(.*)/')[1].split('').map(Number);
    var S = definition.match('/S(.*)')[1].split('').map(Number);

    cells.forEach(function(row, x) {
        result[x] = [];
        row.forEach(function(cell, y) {
            var alive = 0,
                count = countNeighbours(x, y);
            
            if (cell > 0) {
            alive = S.includes(count) ? 1: 0;
            } else {
            alive = B.includes(count) ? 1: 0;
            }
            result[x][y] = alive;
        });
    });
    
    cells = result;
}

var definition ="B3/S23"
var initState = ["       ", 
 "       ", 
 "   #   ", 
 "  ###  ", 
 "   #   ", 
 "       ", 
 "       "]
var iterations = 4;
ConwaysVariationsOfLife(definition,initState,iterations);
