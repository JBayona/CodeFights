/*
We define the middle of the array arr as follows:

if arr contains an odd number of elements, its middle is the element whose index number is the same when counting from the beginning of the array and from its end;
if arr contains an even number of elements, its middle is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.
Given array arr, your task is to find its middle, and, if it consists of two elements, replace those elements with the value of middle. Return the resulting array as the answer.

Example

For arr = [7, 2, 2, 5, 10, 7], the output should be
replaceMiddle(arr) = [7, 2, 7, 10, 7].

The middle consists of two elements, 2 and 5. These two elements should be replaced with their sum, i.e. 7.

For arr = [-5, -5, 10], the output should be
replaceMiddle(arr) = [-5, -5, 10].

The middle is defined as a single element -5, so the initial array with no changes should be returned.

https://codefights.com/arcade/code-arcade/list-forest-edge/APD5T5CybxTtfkdjL
*/

//Para reemplazar elementos en el array es de la siguiente forma:
/*
El primer parámetro del splice indica en que posición se va a agregar el nuevo elemento,
el segundo parámetro es cuantos elementos se quitarán para agregar el nuevo elemento que viene
en el tercer parámetro, el número de elementos empieza a partir de la posición que le indiquemos
con el primer parámetro.
*/
function replaceMiddle(arr) {
    var middle = arr.length/2;
    var removed = [];
    if(arr.length % 2 == 0){
        removed = arr.splice(middle-1, 2, arr[middle]+arr[middle-1]);
        return arr;
    }else{
        return arr;
    }
}