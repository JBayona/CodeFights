/*
Note: Avoid using regular expressions and implement regex matching yourself in your solution, since this is what you would be asked to do during a real interview.

Implement regular expression matching with support for '.' and '*', given the following guidelines:
'.' Matches any single character.
'*' Matches zero or more of the element that comes before it.

The matching should cover the entire input string s. If the pattern p matches the input string s, return true, otherwise return false.

Example

For s = "bb" and p = "b", the output should be
regularExpressionMatching(s, p) = false;
For s = "zab" and p = "z.*", the output should be
regularExpressionMatching(s, p) = true;
For s = "caab" and p = "d*c*x*a*b", the output should be
regularExpressionMatching(s, p) = true.

https://codefights.com/interview/7JCwZm7X5djNcGPoM/companies/Ny2Sn8kGM6oJmnDSg/description
*/

function regularExpressionMatching(s, p) {
  lenS = s.length;
  lenP = p.length;

  if(lenP === 0){
    return lenS === 0;
  }

  if(p.charAt(1) === "*"){
    return regularExpressionMatching(s,p.substr(2)) || lenS > 0 && (s.charAt(0) === p.charAt(0) || p.charAt(0) === '.') && regularExpressionMatching(s.substr(1), p);
  }else{
    return lenS > 0 && (s.charAt(0) === p.charAt(0) || p.charAt(0) === '.')  && regularExpressionMatching(s.substr(1), p.substr(1));
  }
}


s = "caab";
p = "d*c*x*a*b";
console.log(regularExpressionMatching(s,p));