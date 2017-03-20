//Diferentes tipos de obtener las permutaciones de una cadena

function permuteWays(message){
  //No devuelve todas las opciones
  array = FindAllPermutations(message);
  array = removeDuplicates(array);
  console.log(array);


  //Da todas las opciones posibles de forma recursiva
  permutations = getPermutations(message);
  permutations = removeDuplicates(permutations)
  console.log(permutations);

  //No acepta duplicados
  permuteArray = permut(message);
  console.log(permuteArray);

  //Usa el Algoritmo Heap para entregar todas las permutaciones posibles
  permuteAnagram = getAnagrams(message); //Heap algorithm, changing pairs of letters
  permuteAnagram = removeDuplicates(permuteAnagram);
  console.log(permuteAnagram);
}

//Opcion 1
function FindAllPermutations(str, index, buffer) {
    if (typeof str == "string")
        str = str.split("");
    if (typeof index == "undefined")
        index = 0;
    if (typeof buffer == "undefined")
        buffer = [];
    if (index >= str.length)
        return buffer;
    for (var i = index; i < str.length; i++)
        buffer.push(ToggleLetters(str, index, i));
    return FindAllPermutations(str, index + 1, buffer);
}

function ToggleLetters(str, index1, index2) {
    if (index1 != index2) {
        var temp = str[index1];
        str[index1] = str[index2];
        str[index2] = temp;
    }
    return str.join("");
}

//Opcion 2
function getPermutations(str){
    var permutations = [],
        nextWord = [],    
        chars = []
    ;
    if (typeof str === 'string') chars = str.split(''); 
    else if (typeof str === 'number') {
      str = str + ""; 
      chars = str.split('');
    }
    permutate(chars);
    return permutations;
    function permutate(chars){ 
        if(chars.length === 0)permutations.push(nextWord.join(''));            
        for (var i=0; i < chars.length; i++){ 
            chars.push(chars.shift());
            nextWord.push(chars[0]);     
            permutate(chars.slice(1)); 
            nextWord.pop();           
        }
    }
}

//Opcion 3
function permut(string) {
    if (string.length < 2) return string; // This is our break condition

    var permutations = []; // This array will hold our permutations

    for (var i=0; i<string.length; i++) {
        var char = string[i];

        // Cause we don't want any duplicates:
        if (string.indexOf(char) != i) // if char was used already
            continue;           // skip it this time

        var remainingString = string.slice(0,i) + string.slice(i+1,string.length); //Note: you can concat Strings via '+' in JS

        for (var subPermutation of permut(remainingString))
            permutations.push(char + subPermutation)

    }
    return permutations;
}

//Opcion 4 - Heap Algorithm
function swap(chars, i, j) {
    var tmp = chars[i];
    chars[i] = chars[j];
    chars[j] = tmp;
}

function getAnagrams(input) {
    var counter = [],
        anagrams = [],
        chars = input.split(''),
        length = chars.length,
        i;

    for (i = 0; i < length; i++) {
        counter[i] = 0;
    }

    anagrams.push(input);
    i = 0;
    while (i < length) {
        if (counter[i] < i) {
            swap(chars, i % 2 === 1 ? counter[i] : 0, i);
            counter[i]++;
            i = 0;
            anagrams.push(chars.join(''));
        } else {
            counter[i] = 0;
            i++;
        }
    }

    return anagrams;
}

removeDuplicates = array =>array.filter((item,index) => array.indexOf(item) == index)

message = "abab";
console.log(permuteWays(message));