/*
Avoid using C++'s std::next_permutation or similar features in other languages to solve this challenge. 
Implement the algorithm yourself, since this is what you would be asked to do during a real interview.

Given a string s, find all its potential permutations. The output should be sorted in lexicographical order.

https://codefights.com/interview/fwMMv4mASRuhxPzcP/description
*/

function nextPermutation(s) {
    var lenM1 = s.length-1;
    
    /*Se hace el scan de atrás hacia adelante hasta encontrar
    el primer elemento que sea menor que su sucesor, este tendrá
    el valor de i, esto es de todo el array*/
    for(var i=lenM1; i-- && s[i]>=s[i+1] ;) ;

    /*Hacemos reverse de todo lo que está después de i  que es
    el primer elemento menor de su sucesor*/
    s.slice(i+1).map((e,k) => s[lenM1-k] = e);
    
    //Significa que hemos terminado y que no hay mas combinaciones
    if(i<0) return false;
    
    //Go back to find the first value greater than s[i]
    /*Regresamos y tomamos el primer elemento que sea mayor que i
    para hacer swap, empezamos con la posición de i*/
    var temp = s[i];
    for(var j=i; ++j<lenM1 && temp>=s[j]; ) ;
    
    //Swap i and j values
    s[i] = s[j];
    s[j] = temp;
    
    return true;
}

function stringPermutations(s) {
    s = s.split('').sort();
    var output = [];
    do {
        output.push(s.join(''));
    } while(nextPermutation(s));
    return output;
}

s = "CBA"
console.log(stringPermutations(s));



