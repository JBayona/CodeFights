function topRightBottomLeft(matrix){
  var number = 0;
  ROW = matrix.length;
  for (var i = 0; i < ROW*2-1; ++i) {
        var z = i < ROW ? 0 : i - ROW + 1;
        for (var j = z; j <= i - z; ++j) {
            var c1=j;
            var c2=(ROW-1)-(i-j);
            console.log(matrix[c1][c2]);
        }
        console.log("\n");
    }
}

function leftTopBottomRight(matrix){
  ROW = matrix.length;
  for (var i = 0; i < ROW*2-1; ++i) {
        var z = i < ROW ? 0 : i - ROW + 1;
        for (var j = z; j <= i - z; ++j) {
            var c1=j;
            var c2=i-j;
            console.log(matrix[c1][c2]);
        }
        console.log('\n');
    }
}

matrix = [ [7, 3, 5, 1],
           [5, 7, 3, 5], 
          [1, 5, 7, 3],
          [2, 1, 5, 7]];

//printMatrix(matrix);
console.log(topRightBottomLeft(matrix));
console.log(leftTopBottomRight(matrix));