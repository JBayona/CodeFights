/*
Determines if leftString is a permutation (rearrangement of characters) of the rightString. If so, return true; otherwise return false.

Example

For leftString = "abc" and rightString = "bca", the output should be
IsPermutationOf(leftString, rightString) = true.
*/

/*
@jromo It's to convert the array to a string. It's actually not a sum, but string concatenation. 
It might seem weird at first, but whenever one of operands to + are not a Number, it acts as string concatenation. 
To do this, it casts both operands to strings, so an array [ "a", "b", "c" ] becomes "a,b,c" and 0 becomes "0", which makes the result 
"a,b,c0".
s=a=>[...a].sort()+1
IsPermutationOf = (l, r) => s(l) == s(r)


s = sorted
IsPermutationOf = lambda l, r:s(l) == s(r)
*/

IsPermutationOf = (a, b) => a.split("").sort().join() == b.split("").sort().join();

function IsPermutationOf(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    return a.split("").sort().join() === b.split("").sort().join();
}