/*
Avoid using C++'s std::next_permutation or similar features in other languages to solve this challenge. 
Implement the algorithm yourself, since this is what you would be asked to do during a real interview.

Given a string s, find all its potential permutations. The output should be sorted in lexicographical order.

https://codefights.com/interview/fwMMv4mASRuhxPzcP/description
*/

function stringPermutations(str){
    var array = getPermutations(str);
    array = removeDuplicates(array);
    return array.sort();
}

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

removeDuplicates = array =>array.filter((item,index) => array.indexOf(item) == index)

s = "CBA";
console.log(stringPermutations(s));



