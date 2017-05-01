/*
You are supposed to label a bunch of boxes with numbers from 0 to n, and all the labels are stored in the array arr. Unfortunately one of the labels is missing. Your task is to find it.

Example

For arr = [3, 1, 0], the output should be
missingNumber(arr) = 2.

https://codefights.com/interview/t8iNoBtDf5XSiwHiF/companies/PBvcD79bDSCacJQff/description
*/

function missingNumber(arr) {
  var max = arr.length;
  var correctSum = (max *(max+1))/2;
  return correctSum - arraySum(arr);
}

arraySum = array => array.reduce((prev, curr)  => prev += curr, 0);


arr = [1];
console.log(missingNumber(arr));