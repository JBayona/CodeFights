/*
Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

Example

For inputArray = [2, 4, 1, 0], the output should be
arrayMaximalAdjacentDifference(inputArray) = 3.
*/

function arrayMaximalAdjacentDifference(inputArray) {
  var maxDiff = 0;
  flag = false;
  for(var i = 0; i < inputArray.length-1; i++){
    if(!flag){
      maxDiff = Math.abs(inputArray[i]-inputArray[i+1]);
      flag = true;
    }else{
      maxDiff = Math.abs(inputArray[i]-inputArray[i+1]) > maxDiff ? Math.abs(inputArray[i]-inputArray[i+1]): maxDiff;
    }
  }
  return maxDiff;
}