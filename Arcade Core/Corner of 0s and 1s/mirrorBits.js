/*
Reverse the order of the bits in a given integer.

Example

For a = 97, the output should be
mirrorBits(a) = 67.

97 equals to 1100001 in binary, which is 1000011 after mirroring, and that is 67 in base 10.

For a = 8, the output should be
mirrorBits(a) = 1.

https://codefights.com/arcade/code-arcade/corner-of-0s-and-1s/e3zfPNTwTa9qTQzcX
*/

function mirrorBits(a) {
    return (parseInt(a.toString(2).split('').reverse().join(''),2))
}

mirrorBits = a => parseInt(a.toString(2).split('').reverse().join(''),2)

a = 8
console.log(mirrorBits(a));
