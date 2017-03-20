/*
You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

Example

For inputArray = [1, 1, 1], the output should be
arrayChange(inputArray) = 3.
*/

function arrayChange(inputArray) {
  var moves = 0;
  elem = 0;
  for(var i = 0; i < inputArray.length-1; i++){
    elem = inputArray[i];
    while(inputArray[i+1] <= elem){
      inputArray[i+1]++;
      moves++;
    }
  }
  return moves;
}

//inputArray = [1,1,1]
inputArray = [2, 1, 10, 1]
console.log(arrayChange(inputArray));