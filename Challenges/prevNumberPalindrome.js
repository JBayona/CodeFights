/*
Given a positive integer x, find the greatest number smaller than x that is a palindrome.

A number is considered to be a palindrome if its string representation looks the same when written backwards as it does when written forwards. For example, 1991, 7 and 808 are all palindromes.

Example

For x = 16, the output should be
prevPalindrome(x) = 11.

11 is the greatest palindrome that is smaller than 16.

For x = 11, the output should be
prevPalindrome(x) = 9.
*/

function prevPalindrome(x) {
    var str = '';
    var origin = x
    while(x >= 0){
        str = ''+x;
        if(str == [...str].reverse().join('') && str != (origin+'')){
            return str*1;
        }
        x--;
    }
}

x =  11
console.log(prevPalindrome(x));


