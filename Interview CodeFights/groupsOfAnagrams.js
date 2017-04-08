/*Let's define a group of anagrams as a list of words, where for each pair of words w1 and w2, w1 is an anagram of w2.

Given a list of words, split it into the smallest possible number of groups of anagrams and return this number as the answer.

Example

For words = ["tea", "eat", "apple", "ate", "vaja", "cut", "java", "utc"], the output should be
groupsOfAnagrams(words) = 4.

The 4 groups of anagrams in this example are ("tea", "eat", "ate"), ("apple"), ("vaja", "java"), and ("cut", "utc").

https://codefights.com/interview/h8pq7aHrkYAbBLeRB/description
*/

function groupsOfAnagrams(words) {
  var hash = {};
  var sorted = '';
  words.forEach((word) => {
    sorted = sortWord(word);
    if(!(sorted in hash)){
      hash[sorted] = [word];
    }else{
      hash[sorted].push(word);
    }
  });
  return Object.keys(hash).length;
}

sortWord = word => word.split('').sort().join('');

words = ["tea", "eat", "apple", "ate", "vaja", "cut", "java", "utc"]
console.log(groupsOfAnagrams(words));