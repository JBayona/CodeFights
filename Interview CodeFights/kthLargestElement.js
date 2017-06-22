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

function kthLargestElement(nums, k) {
// the easy way in one line, using built in sort:
// return nums.sort((a, b) => b - a)[k - 1]; 

// using quick sort: 
  function  quickSort(arr, left, right) {
      var i = left,
          j = right,
          pivotidx = (left + right) / 2, 
          pivot = arr[pivotidx | 0],
          tmp;
          
      /* partition */
      while (i <= j) {
          while (arr[i] < pivot) i++;
          while (arr[j] > pivot) j--;
          if (i <= j) {
              tmp = arr[i];
              arr[i] = arr[j];
              arr[j] = tmp;
              i++;
              j--;
          }
      }

      /* recursion */
      if (left < j) quickSort(arr, left, j);
      if (i < right) quickSort(arr, i, right);
      return arr;
  }
  quickSort(nums, 0, nums.length - 1);
  return nums[nums.length - k];
}




