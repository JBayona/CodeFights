/*
Remove a part of a given array between given 0-based indexes l and r (inclusive).

Example

For inputArray = [2, 3, 2, 3, 4, 5], l = 2 and r = 4, the output should be
removeArrayPart(inputArray, l, r) = [2, 3, 5].

https://codefights.com/arcade/code-arcade/list-forest-edge/vPJB7T28fyCeh2Ljn
*/

removeArrayPart = (inputArray, l, r) => {
    var removed = inputArray.splice(l,r-l+1);
    return inputArray;
}