/*
Note: Avoid using built-in std::nth_element (or analogous built-in functions in languages other than C++) 
when solving this challenge. Implement them yourself, since this is what you would be
 asked to do during a real interview.

Find the kth largest element in an unsorted array. This will be the kth largest element in 
sorted order, not the kth distinct element.

https://codefights.com/interview-practice/task/BG94ZFECSNo6Kv7XW/description
*/

function kthLargestElement(nums, k) {
    nums.sort((a,b) => b - a);
    return nums[k-1];
}

nums = [7, 6, 5, 4, 3, 2, 1];
k = 2;
console.log(kthLargestElement(nums, k));



