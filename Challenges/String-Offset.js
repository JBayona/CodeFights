/*
You are given a chain of digits. The first element of the chain is the initial offset. Your task is to calculate the total offset, where offset is the sum of differences between two consecutive digits.

Example

For chain = "14839", the output should be
offsets(chain) = 6.

The total offset is calculated as follows:
1 + ((8 - 4) + (3 - 8) + (9 - 3)) = 1 + (4 - 5 + 6) = 6.
*/

//JS

/*En javascript si utilizamos operadores binarios sobre una cadena, primero
los convierte en un numero y despues los evalue, es por eso que lo revertimos en el ejemplo
*/
function offsets(chain) {
    var init = parseInt(chain[0]);
    var offset = 0;
    for(var i =1; i < chain.length; i++){
        if(chain[i+1]){
            offset += parseInt(chain[i+1]-(chain[i]));
        }
    }
    return offset+init;
}

//Con reduce sin arrow functions
offsets = chain => {
    return chain.split('').reduce(function(previous, current, index, array){
        if(index < 2){
            return array[0]/1;
        }else{
            return previous += current - array[index-1];
        }
    });
}

//Reduce con arrow functions
offsets = chain => chain.split('').reduce((previous, current, index, array) => index < 2 ? array[0]/1 : previous += current - array[index-1])

var chain = '14839';
console.log(offsets(chain));

//Vandre

//Solution 1: Using slice
//s[0] and s[1] do not need to be coerced because JS automatically coerces them when substracting.
//http://stackoverflow.com/questions/24383788/why-does-javascript-handle-the-plus-and-minus-operators-between-strings-and-numb


offsets=s=> s[0] - s[1]  +  +s.slice(-1)


//Solution 2: Using spread operator and pop (34 chars)
//offsets=s=> s[0] - s[1] + +[...s].pop()


//Solution 3: Using Reduce (57 chars)
//offsets=h=>[...h].reduce((p,c,i,a)=> i<2 ? a[0]:c-a[i-1]+ +p)