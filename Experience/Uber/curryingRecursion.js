/*
Curry function
*/

// This is the text editor interface. 
// Anything you type or change here will be seen by the other person in real time.

function sum(a, b) {
    return a + b;
}

function sum3(a, b, c) {
    return a + b + c;
}

function curry(fn) {
    let n = fn.length;
    return function curriedFn(...a) { // [0]
        if (n === a.length) { // 2 ?=== 1 
            return fn(...a); // 
        } else {
            return function(b){
                return curriedFn(...a.concat(b));
            }
        }
    }
}

const curriedSum = curry(sum);
console.log(typeof curriedSum(0)); // function
console.log(curriedSum(1)(2));
/*try {
  curriedSum(1)(2)(3)(4) // 6
} catch(e) {
}*/
console.log(curriedSum(1, 2)(3)); // 6