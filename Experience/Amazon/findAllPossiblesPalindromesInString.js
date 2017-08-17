/*
2. Write code to find all Palindromes in a given sample string.
Example: "pop this tacocat seems nice at noon"
"pop", "s tacocat s", " tacocat ", "tacocat", "acoca", "coc", "noon"
*/

//Function to iterate over all of our letters
findAllPalindromes = str =>{
  let result = [];
  let findPalindrome;
  str.split('').forEach((character,index) => {
    findPalindrome = hasPalindrome(character, str, index);
    if(findPalindrome){
      result.push(findPalindrome);
    }
  });
  return result;
}

//Check if we find a palindrome in the next same letter, that is our break point
hasPalindrome = (character, str, index) => {
  for(let i = index + 1; i < str.length; i++){
    if(character === str[i]){
       if(checkPalindrome(str.slice(index, i+1))){
          return str.slice(index, i+1);
       }else{
          return "";
       }
    }
  }
}

//Function to verify if it´s a palindrome
checkPalindrome = str => str === str.split('').reverse().join('');

str = "pop this tacocat seems nice at noon";
console.log(findAllPalindromes(str));