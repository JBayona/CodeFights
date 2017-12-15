/*
You are given an array of integers in which every element appears twice, except for one. Find the element that only appears one time. 
Your solution should have a linear runtime complexity (O(n)). Try to implement it without using extra memory.

Example

For nums = [2, 2, 1], the output should be
singleNumber(nums) = 1.

https://codefights.com/interview/7xqHvuKXT2oBJ26iq/description
*/

//My version

function singleNumber(nums) {
    var result = 0;
    nums.forEach(num => result ^= num);
    return result;
}

//Grits version
function singleNumber(nums) {
    for(i in nums){
        if(nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])) return nums[i]
    }
}

nums = [2, 2, 1];
console.log(singleNumber(nums));