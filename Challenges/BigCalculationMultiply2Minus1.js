/*
You have a calculator called BiCalc, which is very strange, as it can only perform two operations: multiply by 2, denoted as x2, and subtract by 1, denoted -1. You have a lot of time on your hands, so write a program that will help you determine the minimum number of button presses required to get from the start value to the end value.

Other important information

The calculator can only display numbers up to 999999999 = 109 - 1, so if at any time the current value of the number becomes greater than 999999999, the calculator will display "Error".

It is guaranteed that there is no need to use negative numbers to solve this challenge.

Examples

For start = 1 and end = 16, the output should be
BiCalc(start, end) = 4.

You can multiply 1 by 2 four times to get 16 (i.e. press x2 4 times).

For start = 8 and end = 2, the output should be
BiCalc(start, end) = 6.

You can subtract 1 from 8 six times to get 2 (i.e. press -1 6 times).
*/

function BiCalc(s, e) {
    if (s >= 999999999 || e >= 999999999){
        return -1;
    }
    if(s===e)
        return 0;
    if(s>e)
        return s-e;
    if (e % 2 === 0) {
        return 1+BiCalc(s, e/2);
    } else {
        return 2+BiCalc(s, (e+1)/2);
    }
}