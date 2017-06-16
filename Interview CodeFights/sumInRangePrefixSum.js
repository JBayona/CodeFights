/*
You have an array of integers nums and an array queries, where queries[i] is a pair of indices (0-based). 
Find the sum of the elements in nums from the indices at queries[i][0] to queries[i][1] (inclusive) for each query, then add all of the sums for all the queries together. Return that number modulo 109 + 7.

Example

For nums = [3, 0, -2, 6, -3, 2] and queries = [[0, 2], [2, 5], [0, 5]], the output should be
sumInRange(nums, queries) = 10.

The array of results for queries is [1, 3, 6], so the answer is 1 + 3 + 6 = 10.

https://codefights.com/interview/HMmEhePg2H6e7sCPo/description
*/

function sumInRange(nums, queries) {
  var memo = {};
  var sum = 0;
  var tmp = [];
  var result = 0;
  const mod = 1e9 + 7
  /*Obtenemos la lista de los prefix sum
  {0:3, 1:3, 2:1, 3:7, 4:4, 5:}
  */
  for(var i = 0; i < nums.length; i++){
    sum += nums[i];
    memo[i] = sum;
  }
  
  //Compute queries
  for(var i = 0; i < queries.length; i++){
    tmp = queries[i];
    /*Si el rango es de [0,2] por ejemplo
    solo necesitaos el prefix de dos que es lo que
    tiene toda la suma*/
    if(tmp[0] === 0){
      result += memo[tmp[1]];
    }else{
      /*Si es un rango por ejemplo [2,5] necesitamos la
      suma de [0-5] menos la suma de [0-1], esto por si es un número grande*/
      result += memo[tmp[1]] - memo[tmp[0]-1];
    }
  }
  //Para sumas negativas y positivas
  return ((result %mod)+mod)%mod;
}

nums = [3, 0, -2, 6, -3, 2];
queries = [[0, 2], [2, 5], [0, 5]]
console.log(sumInRange(nums, queries));


