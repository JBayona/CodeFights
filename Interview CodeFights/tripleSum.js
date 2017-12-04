/*

Note: The expected time complexity for this task is O(n2).

You have an array a composed of exactly n elements. Given a number x, determine whether or not a contains three elements for which the sum is exactly x.

Example

For x = 15 and a = [14, 1, 2, 3, 8, 15, 3], the output should be
tripletSum(x, a) = false;

For x = 8 and a = [1, 1, 2, 5, 3], the output should be
tripletSum(x, a) = true.

The given array contains the elements 1,2, and 5, which add up to 8.
*/

function tripletSum(x, a) {
    var left, right;
    var arr_size = a.length;
 
    /* Sort the elements */
    a.sort((a,b) => a-b);
   
    for (var i=0; i<arr_size-2; i++){ //Dos iteraciones menos porque tenemos dos variables adicionales, left y right
        // To find the other two elements, start two index
// variables from two corners of the array and move
// them toward each other
        left = i + 1; //Left será siempre uno adelante del loop
        right = arr_size-1; //right siempre es el elemento de la derecha
        while (left < right){ //El loop sigue mientras no se crucen las variables
            if( a[i] + a[left] + a[right] == x){ //Si damos con la suma retornamos true
                return true;
            }
            else if (a[i] + a[left] + a[right] < x) //Si la suma es menor al elemento recorremos al indice izquiedo left
                left++;
            else //Si la suma es mayor, recorrmos el elemento de la derecha, no debería entrar aquí
                right--;
        }
    }
    return false;
}

x= 8
a= [1, 1, 2, 5, 3]
console.log(tripletSum(x,a));


Mine

function tripletSum(x, a) {
    var left, right;
    var arr_size = a.length;
 
   /* Sort the elements */
    a.sort((a,b) => a-b);
   
/* Now fix the first element one by one and find the
other two elements */
    for (var i=0; i<arr_size-2; i++)
    {
        
// To find the other two elements, start two index
// variables from two corners of the array and move
// them toward each other
        left = i + 1; 
// index of the first element in the
// remaining elements
        right = arr_size-1; // index of the last element
        while (left < right){
            if( a[i] + a[left] + a[right] == x){
                return true;
            }
            else if (a[i] + a[left] + a[right] < x)
                left++;
            else 
                right--;
        }
    }
    return false;
}



function tripletSum(x, a) {
    var n1 = 0;
    var n2 = 0;
    var n3 = 0;
    
    for (n1=0; n1<(a.length-2); n1++) {
        for (n2=n1+1; n2<(a.length-1); n2++) {
            for (n3=n2+1; n3<a.length; n3++) {
                if ((a[n1] + a[n2] + a[n3]) == x) {
                    return true;
                }
            }
        }
    }
    return false;
}


//Jazco


function tripletSum(x, a) {
    'use strict';
    
    /*
     * We need three numbers p, q and r from a to sum up to x.
     * We will attempt to find them such that p <= q <= r.
     * To do this we must sort a.
     */
    a.sort((a, b) => a - b);
    
    // Get p
    const length = a.length;
    for (let i = 0; i < length; i++) {
        const p = a[i];
        
        /*
         * Initialise the q and r pointers j and k at the edges
         * of the section between p and the end of a. Because a
         * is sorted, j can only increase and k can only
         * decrease.
         */
        let j = i + 1,
            k = length - 1;
        while (j < k) {
            const sum = p + a[j] + a[k];
            if (sum == x) return true;
            else if (sum > x) k--;
            else j++;
        }
        
        /*
         * The sums will only get bigger from here, so if j
         * never moved, the minimum sum is too large and it is
         * impossible to reach x now.
         */
        if (j == i + 1) break;
    }
    return false;
}



