/*
Given a sequence of integers, check whether it is possible to obtain a strictly increasing sequence by erasing no more than one element from it.

Example

For sequence = [1, 3, 2, 1], the output should be
almostIncreasingSequence(sequence) = false;
For sequence = [1, 3, 2], the output should be
almostIncreasingSequence(sequence) = true.
*/

function almostIncreasingSequence(sequence) {
  var mayor = undefined;
  count = 0;
  for(var i = 0; i < sequence.length; i++){
    if(mayor == undefined){
      mayor = sequence[i]
    }else{
      if(sequence[i] <= mayor && count >= 1){
        return false;
      }else if(sequence[i] <= mayor && count < 1){ //&& count != 0
        count++;
        mayor = sequence[i];
      }else{
        mayor = sequence[i];
      }
    }
  }
  return count <= 1;
}



sequence = [1, 3, 2, 1]

//Ratiorg needs statues of sizes 4, 5 and 7.

console.log(almostIncreasingSequence(sequence));