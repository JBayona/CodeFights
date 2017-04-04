/*
Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighbouring numbers is equal (note that 0 and n - 1 are neighbouring, too).

Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

Example

For n = 10 and firstNumber = 2, the output should be
circleOfNumbers(n, firstNumber) = 7.

n: 10
firstNumber: 2
Output:
Empty
Expected Output:
7 

n: 10
firstNumber: 2
Output:
Empty
Expected Output:
7                         

n: 4
firstNumber: 1
Output:
Empty
Expected Output:
3

https://codefights.com/arcade/code-arcade/intro-gates/vExYvcGnFsEYSt8nQ
*/

function circleOfNumbers(n, firstNumber) {
    return (firstNumber + n / 2)%n;
}

circleOfNumbers = (n, firstNumber) => (firstNumber + n / 2)%n;

n = 10;
firstNumber = 2;
console.log(circleOfNumbers(n, firstNumber))