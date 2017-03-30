/*
Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:


Example

For bishop = "a1" and pawn = "c3", the output should be
bishopAndPawn(bishop, pawn) = true.



For bishop = "h1" and pawn = "h3", the output should be
bishopAndPawn(bishop, pawn) = false.



https://codefights.com/arcade/intro/level-9/6M57rMTFB9MeDeSWo/description
*/

//Opción 1

function bishopAndPawn(cell1, cell2) {
  var x1 = getX(cell1[0]);
  var y1 = getY(cell1[1]);
  var x2 = getX(cell2[0]);
  var y2 = getY(cell2[1]);
  if (x1 + y1 === x2 + y2 || x1 - y1 === x2 - y2) {
    return true;
  }
  return false;
}

var getX = function(pos) {
      return pos.charCodeAt() - 'A'.charCodeAt();
};
var getY = function(pos) {
    return pos.charCodeAt() - '1'.charCodeAt();
};

//Opción 2

function bishopAndPawn(bishop, pawn) {
    var pos = ["a","b","c","d","e","f","g","h"];
    var bAlpha = pos.indexOf(bishop[0]);
    var pAlpha = pos.indexOf(pawn[0]);
    return Math.abs(Number(bishop[1]) - Number(pawn[1])) === Math.abs(bAlpha - pAlpha);
}

bishop = "a1";
pawn = "c3";
console.log(bishopAndPawn(bishop, pawn));