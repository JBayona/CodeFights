//====================================================
function getPermutations(str){
    //Enclosed data to be used by the internal recursive function permutate():
    var permutations = [],  //generated permutations stored here
        nextWord = [],      //next word builds up in here     
        chars = []          //collection for each recursion level
    ;
    //---------------------
    //En esta seccion validamos el string para hacer un array y convertirlo en un array
    //split words or numbers into an array of characters
    if (typeof str === 'string') chars = str.split(''); 
    else if (typeof str === 'number') {
      str = str + ""; //convert number to string
      chars = str.split('');//convert string into char array
    }
    //============TWO Declaratives========
    permutate(chars);
    return permutations;
    //===========UNDER THE HOOD===========
    //Mediante un closure tenemos acceso a al arreglo de nuestro string
    function permutate(chars){ //recursive: generates the permutations
        if(chars.length === 0)permutations.push(nextWord.join(''));            
        for (var i=0; i < chars.length; i++){ //Recorremos todo el array
            chars.push(chars.shift());  //rotate the characters, quitamos el primer char del array y lo ponemos hasta el final
            nextWord.push(chars[0]);    //use the first char in the array, pone el primer caracter en el array de nextWords         
            permutate(chars.slice(1));  //Recurse: array-less-one-char, manda recursivamente el array sin el primer caracter
            nextWord.pop();             //clear for nextWord (multiple pops)
        }
    }
    //--------------------------------
}//==============END of getPermutations(str)=============

console.log(getPermutations("abcd"))