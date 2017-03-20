  /*
  https://codefights.com/challenge/nA88LDtnefwn2TYrq

  My little brother Jeff learns to read, and has already learnt a bunch of letters. Since boring letters memorizing isn't much fun, I would like to give him a book to read, which consists of various words. The thing is, I'm not sure if he will be able to read it.

  I've extracted all the words from the book, and converted them to lowercase. Now I need your help: given the letters Jeff knows and a word, determine if Jeff will be able to read the word, i.e. if all the letters in the word are familiar to him.

  Example

  For letters = "act" and word = "cat", the output should be
  AlphabetStudy(letters, word) ="Yes"`.

  Jeff knows letters 'a', 'c' and 't', which is enough to read "cat".

  For letters = "q" and word = "abc", the output should be
  AlphabetStudy(letters, word) ="No"`.

  Jeff knows only one letter, which is not enough to read the word.
  */

  function AlphabetStudy(letter, word) {
    word = [...word];
    for(var  i = 0; i < word.length; i++){
      if(letter.indexOf(word[i]) < 0) return "No";
    }
    return "Yes";
  }

  letter = "1";
  word = "xxpcunojvym";

  console.log(AlphabetStudy(letter,word))