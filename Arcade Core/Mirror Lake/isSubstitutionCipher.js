/*
A ciphertext alphabet is obtained from the plaintext alphabet by means of rearranging some characters. For example "bacdef...xyz" will be a simple ciphertext alphabet where a and b are rearranged.

A substitution cipher is a method of encoding where each letter of the plaintext alphabet is replaced with the corresponding (i.e. having the same index) letter of some ciphertext alphabet.

Given two strings, check whether it is possible to obtain them from each other using some (possibly, different) substitution ciphers.

Example

For string1 = "aacb" and string2 = "aabc", the output should be
isSubstitutionCipher(string1, string2) = true.

Any ciphertext alphabet that starts with acb... would make this transformation possible.

For string1 = "aa" and string2 = "bc", the output should be
isSubstitutionCipher(string1, string2) = false.

https://app.codesignal.com/arcade/code-arcade/mirror-lake/rNrF4v5etMdFNKD3s
*/

/* 
 * The Problem:
 * Given two strings, check whether it is possible to obtain them from each other
 * using some substitution ciphers.
 * 
 * Input: Two strings
 * Output: Boolean
 * 
 * Stragegy:
 * 1) Return false early if the string lengths don't match
 * 2) Now let's iterate through our strings, and if we see a char we haven't seen before
 *    We will add it to our cypher object with it's value being what it translates to
 *    a) first, we do want to check if char2 at the same index already exists in our object
 *       So let's use object.keys to get an array of keys and store that in a set.  then  we
 *       can just use Set.has method to find if that character is already being translated to
 *       by another letter.  if it is, we can just return false right her
 *    b) now, if we have seen this character before, let's see if it does NOT translate to 
 *       the character at the same index value, and if so return false, otherwise keep checkingn
 * 3) If we complete the loop without returning false, then we have a successful cypher to translate
 *    the two strings, and return true
*/

function isSubstitutionCipher(string1, string2) {
  if (string1.length !== string2.length) return false;
  let cypher = {};
  
  for (let i = 0; i < string1.length; i++) {
    let char1 = string1[i], char2 = string2[i];
    if (!(cypher[char1])) {
      let outputs = new Set(Object.values(cypher));
      if (outputs.has(char2)) return false;
      cypher[char1] = char2;
    } else if (cypher[char1] !== char2) {
      return false;
    }
  }
  return true;
}