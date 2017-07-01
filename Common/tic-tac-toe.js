function tictactoe(games){
  var current = null;
  var results = [];
  //Main loop for games
  for(var i = 0; i < games.length; i++){
    //Loop for each game
    var flag = false;
    for(var j = 0; j < games[i].length; j++){
      for(var k = 0; k < games[i][j].length; k++){
        current = games[i][j][k];
        if(j === 0){
          if(checkVertical(games[i], current,j,k)){
            results.push('Test ' + (i+1) + ' ' + current + ' WIN');
            j = 3;
            k = 3;
            flag = true;
            break;
          }
          if(j === 0 && k === 0){
            if(checkDiagonalLeft(games[i], current,j,k)){
              results.push('Test ' + (i+1) + ' ' + current + ' WIN');
              j = 3;
              k = 3;
              flag = true;
              break;
            }else if(checkHorizontal(games[i], current,j,k)){
              results.push('Test ' + (i+1) + ' ' + current + ' WIN');
              j = 3;
              k = 3;
              flag = true;
              break;
            }
          }
          if(j === 0 && k === games[i][j].length-1){
            if(checkDiagonalRight(games[i], current,j,k)){
              results.push('Test ' + (i+1) + ' ' + current + ' WIN');
              j = 3;
              k = 3;
              flag = true;
              break;
            }
          }
        }else{
          /*Sólo en el primer row podemos tener todo tipo de soluciones
          diagonales, horizontales y verticales, fuera de eso, sólo
          puede ser soluciones horizontales, del row 1 al 2 (0 based)*/
          if(k === 0){
           if(checkHorizontal(games[i], current,j,k)){
              results.push('Test ' + (i+1) + ' ' + current + ' WIN');
              j = 3;
              k = 3;
              flag = true;
              break;
            }
          }
        }
      }
    }
    if(!flag){
      results.push('Test ' + (i+1) + ' ' + current + ' DRAW');
      flag = false;
    }
  }
  return results;
}

checkVertical = (matrix, current, x, y) => {
  if(matrix[x][y] === current){
    if(x === 2) return true;
    return checkVertical(matrix,current,x+1,y);
  }
  return false;
};

checkDiagonalLeft = (matrix, current, x, y) => {
  if(matrix[x][y] === current){
    if(x === 2) return true;
    return checkDiagonalLeft(matrix, current, x+1, y+1);
  }
  return false;
}

checkDiagonalRight = (matrix, current, x, y) => {
  if(matrix[x][y] === current){
    if(x === 2) return true;
    return checkDiagonalRight(matrix, current, x+1, y-1);
  }
  return false;
}

checkHorizontal = (matrix, current, x, y, count) => {
  if(matrix[x][y] === current){
    if(y === 2) return true;
    return checkHorizontal(matrix, current, x, y+1);
  }
  return false;
}


var games = [
  [
   ['O','O','X'],
   ['-','X','-'],
   ['X','O','X']
  ],
  [
   ['O','X','-'],
   ['O','-','-'],
   ['O','O','O']
  ],
  [
   ['X','X','O'],
   ['-','X','O'],
   ['X','-','X']
  ],
  [
   ['-','X','X'],
   ['O','O','O'],
   ['O','O','X']
  ],
  [
   ['-','X','X'],
   ['-','O','O'],
   ['O','O','X']
  ]
]

console.log(tictactoe(games));