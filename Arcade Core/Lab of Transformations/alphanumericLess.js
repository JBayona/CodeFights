/*
An alphanumeric ordering of strings is defined as follows: each string is considered as a sequence of tokens, where each token is a letter or a number (as opposed to an isolated digit, as is the case of lexicographic ordering). For example, the tokens of a string "ab01c004" are [a, b, 01, c, 004]. In order to compare two strings, you break them down into tokens and compare corresponding pairs of tokens with each other (i.e. first token of the first string, with the first token of the second string etc).

Here is how tokens are compared:

If a letter is compared with another letter, the usual order applies.
A number is always less than a letter.
When two numbers are compared, their values are compared. Leading zeros, if any, are ignored.
If at some point one string has no more tokens left while the other one still does, the one with fewer tokens is considered smaller.

If the two strings s1 and s2 appear to be equal, consider the smallest index i such that tokens(s1)[i] and tokens(s2)[i] (where tokens(s)[i] is the ith token of string s) differ only by the number of leading zeros. If no such i exists, the strings are indeed equal. Otherwise, the string whose ith token has more leading zeros is considered less.

Here are some examples of comparing strings using alphanumeric ordering.

"a" < "a1" < "ab"
"ab42" < "ab000144" < "ab00144" < "ab144" < "ab000144x"
"x11y012" < "x011y13"
Example

For s1 = "a" and s2 = "a1", the output should be
alphanumericLess(s1, s2) = true;
For s1 = "ab" and s2 = "a1", the output should be
alphanumericLess(s1, s2) = false.


https://codefights.com/arcade/code-arcade/lab-of-transformations/bBgu7NEfk2GoQuNzf/description
*/


/*
Rules:
1. Si se compara letra con letra, se hace de la forma normal, por orden.
2. Un número siempre es menor que una letra.
3. Cuando se comparan dos números, se ignoran leading zeros.
4. Si tienen diferentes números de tokens, el string con menos tokens, es menor
*/
function alphanumericLess(s1, s2) {
  var s1 = getTokens(s1);
  var s2 = getTokens(s2);
  var isS1Less = false;
  var hasActivated = false;
  //Regla 4
  if(s1.length < s2.length) return true;
  if(s2.length < s1.length) return false;

  for(var i = 0; i < s1.length; i++){
    //Regla 1
    if(isNaN(s1[i]) && isNaN(s2[i])){
      if(s1[i] < s2[i]){
        return true;
      }else if(s2[i] < s1[i]){
        return false;
      } //Regla 2
    }else if((!isNaN(s1[i]) && isNaN(s2[i])) || (!isNaN(s2[i]) && isNaN(s1[i]))){
      if(!isNaN(s1[i]) && isNaN(s2[i])){
        return true;
      }else{
        return false;
      } //Regla 3
    }else if(!isNaN(s1[i]) && !isNaN(s2[i])){
        if(parseInt(s1[i]) === parseInt(s2[i])){
          if(hasActivated){
            return isS1Less;
          }
          if(countLeadingZeros(s1[i]) > countLeadingZeros(s2[i])){
            isS1Less = true;
            hasActivated = true;
          }else{
            isS1Less = false;
            hasActivated = true;
          }
        }else if(parseInt(s1[i]) > parseInt(s2[i])){
          return false;
        }else{
          return true;
        }
    }
  }
  return isS1Less;
}

countLeadingZeros = n => {
  var count = 0;
  var hasLeadingZeros = false;
  for(var i = 0; i < n.length; i++){
    if(n[i] === "0" && i === 0){
      hasLeadingZeros = true
      count++;
    }else if(n[i] === "0" && hasLeadingZeros){
      count++;
    }else if(n[i] !== "0" && hasLeadingZeros){
      hasLeadingZeros = false;
    }
  }
  return count;
}

isNumber = n => !isNaN(n);

function getTokens(s){
  var tokens = [];
  var tmp = '';
  var isDigit = false;
  for(var i = 0; i < s.length; i++){
    if(isNaN(s[i])){
      isDigit = false;
      if(tmp !== ''){
        tokens.push(tmp);
        tmp = '';
      }
      tokens.push(s[i]);
    }else if(!isNaN(s[i]) && !isDigit){
      isDigit = true;
      tmp = s[i];
    }else if(!isNaN(s[i]) && isDigit){
      tmp += s[i];
    }
    if(i === s.length-1 && tmp != ''){
      tokens.push(tmp);
    }
  }

  return tokens;
}

/*
function alphanumericLess(s1, s2) {
    return s1.replace(/0/g,'')<s2.replace(/0/g,'')||s1.replace(/0/g,'')&&s1<s2
}
*/

s1 = "a01a001";
s2 = "a1a0001";
console.log(alphanumericLess(s1,s2));
