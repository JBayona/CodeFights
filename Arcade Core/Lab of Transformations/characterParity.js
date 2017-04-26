/*
Given a character, check if it represents an odd digit, an even digit or not a digit at all.

Example

For symbol = '5', the output should be
characterParity(symbol) = "odd";
For symbol = '8', the output should be
characterParity(symbol) = "even";
For symbol = 'q', the output should be
characterParity(symbol) = "not a digit".
https://codefights.com/arcade/code-arcade/lab-of-transformations/QKnGhkoi4wKr6xY9b

*/

function characterParity(symbol) {
    return isNaN(symbol) ? "not a digit" : (parseInt(symbol))%2 === 0 ? "even" : "odd";
}

symbol = 'q';
console.log(characterParity(symbol));