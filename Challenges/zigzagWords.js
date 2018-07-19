/*
Here is a little fun in a blank page and a colorful mind.
Your 6 year old daughter is having fun writing words she sees around her. Sometimes from the newspaper,
sometimes from TV, sometimes from books lying around the house.

The problem is, she is not really great with vertical alignment. Or maybe it was on purpose, who knows.

She wrote all the words in a zigzag pattern (in l lines, starting at the bottom line), disregarding all whitespace characters.

For example, the word HOSPITAL in 3 lines is now:

    S       A 
  O   P   T   L
H       I  
You decide it is a good idea to teach her how people would try to read it if she does not write in a single line.

Since this would normally be read from left to right, one line at a time, it would look like "SA", "OPTL", and "HI",
so you show her the output "SAOPTLHI".

https://app.codesignal.com/challenge/tu9KcxX573X9qFxfN
*/

function printZigZag(str, n) {
  // Corner case (1 row)
  if(n === 1) {
    return str;
  }

  // Create array for the n rows
  let array = new Array(n).fill('');
  let len = str.length;
  // Use to define the direction of the insertion
  let down;
  // Inicial insertion, in this case from bottom to up
  let row = n-1;
  // Iterate over the sring
  for(let i = 0; i < len; i++) {
    /*Lets insert in the row in "zigzag" order*/
    array[row] += str[i];

    /*This conditions will mark when is time to
    insert up or down in the array*/
    if(row === n-1) {
      down = false;
    } else if(row === 0) {
      down = true;
    }

    down ? row++ : row--;
  }

  return array.join('');
}

str = 'hospital';
n = 3;
console.log(printZigZag(str, n))