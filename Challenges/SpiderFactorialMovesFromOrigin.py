/*
A spider is standing at the origin (0, 0) of a Cartesian plane and wants to move to the point (X,Y). At each step, the spider can only move one square in two of the four directions: U(up), D(down,), L(left), R(right), depending on where it is heading:

if X ≥ 0, Y ≥ 0. The spider can only go U or R.
if X ≥ 0, Y ≤ 0. The spider can only go D or R.
if X ≤ 0, Y ≥ 0. The spider can only go U or L.
if X ≤ 0, Y ≤ 0. The spider can only go D or L.
Find the number of ways for the spider to get to the given point (X, Y).

Example

For X = 2 and Y = -2, the output should be
spiderMove(X, Y) = 6.

There are only 6 ways:

RRDD;
RDRD;
RDDR;
DRRD;
DRDR;
DDRR.
For X = -3 and Y = 0, the output should be
spiderMove(X, Y) = 1.

There is only one way:

LLL.
For X = 0 and Y = 0, the output should be
spiderMove(X, Y) = 1.

*/

//Formula (x+y)! / x!y! Número de combinaciones diferente para llegar al punto indicado (x,y) desde el origen (0,0)

//Python
def spiderMove(x,y):
    x = x if x>0 else -x //Operador ternario
    y = y if y>0 else -y
    return (factorial(x+y)/(factorial(x)*factorial(y)))
    
    
def factorial(num):
    if num == 0:
        return 1
    else:
        return num * factorial(num-1)

#Reducido		
def spiderMove(x,y):
    x = abs(x)
    y = abs(y)
    return (f(x+y)/(f(x)*f(y)))
    
 #Lambda   
f = lambda (n): 1 if n == 0 else  n * f(n-1)