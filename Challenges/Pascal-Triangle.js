function createPascalTriangle (numRows) {
  var pascalTriangle = [];
  var count = 0;
  for (var i = 0; i < numRows; i++) { 
    pascalTriangle[i] = [i+1];
    for (var j = 0; j < i+1; j++) {            
      if (j === 0 || j === i) {
        pascalTriangle[i][j] = 1;
      } else {
        pascalTriangle[i][j] = pascalTriangle[i-1][j-1] + pascalTriangle[i-1][j];
        if(pascalTriangle[i][j]%p === 0){
          count++;
        }
      }
    }
  }
  console.log(count);
  return pascalTriangle;
}

var n = 168;
var p = 13;
console.table(createPascalTriangle(n,p));