/*
Note: Avoid using built-in functions that convert integers to their binary representations. 
Write the solution that uses O(k) operations per test, where k is the number of bits set to 1.

Write a function that takes an unsigned (positive) integer and returns the number of 1 bits 
its binary representation contains. This value is also known as the integer's Hamming weight.
*/

//Option 1
function numberOf1Bits(n) {
   var count = 0;
   while (n){
      n &= (n-1) ;
      count++;
    }
    return count;
}

n = 13;
console.log(numberOf1Bits(n));


//Option 2
function numberOf1Bits(n) {
    var count = 0;
    while(n) {
        if( (n & 1) ) {
            count++;
        }
		//Rotate the element
        n >>= 1;
    }
    return count;
}

n = 13;
console.log(numberOf1Bits(n));
