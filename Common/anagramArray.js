//Anagram ["roma", "antimuon", "taser" ,"tan", "crap", "amor", "stare" ,"aster","tears", "ant", "mountain" , "carp", "nails", "rates", "omar", "snail", "mora"]

//Complejidad O(n*m)
function anagram(array){
    var obj = undefined;
    obj = anagramGrouper(array);
    //console.log(obj);
    printGroup(obj);
}

function anagramGrouper(words){ //Recibimos el arreglo de palabras
    const anagrams = {};
    words.forEach((word)=>{ //Recorremos el array de palabras
        const sortedWord = sortWord(word); //ordenamos cada palabra de nuestro array que estamos recorriendo
        if (anagrams[sortedWord]) { //Nuestra palabra ordenada es la key del objecto, si no esta en el objeto agregamos la propiedad al objeto e insertamos la palabra sin ordenar
            return anagrams[sortedWord].push(word); //Hacemos push de la palabra original sin ordenar, ya que nos interesa mantener el orden orifinal
        }
        anagrams[sortedWord] = [word]; //Si aun no esta la propiedad en el objeto creamos la propiedad usando la sorted work como key y agregamos a un array la palabra, en el array se meteran todos los anagramas
    });
    return anagrams;
}

function printGroup(anagramObj){
    for(prop in anagramObj){
        console.log(anagramObj[prop].join('-'));
    }
}

sortWord = word => [...word].sort().join('');


var array = ["roma", "antimuon", "taser" ,"tan", "crap", "amor", "stare" ,"aster","tears", "ant", "mountain" , "carp", "nails", "rates", "omar", "snail", "mora"];
anagram(array);