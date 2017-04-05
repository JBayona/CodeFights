/*
We define the weakness of number x as the number of positive integers smaller than x that have more divisors than x.

It follows that the weaker the number, the greater overall weakness it has. For the given integer n, you need to answer two questions:

what is the weakness of the weakest numbers in the range [1, n]?
how many numbers in the range [1, n] have this weakness?
Return the answer as an array of two elements, where the first element is the answer to the first question, and the second element is the answer to the second question.

Example

For n = 9, the output should be
weakNumbers(n) = [2, 2].

Here are the number of divisors and the specific weakness of each number in range [1, 9]:

1: d(1) = 1, weakness(1) = 0;
2: d(2) = 2, weakness(2) = 0;
3: d(3) = 2, weakness(3) = 0;
4: d(4) = 3, weakness(4) = 0;
5: d(5) = 2, weakness(5) = 1;
6: d(6) = 4, weakness(6) = 0;
7: d(7) = 2, weakness(7) = 2;
8: d(8) = 4, weakness(8) = 0;
9: d(9) = 3, weakness(9) = 2.
As you can see, the maximal weakness is 2, and there are 2 numbers with that weakness level.

https://codefights.com/arcade/code-arcade/labyrinth-of-nested-loops/oL7YuygJKtMSNLeJn
*/

function comfortableNumbers(L, R) {
    c = 0;
    for (var a = L; a < R; a++) {
        for (var b = a + 1; b <= R; b++) {
          sda = sumDigits(a);
          sdb = sumDigits(b);
          if (b >= a - sda && b <= a + sda && a >= b - sdb && a <= b + sdb) {
              c++;
          }
        }
    }
    return c;
}

function sumDigits(n) {
    return parseInt((""+n).split('').reduce((a,b)=>parseInt(a)+parseInt(b)));
}

function weakNumbers(n) {
    // Find the number of divisors 
    divisors = new Array(n+1)
    divisors.fill(0)
    for (var i=1; i<=n; i++)
        for (var j=i; j<=n; j+=i)
            divisors[j]++
            
    // Count the counts
    divisorsCounts = []
    // Compute the weakness
    weakness = new Array(n+1)
    weakness.fill(0)
    greatestWeakness = 0
    greatestWeaknessCount = 0
    
    for (var me=1; me<=n; me++) {
        divisorsCounts[divisors[me]] = 
            (divisorsCounts[divisors[me]] | 0) + 1
        for (var j=divisorsCounts.length-1; j>divisors[me]; j--)
            weakness[me] = (divisorsCounts[j] | 0) + weakness[me]
        if (greatestWeakness < weakness[me]) {
            greatestWeakness = weakness[me]
            greatestWeaknessCount = 1
        } else if (greatestWeakness == weakness[me]) {
            greatestWeaknessCount++
        }
    }
    
    return [greatestWeakness, greatestWeaknessCount]
}


function weakNumbers(n) {
  var divisors = {};
  var weakness = {};
  var greatestWeakness = 0
  var greatestWeaknessCount = 0
  //Get the number of divisors in the range [1,n]
  for(var i = 1; i <= n; i++){
    divisors[i] = getDivisors(i);
  }
  console.log(divisors);

  //Fill weakness with 0
  for(var i = 1; i <= n; i++){
    weakness[i] = 0;
  } 
  //Get the weakness
  for(var i = 1; i <= 9; i++){
    for(var j = 1; j <= i; j++){
      if(divisors[i] < divisors[j]){
        weakness[i]++;
      }
    }
  }
  console.log(weakness);
  //Get the greatestWeakness
  for(var prop in weakness){
    greatestWeakness = weakness[prop] > greatestWeakness ? weakness[prop] : greatestWeakness; 
  }
  //Count
  for(var prop in weakness){
    if(weakness[prop] == greatestWeakness){
      greatestWeaknessCount++;
    }
  }
  return [greatestWeakness, greatestWeaknessCount];
}

function getDivisors(n){
  var count = 0;
  var divisors = [];
  for(var i = 1; i <= n; i++){
      if(n % i == 0){
        divisors.push(i);
      }
  }
  //console.log(divisors);
  return divisors.length;
}


n = 500;
console.log(weakNumbers(n));