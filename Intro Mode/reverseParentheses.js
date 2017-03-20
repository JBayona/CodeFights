/*
You are given a string s that consists of English letters, punctuation marks, whitespace characters and brackets. It is guaranteed that the brackets in s form a regular bracket sequence.

Your task is to reverse the strings in each pair of matching parenthesis, starting from the innermost one.

Example

For string "s = a(bc)de" the output should be
reverseParentheses(s) = "acbde".
*/

reverseParentheses = s => {
    while (m = s.match(/\(([^()]*)\)/))
        s = s.replace(m[0], m[1].split('').reverse().join(''))
    return s
}

function reverseParentheses(phrase) {
    while (word = phrase.match(/\(([^()]*)\)/))
        phrase = phrase.replace(word[0], word[1].split('').reverse().join(''))
    return phrase;
}

var word = 'foo(bar(baz))blim';
console.log(reverseParentheses(word));
//For string s = "a(bc)de", the output should be
//reverseParentheses(s) = "acbde".