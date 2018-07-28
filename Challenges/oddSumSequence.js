/*

Given an array of integers, we can produce a new array by replacing each element with the sum of all the odd integers up to that index. For example, the array [2, 5, 3, 8, 1] would produce the result [0, 5, 8, 8, 9].

If we keep repeating this process, we'll get a sequence of arrays that'll eventually start repeating, but it may need to go through a few iterations before the repetition begins. Given the array arr, determine how many steps it'll take for the sequence to reach a point where it'll start repeating.

Example

For arr = [2, 5, 3, 8, 1], the output should be oddSumSequence(arr) = 3

The sequence of arrays would look like this:

[2, 5, 3, 8, 1]
[0, 5, 8, 8, 9]
[0, 5, 5, 5, 14]
[0, 5, 10, 15, 15]
[0, 5, 5, 20, 35]
[0, 5, 10, 10, 45]
[0, 5, 5, 5, 50]
[0, 5, 10, 15, 15]
         .
         .
         .
At this point the sequence has reached an array we've already seen before, so it'll continue to repeat. Since it took 3 steps to reach the array [0, 5, 10, 15, 15] the first time, the answer is 3.

https://app.codesignal.com/challenge/jQDf5X82oemAyXE4L
*/


function oddSumSequence(arr) {
    let hash = {};
    let count = 0;
    while(!(arr.join('') in hash)) {
        let key = arr.join('');
        hash[key] = count++
        arr = getArrSum(arr)
    }
    return hash[arr.join('')]
}

function getArrSum(array){
    let oddArray = [];
    for(let i = 0; i < array.length; i++) {
        if(i === 0) {
            oddArray.push(array[0]%2 !== 0 ? array[0] : 0);
        }else {
            // 0 is even number
            if(array[i] === 0) {
                oddArray.push(oddArray[i-1]);
            } else {
             oddArray.push(array[i]%2 !== 0 ? array[i]+oddArray[i-1] : oddArray[i-1])   
            }
        }
    }
    return oddArray;
}

array = [2, 5, 3, 8, 1];

console.log(oddSumSequence(array));