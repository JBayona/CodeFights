/*
Given a string, enclose it in round brackets.

Example

For inputString = "abacaba", the output should be
encloseInBrackets(inputString) = "(abacaba)".

https://codefights.com/arcade/code-arcade/book-market/K2ieDm98sPDzzMepz
*/

function encloseInBrackets(inputString) {
    return `(${inputString})`;
}

function encloseInBrackets(inputString) {
    return '('+inputString+')';
}

inputString = "abacaba"
console.log(encloseInBrackets(inputString));