/*
Given an array of words and a length l, format the text such that each line has exactly l characters and is fully justified on both the left and the right. Words should be packed in a greedy approach; that is, pack as many words as possible in each line. Add extra spaces when necessary so that each line has exactly l characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right. For the last line of text and lines with one word only, the words should be left justified with no extra space inserted between them.

Example

For
words = ["This", "is", "an", "example", "of", "text", "justification."]
and l = 16, the output should be

textJustification(words, l) = ["This    is    an",
                               "example  of text",
                               "justification.  "]
https://codefights.com/interview/ibANT8ZGc3shACBRF
*/
function textJustification(words, L) {
  var currentCount = 0;
  var currentElements = 0;
  var blankSpaces = 0;
  var spacesNeed = 0;
  var tmp = [];
  var result = [];
  for(var i = 0; i < words.length; i++){
    currentCount += words[i].length;
    if(currentCount + blankSpaces <= L){
      tmp.push(words[i]);
      currentElements ++;
      //At least we need one blank space per word.
      blankSpaces = currentElements >= 1 ? currentElements : 0;
    }
    //If it's the last word, we need left-justified
    if(i === words.length-1){
      spacesNeed = L - currentCount;
      result.push(addSpaces(tmp, spacesNeed, true));
    }else if(currentCount + blankSpaces + words[i+1].length > L){
      //Format
      spacesNeed = L - currentCount;
      result.push(addSpaces(tmp, spacesNeed));
      tmp = [];
      currentCount = 0;
      blankSpaces = 0;
      currentElements = 0;
    }
  }
  return result;
}

function addSpaces(array, spacesNeed, isLast){
  var format = '';
  var numberOfElements = isLast ? array.length: array.length-1;
  var spaces = 0;
  for(var i = 0; i < array.length; i++){
    //Left Justified
    if(isLast){
      if(i === array.length-1){
        spaces = numberOfElements > 0 ? Math.ceil(spacesNeed/numberOfElements): spacesNeed;
        format += array[i] + ' '.repeat(spaces);
        spacesNeed -= spaces;
        numberOfElements--;
      }else{
        format += array[i] + ' '.repeat(1);
        spacesNeed -= 1;
        numberOfElements--;
      }
    }else{
      spaces = numberOfElements > 0 ? Math.ceil(spacesNeed/numberOfElements): spacesNeed;
      format += array[i] + ' '.repeat(spaces);
      spacesNeed -= spaces;
      numberOfElements--;
    }
  }
  return format;
}

words = ["Looks", 
 "like", 
 "it", 
 "can", 
 "be", 
 "a", 
 "tricky", 
 "test"]
L = 25;
console.log(textJustification(words, L));
