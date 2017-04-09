/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

Example

For statues = [6, 2, 3, 8], the output should be
makeArrayConsecutive2(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.

https://codefights.com/arcade/code-arcade/list-forest-edge/bq2XnSr5kbHqpHGJC
*/

function makeArrayConsecutive2(sequence) {
  min = Math.min(...sequence);
  max = Math.max(...sequence);
  result = 0;
  for(var i = min; i <= max; i++){
    if(!sequence.includes(i)){
      result++;
    }
  }
  return result;
}

sequence = [-1, -3]
console.log(makeArrayConsecutive2(sequence));

//Opción recursiva

function makeArrayConsecutive2(sequence) {
  min = Math.min(...sequence);
  max = Math.max(...sequence);
  result = 0;
  return getMissing(sequence,result,min,max);
}

function getMissing(sequence,result, min, max){
  if(max <= min ) return result;
  else{
     if(!sequence.includes(max)){
      ++result;
    }
  }
    return getMissing(sequence,result,min,--max);  
}