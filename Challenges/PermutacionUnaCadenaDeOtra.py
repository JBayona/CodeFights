#Determines if leftString is a permutation (rearrangement of characters) of the rightString. If so, return true; otherwise return false.
#Example
#For leftString = "abc" and rightString = "bca", the output should be
#IsPermutationOf(leftString, rightString) = true.

from collections import Counter
IsPermutationOf = lambda a,b : Counter(a) == Counter(b)