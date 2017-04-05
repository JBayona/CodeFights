/*
You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the numbers from a to b inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.

Example

For a = 2 and b = 7, the output should be
rangeBitCount(a, b) = 11.

Given a = 2 and b = 7 the array is: [2, 3, 4, 5, 6, 7]. 
Converting the numbers to binary, we get [10, 11, 100, 101, 110, 111], which contains 1 + 2 + 1 + 2 + 2 + 3 = 11 1s.

https://codefights.com/arcade/code-arcade/corner-of-0s-and-1s/eC2Zxu5H5SnuKxvPT
*/

var array = [];
var totalOnes = 0
function rangeBitCount(a, b) {
    for(var i = a; i <= b; i++){
        array.push(i);
    }

    array = array.map(function(item,index){
        return item.toString(2).split('').map(function(item,array){
            if(item == '1') totalOnes++;
        });
    });
    return totalOnes;             
}

//Reducido

var array = [];
var totalOnes = 0
rangeBitCount = (a, b) => {

    for(var i = a; i <= b; i++){
        array.push(i);
    }

    array.map((item,index) => item.toString(2).split('').map((item,array) =>{
        if(item == '1') totalOnes++;
    }));
    return totalOnes;             
}

a = 2
b = 7
console.log(rangeBitCount(a,b));
