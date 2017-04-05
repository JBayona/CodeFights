/*
You're given three integers, a, b and c. It is guaranteed that two of these integers are equal to each other. What is the value of the third integer?

Example

For a = 2, b = 7 and c = 2, the output should be
extraNumber(a, b, c) = 7.

The two equal numbers are a and c. The third number (b) equals 7, which is the answer.

https://codefights.com/arcade/code-arcade/at-the-crossroads/sgDWKCFQHHi5D3Szj
*/

function extraNumber(a, b, c) {
	return a^b^c;
}

extraNumber = (a, b, c) => a^b^c

a = 2
b = 7
c = 2

console.log(extraNumber(a, b, c))