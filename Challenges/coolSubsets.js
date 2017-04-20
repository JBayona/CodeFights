/*
Let's define the value of the coolness of a subset of an array as the bitwise OR operation of all the elements of the subset, divided 
by the length of the subset (integer division).

Your task is to calculate the number of ways in which you can choose a non-empty subset of the given array a that has 
the maximum possible value of coolness.

Note that two subsets that consist of the same numbers but are taken from different positions of the array are considered to be different.

Example

For a = [1, 7, 2, 7], the output should be
coolSubsets(a) = 2.

The maximum coolness of a subset of a is 7. The only subset of a that has a coolness of 7 is a 
subset that contains a single element, 7. Since there are two ways to choose this subset, the answer is 2.

https://codefights.com/challenge/vHiHgQhfhvd5TM6mF/solutions/JSvvBeAbTn2Tx2yQe
*/

coolSubsets = a => {
	/*We know that if we have a Max value, the output will be the number of
	times  Max appears in the array, also as the sentence says " divided by the length of the subset"
	we know that the highest coolnes will be a subset of length 1*/
    m = Math.max(...a)
    n = a.filter(v=>v==m).length
	/*If we have an array of 0's we return the math expression, otherwise will be the "n", which
	is the number of times Max appears in the array*/
    return m ? n : Math.pow(2, n) - 1
}

a = [1, 7, 2, 7];
console.log(coolSubsets(a));