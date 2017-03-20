/*
You have two integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers, where one number is taken from a and the other from b, that can be added together to get a sum of v. Return true if such a pair exists, otherwise return false.
Example
For a = [1, 2, 3], b = [10, 20, 30, 40], and v = 42, the output should be
sumOfTwo(a, b, v) = true.
*/

function sumOfTwo(a, b, v) {

    if(a.length == 0 || b.length == 0){
      return false;
    }

    var complement = 0;
    var element = 0;
    b = sort(b);
    var result = false;

    for(var i = 0; i < a.length; i++){
       element = a[i];
       complement = v - element;
       result = binarySearch(b, complement);
       if(result){
         return true;
       }
    }
    return false;
}

function binarySearch(items, value){

    var startIndex  = 0,
        stopIndex   = items.length - 1,
        middle      = Math.floor((stopIndex + startIndex)/2);

    while(items[middle] != value && startIndex < stopIndex){

        //adjust search area
        if (value < items[middle]){
            stopIndex = middle - 1;
        } else if (value > items[middle]){
            startIndex = middle + 1;
        }

        //recalculate middle
        middle = Math.floor((stopIndex + startIndex)/2);
    }

    //make sure it's the right value
    //return (items[middle] != value) ? -1 : middle;
   return (items[middle] != value) ? false : true;
}

sort = array => array.sort((a,b) => a - b);

a = [10, 1, 5, 3, 8]
b = [100, 6, 3, 1, 5]
v = 4;
console.log(sumOfTwo(a,b,v))


//Opcion 2
sumOfTwo = (a, b, v) => (
    b = new Set(b),
    a.some(e => b.has(v - e))
)

//Opcion 3 Copthuy

function sumOfTwo(a, b, v) {
    for(i in a){
        if(b.indexOf(v-a[i]) !== -1) return true
    }
    return false
}