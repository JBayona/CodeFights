/*
Given a string, check if it can become a palindrome through a case change of some (possibly, none) letters.

Example

For inputString = "AaBaa", the output should be
isCaseInsensitivePalindrome(inputString) = true.

"aabaa" is a palindrome as well as "AABAA", "aaBaa", etc.

For inputString = "abac", the output should be
isCaseInsensitivePalindrome(inputString) = false.

All the strings which can be obtained via changing case of some group of letters, i.e. "abac", "Abac", "aBAc" and 13 more, are not palindromes.

https://codefights.com/arcade/code-arcade/book-market/G9wj2j6zaWwFWsise
*/

function isCaseInsensitivePalindrome(inputString) {
  return inputString.toLowerCase() == inputString.toLowerCase().split('').reverse().join('');
}

inputString = "abac";
console.log(isCaseInsensitivePalindrome(inputString));