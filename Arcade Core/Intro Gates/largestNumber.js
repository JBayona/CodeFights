/*
Given an integer n, return the largest number that contains exactly n digits.

Example

For n = 2, the output should be
largestNumber(n) = 99.

https://codefights.com/arcade/code-arcade/intro-gates/SZB5XypsMokGusDhX
*/

largestNumber = n => +'9'.repeat(n)

n = 2;
console.log(largestNumber(n));
