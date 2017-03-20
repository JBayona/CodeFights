//Given an unsorted list of integers, from 1 to N, find the   duplicate number. (There is only one duplicate)

function getTotal(array){
return array.reduce((prev,current) => prev += current);
}

function findDuplicate(array){
    //We sort the array to find N which is the latest num
    array = array.sort((a,b) => a-b);
    var N = array.length-1
    //formula to get the correct from 1 to N
    var correctSum = (N*(N+1))/2;
    return Math.abs(getTotal(array) - correctSum);
}


var list = [7,1,9,2,11,8,3,10,5,6,4,9];
console.log(findDuplicate(list));