/*
Given an integer size, return array of length size filled with 1s.

Example

For size = 4, the output should be
createArray(size) = [1, 1, 1, 1].

https://codefights.com/arcade/code-arcade/list-forest-edge/gmZFbpR9cirL3Jpf2/description
*/

function createArray(size) {
    var x = new Array(size);
    return x.fill(1);
}

size = 4;
console.log(createArray(size));