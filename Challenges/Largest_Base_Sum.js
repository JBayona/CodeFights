/*
You are given two non-negative integers, number1 and number2, given in bases base1 and base2, respectively. Each base can be in range from Binary (2) to Hexatridecimal (36).

Your task is to sum the given numbers and return them in one of the given bases. Here's how the base of the returned value is determined:

if number1 ≠ number2, the base of the largest number should be chosen;
if number1 = number2, the largest base from the given should be chosen.
Note, that characters used in bases greater than 10 are given in the lowercase.

For your convenience, you can check out this base number converter or this converter.

Example

BaseAdd("11", 2, "10", 10) = "13".

112 = 310, thus the sum equals 3 + 10 = 1310. Since 112 < 1010, base 10 should be used in the answer.

BaseAdd("11111100000", 2, "7e0", 16) = "fc0".

111111000002 = 201610, and 7e016 = 201610 as well. Thus the sum equals 2016 + 2016 = 403210.number1 = number2, the largest base should be used in the answer, which is 16. So, the answer is403210 = fc016.


*/

function BaseAdd(a, m, b, n) {
    //Add, choose largest base
    if((num1 = parseInt(a,m)) == (num2 = parseInt(b,n))){
        return m>n?(num1+num2).toString(m):(num1+num2).toString(n)
    }
    //Add, choose base of largest number
    else{
        num1 = parseInt(a,m)
        num2 = parseInt(b,n)
        return num1>num2?(num1+num2).toString(m):(num1+num2).toString(n)
    }
}
