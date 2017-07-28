/*
Given an array of integers nums and an integer k, determine whether there are two distinct indices i and j in the array where nums[i] = nums[j] and the absolute difference between i and j is less than or equal to k.

Example

For nums = [0, 1, 2, 3, 5, 2] and k = 3, the output should be
containsCloseNums(nums, k) = true.

There are two 2s in nums, and the absolute difference between their positions is exactly 3.

For nums = [0, 1, 2, 3, 5, 2] and k = 2, the output should be

containsCloseNums(nums, k) = false.

The absolute difference between the positions of the two 2s is 3, which is more than k.

https://codefights.com/interview-practice/task/njfXsvjRthFKmMwLC/description
*/

/*function containsCloseNums(nums, k) {
  //Count the result
  let map = {};
  let tmp;
  nums.forEach((item,index) => {
	if(!(item in map)){
	  map[item] = [index];
	}else{
	  map[item].push(index);
	}
  });
  console.log(map);
  //Result
  for(var prop in map){
	if(map[prop].length >= 2){
	  tmp = twoSum(map[prop], k);
	  if(tmp) return true;
	}
  }
  return false;
}

function twoSum(array, k){
  let hash = {};
  let complement;
  for(let i = 0; i < array.length; i++){
	for(let j = i+1; j < array.length; j++){
	  if(Math.abs(array[i] - array[j]) <= k){
		return true;
	  }
	}
  }
  return false;
}*/

function containsCloseNums(nums, k) {
  var seen = {},
  length = nums.length;
  for(var i=0; i<length; ++i) {
	  
	  //Almacenamos todos los números
	  var val = nums[i];
	  if(seen[val])
		  return true;
	  
	  //Regardless, we've seen it now
	  seen[val] = -~seen[val];
	  
	  //The i-kth element has fallen out of scope
	  if(i>=k)
		  seen[nums[i-k]]--;
  }
  return false;
}

nums = [0, 1, 2, 3, 5, 2];
//nums = [99, 99];
k = 3;
console.log(containsCloseNums(nums, k));