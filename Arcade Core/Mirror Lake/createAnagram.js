/*
You are given two strings s and t of the same length, consisting of uppercase English letters. Your task is to find the minimum number of "replacement operations" needed to get some anagram of the string t from the string s. A replacement operation is performed by picking exactly one character from the string s and replacing it by some other character.

Example

For s = "AABAA" and t = "BBAAA", the output should be
createAnagram(s, t) = 1;
For s = "OVGHK" and t = "RPGUC", the output should be
createAnagram(s, t) = 4.

https://app.codesignal.com/arcade/code-arcade/mirror-lake/BsShkFDfbkWxozmMN

La idea es contar las letras de cada string, almacenarlas en un hash y 
al final hacer la resta de hash tmp1 - tmp2 para ver qué es lo que le falta a tmp1
*/

function createAnagram(s, t) {
    let tmp1 = countLetters(s);
    let tmp2 = countLetters(t);
    console.log(tmp1, tmp2)
    let count = 0;
    let result = 0;
    
    for(let prop in tmp2) {
        if(prop in tmp1) {
            count = tmp2[prop] > tmp1[prop] ? 0 : tmp1[prop] - tmp2[prop];
            result += count;
        } else {
            result += tmp2[prop];
        }
    }
    return result;
}

const countLetters = s => {
    let hash = {};
    for(let i = 0; i < s.length; i++) {
        if(s[i] in hash) {
            hash[s[i]]++
        } else {
            hash[s[i]] = 1
        }
    }
    return hash;
}