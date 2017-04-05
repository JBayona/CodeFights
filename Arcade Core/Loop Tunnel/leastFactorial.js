/*
Given an integer n, find the minimal k such that

k = m! (where m! = 1 * 2 * ... * m) for some integer m;
k >= n.
In other words, find the smallest factorial which is not less than n.

Example

For n = 17, the output should be
leastFactorial(n) = 24.

17 < 24 = 4! = 1 * 2 * 3 * 4, while 3! = 1 * 2 * 3 = 6 < 17).

https://codefights.com/arcade/code-arcade/loop-tunnel/7BFPq6TpsNjzgcpXy
*/

//Primera opcion
function leastFactorial(n) {

	result = 1;
	for(var i = 1; ; i++){
		result *=i;
		if(result >= n){
			return result;
		} 
	}

}

//Segunda opcion

result = 1;
i = 1;
function leastFactorial(n) {
    return factorialVariation(n,result);
}


function factorialVariation(n,result){
    if(result >= n){
        return result;
    }else{
        return factorialVariation(n,result * i++);
    }
}

//Tercera opcion
result = 1;
i = 1;
leastFactorial = n => factorialVariation(n,result);
factorialVariation = (n,result) => result >= n ? result : factorialVariation(n,result * i++);

n = 17
console.log(leastFactorial(n))