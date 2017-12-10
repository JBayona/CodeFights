/*
You are planning to rob houses on a specific street, and you know that every house on the street has a certain amount of money hidden. 
The only thing stopping you from robbing all of them in one night is that adjacent houses on the street have a connected security system. 
The system will automatically trigger an alarm if two adjacent houses are broken into on the same night.

Given a list of non-negative integers nums representing the amount of money hidden in each house, determine the maximum amount 
of money you can rob in one night without triggering an alarm.

Example

For nums = [1, 1, 1], the output should be
houseRobber(nums) = 2.

The optimal way to get the most money in one night is to rob the first and the third houses for a total of 2.

https://codefights.com/interview-practice/task/XBWN6DYRqPrKdMZs8
*/

function houseRobber(nums) {
    if(nums==null||nums.length===0)
        return 0;
 
    if(nums.length===1)return nums[0];
 
    let dp = new Array(nums.length);
    dp[0]=nums[0];
    dp[1]=Math.max(nums[0], nums[1]);
 
    for(let i=2; i<nums.length; i++){
        dp[i] = Math.max(dp[i-2]+nums[i], dp[i-1]);
    }
 
    return dp[nums.length-1];
}

nums = [1, 1, 1];
console.log(houseRobber(nums));