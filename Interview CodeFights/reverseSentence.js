/*
Reverse the order of words in a given string sentence. You can assume that sentence does not have any leading, trailing or repeating spaces.

Example

For sentence = "Man bites dog", the output should be
reverseSentence(sentence) = "dog bites Man".

https://codefights.com/interview/DGnaZ3J5hnWS6xYJy/description
*/

function reverseSentence(sentence) {
    return sentence.split(" ").reverse().join(" ");
}


sentence = "Man bites dog";
console.log(reverseSentence(sentence));