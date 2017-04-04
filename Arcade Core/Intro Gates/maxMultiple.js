/*
Given a divisor and a bound, find the largest integer N such that:

N is divisible by divisor.
N is less than or equal to bound.
N is greater than 0.
It is guaranteed that such a number exists.

Example

For divisor = 3 and bound = 10, the output should be
maxMultiple(divisor, bound) = 9.

The largest integer divisible by 3 and not larger than 10 is 9.

https://codefights.com/arcade/code-arcade/intro-gates/HEsmEacHr2s9wahjr
*/

function maxMultiple(divisor, bound) {
    for(var  i = bound; i > 1; i--){
        if(i%divisor == 0 && i <= bound) return i
    }
}

divisor = 3;
bound = 10;
console.log(maxMultiple(divisor, bound))