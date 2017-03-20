#You're given two integers, n and m. Find position of the rightmost pair of equal bits in their binary representations (it is guaranteed that such a pair exists), counting from right to left.
#Return the value of 2position_of_the_found_pair (0-based).
#Example
#For n = 10 and m = 11, the output should be equalPairOfBits(n, m) = 2.
#1010 = 10102, 1110 = 10112, the position of the rightmost pair of equal bits is the bit at position 1 (0-based) from the right in the binary representations.
#So the answer is 21 = 2.

#Python

def equalPairOfBits(n, m):
    n = bin(n)[2:]
    m = bin(m)[2:]

    if len(n) < len(m):
   n = zeroPad(n,len(m))
    else:
         m = zeroPad(m,len(n))
         
    n = list(reversed(n))
    m = list(reversed(m))
    
    for i in range(len(n)):
   if(n[i] == m[i]):
       return 2**i

def zeroPad (str, tam):
    if len(str) == tam:
        return str;
    return zeroPad('0' + str,tam)