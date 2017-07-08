/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

var findMedianSortedArrays = function(nums1, nums2) {
    var array = [...nums1,...nums2].sort((a,b) => a-b);
    if(array.length%2 == 0){
      return (array[(array.length/2)-1]+array[array.length/2])/2
    }
    else return array[Math.round(array.length/2)-1]
};

nums1 = [1]
nums2 = [2,3,4,5,6,7,8,9,10]
console.log(findMedianSortedArrays(nums1,nums2));