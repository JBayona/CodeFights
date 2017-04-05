/*
Let's say that number a feels comfortable with number b if a ≠ b and b lies in the segment [a - s(a), a + s(a)], where s(x) is the sum of x's digits.

How many pairs (a, b) are there, such that a < b, both a and b lie on the segment [L, R], and each number feels comfortable with the other?

Example

For L = 10 and R = 12, the output should be
comfortableNumbers(L, R) = 2.

Here are all values of s(x) to consider:

s(10) = 1, so 10 is comfortable with 9 and 11;
s(11) = 2, so 11 is comfortable with 9, 10, 12 and 13;
s(12) = 3, so 12 is comfortable with 9, 10, 11, 13, 14 and 15.
Thus, there are 2 pairs of numbers comfortable with each other within the segment [10; 12]: (10, 11) and (11, 12).

https://codefights.com/arcade/code-arcade/labyrinth-of-nested-loops/pNfGgNk46YZ4c4RW5
*/

function comfortableNumbers(L, R) {
    c = 0;
    for (var a = L; a < R; a++) {
        for (var b = a + 1; b <= R; b++) {
          sda = sumDigits(a);
          sdb = sumDigits(b);
          if (b >= a - sda && b <= a + sda && a >= b - sdb && a <= b + sdb) {
              c++;
          }
        }
    }
    return c;
}

function sumDigits(n) {
    return parseInt((""+n).split('').reduce((a,b)=>parseInt(a)+parseInt(b)));
}


L = 10;
R = 12;
console.log(comfortableNumbers(L, R))