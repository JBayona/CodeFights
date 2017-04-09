/*
Imagine a white rectangular grid of n rows and m columns divided into two parts by a diagonal line running from the upper left to the lower right corner. Now let's paint the grid in two colors according to the following rules:

A cell is painted black if it has at least one point in common with the diagonal;
Otherwise, a cell is painted white.
Count the number of cells painted black.

Example

For n = 3 and m = 4, the output should be
countBlackCells(n, m) = 6.

There are 6 cells that have at least one common point with the diagonal and therefore are painted black.



For n = 3 and m = 3, the output should be
countBlackCells(n, m) = 7.

7 cells have at least one common point with the diagonal and are painted black.



https://codefights.com/arcade/code-arcade/loop-tunnel/RcK4vupi8sFhakjnh
*/

function countBlackCells(n, m) {
    //z=Math.min(n,m)
    r=n+m-1
        
    for(i=1;i<n;i++)
        if ((i*m)%n==0) r++
            
    return r
}