equationSystem = e => (
    // Split into arrays of coeffieciens
    // If an variable doesn't have a coefficient, turn it into a 1
    s = e.map(x => x.split(/[xyz=]+/).map(x => x && x*0+1 ? x : x+1)),
    // Sequentially reduce the array by subtracting row n by row m 
    // It calls in this order r(1, 0), r(2, 0), r(2, 1), r(0, 1), r(0, 2), r(1, 2)
    [1,2,2,0,0,1].map((n, j) => s[n] = s[n].map((x, i) => x - s[m = j >> 1][i] * s[n][m] / s[m][m])), 
    //The array is now in the form:
    // [x, 0, 0, a]
    // [0, y, 0, b]
    // [0, 0, z, c]
    // Divide the constant by the coefficient in the i-th place and round to the nearest whole number 
    s.map((x, i) => (k = x[3] / x[i]) + k % 1 | 0)
)

// Function to reduce the n-th coefficient in the n-th row to zero
// Multiply row m by a factor to equalize the m-th coefficient and then subtract it from row n
// This function is inlined above
// r = (n, m) => s[n] = s[n].map((x, i) => x  - s[m][i] * s[n][m] / s[m][m])