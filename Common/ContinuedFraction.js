/*
A continued fraction is a method of writing a rational fraction in the following format:

a0 + 1/(a1+(1/(a2+(1/a3...)))

You are given an array a containing values a1, a2, ..., an for some integer value n. Your task is to build a reduced fraction from it and return the product of its numerator and denominator.

Example

For a = [2, 4], the output should be
CFP(a) = 36.

The fraction can be written as follows:

Thus, the output is 4 * 9 = 36.
*/

/*
CFP = a => {
    A = []
    C = []
    a.reverse().reduce((p,c,i) =>{
        //Primera iteracion
        if(i == 1){ 
            A[0] = 1
            A[1] = p
        }else{
            //Swap por el /1
            A[0] = C[1]
            A[1] = C[0]
        }
        C[0] = A[1]*c + A[0]
        C[1] = A[1]

    });
    if(a.length <= 1)
        return a[0]
    return C[0]*C[1]
}
*/

function CFP(a) {
    result = 0;
    A = [];
    B = [];
    C = [];

    //If we only have one element in the array
    if(a.length <= 1){
        return a[0]
    }
    
    a.reverse().reduce(function(prev,current,index,array){
        if(index == 1){
            A[0] = 1;
            A[1] = prev;
        }else{
            //Swap por el /1

            A[0] = C[1];
            A[1] = C[0];
        }
        C[0] = A[1]*current + A[0];
        C[1] = A[1];

    });
    if(a.length <= 1){
        return a[0]
    }
    B = reduce(C[0],C[1]);
    return B[0]*B[1];
}

//Reduce las fracciones
function reduce(numerator,denominator){
  var gcd = function gcd(a,b){
    return b ? gcd(b, a%b) : a;
  };
  gcd = gcd(numerator,denominator);
  return [numerator/gcd, denominator/gcd];
}

a = [2,4]
console.log(CFP(a));