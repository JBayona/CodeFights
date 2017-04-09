/*
Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

Example

For inputArray = [1, 2, 1], elemToReplace = 1 and substitutionElem = 3, the output should be
arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].

https://codefights.com/arcade/code-arcade/list-forest-edge/mCkmbxdMsMTjBc3Bm/description
*/


arrayReplace = (inputArray, elemToReplace, substitutionElem) =>
    inputArray.map(item => item == elemToReplace ? substitutionElem : item)