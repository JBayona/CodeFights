/*
Your boss likes to prank you by sending you the sentence he wants to say as a list of words, with each word given as a list of characters. You are already tired of a such low level prank, and decide to write a program that would turn the sentences your boss sends to you into a readable form.

Remember to put a space between two words and put a period in the end of the sentence. Your boss is weird but kind enough not to send you sentences with other punctuation.

Note: if you want an additional challenge, try solving this challenge locally without using STL and C Runtime Library with the only exception being malloc(). Therefore the function you should the implement has the following format:

char* MakeSentence(char* words[])
{
    // function body
}
Example

For

words = [["G","o","o","d"], 
         ["m","o","r","n","i","n","g"]]
the output should be
makeSentence(words) = "Good morning.".
*/


//Primera opcion
/*makeSentence = words => {
    str = '';
    words.forEach((word,index) => index == words.length-1 ? str += word.join('') : str +=  word.join('')+' ');
    return str+'.';
}*/

//joinWords = word => word.join('');

//Segunda opcion
//Usamos primero el map para tener un array unido, en el primer map vamos a tener ["Good","morning"] despues haceemos el ultimo join para unir las palabras con un espacio para que nos de "Good morning", finalmente concatenamos un punto al final del array.

makeSentence = words => words.map(word => word.join('')).join(' ')+'.';


words = [["G","o","o","d"], 
         ["m","o","r","n","i","n","g"]];
console.log(makeSentence(words))
