/*
Given an integer n, count the number of groups of consecutive 1 bits in its binary representation.

Example

For n = 1259, the output should be
GroupedBits(n) = 4.

The binary representation of 1259 is 10011101011, with the groups in bold.

Para este ejemplo debemos verificar si hay un 0 después o antes del uno, si sí, significa que es un grupo de unos.
*/

//Opcion 1
/*count = 0;
function GroupedBits(n) {
    [...n.toString(2)].map(function(item, index, array){
        if(index == 0 && item == 1) return count++; 
        if(item == 1 && array[index-1] == 0) return count++;
    });
    return count;
}*/

//Opction 2

/*function GroupedBits(n) {
    result = [...n.toString(2)].reduce(function(prev, curr, index,array){
        if(index == 1 && prev == 1)  return prev; 
        if(curr == 1 && array[index-1] == 0) return ++prev;
        return prev;
    });
    return result/1;
}*/

//Opcion 3
count = 0;
function GroupedBits(n) {
    [...n.toString(2)].map((item, index, array) =>
        (index == 0 && item == 1) ? count++ : 
        (item == 1 && array[index-1] == 0) && count++)
    return count;
}

//Opcion 4

function GroupedBits(n) {
    [...n.toString(2)].map((item, index, array) =>
        (index == 0 && item == 1) ? count++ : 
        (item == 1 && array[index-1] == 0) ? count++ : 0)
    return count;
}

n = 1259;
console.log(GroupedBits(n));