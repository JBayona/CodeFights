/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.You may assume that each input would have exactly one solution.Example:Given nums = [2, 7, 11, 15], target = 9,Because nums[0] + nums[1] = 2 + 7 = 9,return [0, 1].
*/

var twoSum = function(nums, target) { //Time Complexity O(n), one-pass hash table
    let hashMap = {} //hashMap
    for(let i = 0; i < nums.length; i++){
      let complement = target - nums[i];
      if(complement in hashMap) return [hashMap[complement],i]; //Checamos si tenemos el complemento (key) en el hash, si so lo retornamos
      //Si no se encuenta insertamos el elemenro analizado y el index
      hashMap[nums[i]] = i;
    }
    console.log("There is no solution");
};

nums = [2,7,11, 15];
target = 9;
console.log(twoSum(nums,target));