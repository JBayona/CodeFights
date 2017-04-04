/*
You are taking part in an Escape Room challenge designed specifically for programmers. In your efforts to find a clue, you've found a binary code written on the wall behind a vase, and realized that it must be an encrypted message. After some thought, your first guess is that each consecutive 8 bits of the code stand for the character with the corresponding extended ASCII code.

Assuming that your hunch is correct, decode the message.

Example

For code = "010010000110010101101100011011000110111100100001", the output should be
messageFromBinaryCode(code) = "Hello!".

The first 8 characters of the code are 01001000, which is 72 in the binary numeral system. 72 stands for H in the ASCII-table, so the first letter is H.
Other letters can be obtained in the same manner.

https://codefights.com/arcade/intro/level-12/sCpwzJCyBy2tDSxKW/description
*/

function messageFromBinaryCode(code) {
  var tmp = "";
  var result = "";
  for(var i = 0; i < code.length; i++){
    if(i%8 == 0 && i != 0){
      result += String.fromCharCode(parseInt(tmp,2));
      tmp = '';
      tmp += code[i];
    }else{
      tmp += code[i];
    }
  }
  return result += String.fromCharCode(parseInt(tmp,2));
}

function messageFromBinaryCode(code) {
   return code.match(/.{8}/g).reduce((a,b)=>a+String.fromCharCode(parseInt(b,2)),"")    
}

code = "010110010110111101110101001000000110100001100001011001000010000001101101011001010010000001100001011101000010000001100000011010000110010101101100011011000110111100101110";
console.log(messageFromBinaryCode(code));