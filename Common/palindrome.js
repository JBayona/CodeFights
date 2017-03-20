console.log(isPalindrome("level"));                   //true
console.log(isPalindrome("levels"));                  //false
console.log(isPalindrome("A car, a man, a maraca"));  //true

function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
}