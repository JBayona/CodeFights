/*
As a noob programmer, Morti is studying loops. Today he'd like to try and write a function that calculates the sum of numbers in range from lower to upper inclusive using a famous ProgramRights platform. However, his function hangs for no apparent reason.

Morti is pretty sure that something is wrong with the platform: it is probably either IDE or compiler issue. Your task is to prove Morti wrong by writing a function that will run without a problem in any environment.

Given numbers lower and upper, calculate the sum of numbers in the range [lower, upper].

Example

For lower = 1 and upper = 1, the output should be
addInRange(lower, upper) = 1.

For lower = 0 and upper = 3, the output should be
addInRange(lower, upper) = 6.

0 + 1 + 2 + 3 = 6.
*/

//Loop option
function addInRange(lower, upper) {
    array = [];
    for(i = lower; i <= upper; i++){
        array.push(i);
    }
    var result = array.reduce((prev,curr) => prev +=curr);
    return result;
}

//formula
function addInRange(lower, upper) {
    return ((upper) - (lower) + 1) * ((lower) + (upper)) / 2;
}

//Reduce
addInRange = (lower, upper) => ((upper) - (lower) + 1) * ((lower) + (upper)) / 2

lower = 1
upper = 10
console.log(addInRange(lower,upper));
