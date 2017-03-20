/*
As a high school student, you naturally have a favourite professor. And, even more natural, you have a least favourite one: professor X!

Having heard that you're an experienced CodeFighter, he became jealous and gave you an extra task as a homework. Given a sentence, you're supposed to find out if it's a palindrome or not.

The expected output for most of the test cases baffled you, but you quickly realize where the catch is. Looks like your professor assumes that a string is a palindrome if the letters in it are the same when you read it normally and backwards. Moreover, the tests even ignore the cases of the letters!

Given the sentence your professor wants you to test, return true if it's considered to be a palindrome by your professor, and false otherwise.

Example

For sentence = "Bob: Did Anna peep? | Anna: Did Bob?",
the output should be
isSentencePalindrome(sentence) = true.
*/

//Opcion 1
isSentencePalindrome = str => str.replace(/[^\w/s]/gi, '').toLowerCase() == [...str.replace(/[^\w/s]/gi, '').toLowerCase()].reverse().join('')

//Opcion 2
formatString = str => str.replace(/[^\w/s]/gi, '').toLowerCase()
isSentencePalindrome = str => formatString(str) == [...formatString(str).reverse().join('')


sentence = "Bob: Did Anna peep? | Anna: Did Bob?"; 
console.log(isSentencePalindrome(sentence));
