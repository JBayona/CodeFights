/*
You are given an array of up to four non-negative integers, each less than 256.

Your task is to pack these integers into one number M in the following way:

The first element of the array occupies the first 8 bits of M;
The second element occupies next 8 bits, and so on.
Return the obtained integer M.

Note: the phrase "first bits of M" refers to the least significant bits of M - the right-most bits of an integer. For further clarification see the following example.

Example

For a = [24, 85, 0], the output should be
arrayPacking(a) = 21784.

An array [24, 85, 0] looks like [00011000, 01010101, 00000000] in binary.
After packing these into one number we get 00000000 01010101 00011000 (spaces are placed for convenience), which equals to 21784.

https://codefights.com/arcade/code-arcade/corner-of-0s-and-1s/KeMqde6oqfF5wBXxf
*/

function byteString(n) {
  if (n < 0 || n > 255 || n % 1 !== 0) {
      throw new Error(n + " does not fit in a byte");
  }
  return ("000000000" + n.toString(2)).substr(-8)
}

function arrayPacking(a) {
  var result = a.reverse().map(function(item,index){
    return byteString(item);
  });

  return parseInt(result.join(''),2);
}

//Reducido

byteString = n => n < 0 || n > 255 || n % 1 !== 0 ? new Error(n + " does not fit in a byte") : ("000000000" + n.toString(2)).substr(-8)
 
arrayPacking = a => parseInt(a.reverse().map((item,index) => byteString(item)).join('') , 2 );

a = [23, 45, 39]
console.log(arrayPacking(a));
