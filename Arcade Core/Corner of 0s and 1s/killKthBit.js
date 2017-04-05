/*
In order to stop the Mad Coder evil genius you need to decipher the encrypted message he sent to his minions. 
The message contains several numbers that, when typed into a supercomputer, will launch a missile into the sky blocking 
out the sun, and making all the people on Earth grumpy and sad.

You figured out that some numbers have a modified single digit in their binary representation. More specifically, 
in the given number n the kth bit from the right was initially set to 0, but its current value might be different.
 It's now up to you to write a function that will change the kth bit of n back to 0.

Example

For n = 37 and k = 3, the output should be
killKthBit(n, k) = 33.

37 = 100101 ~> 100001 = 33.

For n = 37 and k = 4, the output should be

killKthBit(n, k) = 37.

The 4th bit is 0 already (looks like the Mad Coder forgot to encrypt this number), so the answer is still 37.

Input/Output

[time limit] 4000ms (js)
[input] integer n

Constraints:
0 ≤ n ≤ 231 - 1.

[input] integer k

The 1-based index of the changed bit (counting from the right).

Constraints:
1 ≤ k ≤ 31.

https://codefights.com/arcade/code-arcade/corner-of-0s-and-1s/b5z4P2r2CGCtf8HCR
*/

function killKthBit(n, k) {
    var dec = n.toString(2);
    dec =[...dec].reverse();
    dec[k-1] = '0';
    return (parseInt(dec.reverse().join(''),2)); 
}

function killKthBit(n, k) {
  return (n &= ~(1 << k-1));
}

n = 37
k = 3
console.log(killKthBit(n,k))
