/*
There're k square apple boxes full of apples. If a box is of size m, then it contains m × m apples. You noticed two interesting properties about the boxes:

The smallest box is of size 1, the next one is of size 2,..., all the way up to size k.
Boxes that have an odd size contain only yellow apples. Boxes that have an even size contain only red apples.
Your task is to calculate the difference between the number of red apples and the number of yellow apples.

Example

For k = 5, the output should be
appleBoxes(k) = -15.

There are 1 + 3 * 3 + 5 * 5 = 35 yellow apples and 2 * 2 + 4 * 4 = 20 red apples, thus the answer is 20 - 35 = -15.

https://codefights.com/arcade/code-arcade/loop-tunnel/scG8AFsPuqQGx8Qjf
*/

function appleBoxes(k) {
    var odd = even = 0;
    for(var i = 0; i <= k; i++){
        if(i&0 == 0){
            even += getRedApples(i);
        }else{
            odd += getYellowApples(i);
        }
    }
    return odd - even;
}

getRedApples = n => n*n
getYellowApples = n => n*n


k = 5
console.log(appleBoxes(k));