/*
You're given two integers, n and m. Find position of the rightmost bit in which they differ in their binary representations (it is guaranteed that such a bit exists), counting from right to left.

Return the value of 2position_of_the_found_bit (0-based).

Example

For n = 11 and m = 13, the output should be
differentRightmostBit(n, m) = 2.

1110 = 10112, 1310 = 11012, the rightmost bit in which they differ is the bit at position 1 (0-based) from the right in the binary representations.
So the answer is 21 = 2.    

https://codefights.com/arcade/code-arcade/corner-of-0s-and-1s/whz5JzszYTdXW6aNA
*/

function differentRightmostBit(n, m) {
  return m - n & n - m;
}

differentRightmostBit = (n, m) => m - n & n - m


n = 11;
n = 13;

console.log(differentRightmostBit(n,m));
