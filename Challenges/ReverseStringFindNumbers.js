/*
s: "ahsk"
"bitl"

cfebnb
dgfdod

aDwar
bExbs

faKzaPaf
lbLabQbl

ccc
hhh

SrSrSrSt
VaVaVaVu
*/

abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var counts = {};
    
tranformLetters = a =>{
    var result = '';
    var temp = 0;
    var flag = 0;
    countRepetitive(array);
    [...array].map(function(item){
        index = abc.indexOf(item.toLowerCase());
        flag = item == item.toUpperCase();
        //The pattern of the problem is number of repetitive elements * index (beginning at 0) + 1
        temp = (counts[item.toLowerCase()]*index)+1;
        if(temp > 25){ 
        	/*Necesitamos restar si es mayor a 25 hasta que no sea mayor para poder obtener la 
        	posición de la letra en el array considerando que va de 0-25*/
            while(temp > 25){
                temp -= 26;
            }
        }
        result += checkCapitalLetter(abc[temp], flag);
    });
    return result;
}

function checkCapitalLetter(letter, flag){
    if(flag){
        return letter.toUpperCase();
    }else{
        return letter;
    }
}

function countRepetitive(array){
    for(i in array){
        counts[array[i].toLowerCase()]=(counts[array[i].toLowerCase()]||0)+1; //increments count if element already exists
    }
}