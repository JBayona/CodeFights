/*
Correct variable names consist only of Latin letters, digits and underscores and they can't start with a digit.

Check if the given string is a correct variable name.

Example

For name = "var_1__Int", the output should be
variableName(name) = true;
For name = "qq-q", the output should be
variableName(name) = false;
For name = "2w2", the output should be
variableName(name) = false.

https://codefights.com/arcade/intro/level-6/6Wv4WsrsMJ8Y2Fwno/description

*/

function variableName(name) {
    return /^[a-z_]\w*$/i.test(name)
}

name = "var_1__Int"
console.log(variableName(name));