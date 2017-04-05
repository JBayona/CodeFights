/*
Given integers a and b, determine whether the following pseudocode results in an infinite loop

while a is not equal to b do
  increase a by 1
  decrease b by 1
Example

For a = 2 and b = 6, the output should be
isInfiniteProcess(a, b) = false;
For a = 2 and b = 3, the output should be
isInfiniteProcess(a, b) = true.

https://codefights.com/arcade/code-arcade/at-the-crossroads/aFF9HDm2Rsti9j5kc
*/

function isInfiniteProcess(a, b) {
     if (a > b || Math.abs(a-b) == 1 || Math.abs(a-b)%2 != 0) return true;
    return false;
}

isInfiniteProcess = (a, b) => a > b || Math.abs(a-b) == 1 || Math.abs(a-b)%2 != 0 ? true : false;


a = -3
b = 3
console.log(isInfiniteProcess(a, b))