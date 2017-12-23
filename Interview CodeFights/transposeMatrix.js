/*
Transponse a matrix
*/

function transposeMatrix(a) {
    // Transpose
    for(var i = 0;i<a.length;i++){
        for(var j = 0;j<i;j++){
            // Switch a[i][j] and a[j][i] 
            // With XOR swap
            a[i][j] ^= a[j][i]
            a[j][i] ^= a[i][j]
            a[i][j] ^= a[j][i]
         }
    }
    
    // Reverse columns
    for(var i in a){
        a[i] = a[i].reverse()
    }
    
    return a
}

a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
console.log(transposeMatrix(a));
