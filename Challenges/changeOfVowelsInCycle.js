/*
Given a text, reverse its characters and shift all of the vowels in a cycle.

The vowels are 'a', 'e', 'i', 'o', and 'u' and can be upper- and lowercase.

Example

For cycle = 1 and text = "potato", the output should be
changeOfVowelsInCycle(cycle, text) = "ototap".

Reversed, the text becomes "otatop". The vowels in the text are 'o', 'a' and 'o' (in this exact order). When shifted by one, they become 'o', 'o' and 'a', so the final answer is "ototap".

https://codefights.com/challenge/CA2ShAfLkb5D5JHCG

*/

function changeOfVowelsInCycle(cycle, text) {
  var vowels = [];
  var consonants = [];
  var result = '';

  text = text.split('').reverse().join('');
  for(var i = 0; i < text.length ; i++){
    if(isVowel(text[i])){
      vowels.push(text[i]);
    }
  }

  //Shifted
  size = vowels.length;
  //console.log(vowels);
  var shifted = new Array(size).fill(0);
  idx = ((size - cycle)%size + size)%size
  for(var i = 0; i < vowels.length; i++){
    shifted[i] = vowels[idx];
    idx = (idx+1) % size
  }

  //Format string output
  //console.log(shifted)
  for(var i = 0; i < text.length; i++){
    if(isVowel(text[i])){
      result += shifted.shift();
    }else{
      result += text[i];
    }
  }
  return result;
  //console.log(result);
}

function isVowel(element){
  element = element.toLowerCase();
  if(element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u'){
      return true;
  }else{
    return false;
  }
}

cycle = 3;
text = "this test is of potato";
console.log(changeOfVowelsInCycle(cycle, text));