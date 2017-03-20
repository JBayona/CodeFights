/*
You need to figure out a way to find all duplicates in a list of numbers numberList provided to you, and return them in an array sorted in the order they appear in numberList.

Additional constraints for those who really like challenges:

you're not allowed to create more variables;
all operations should be done on the original list;
the run time should be linear.
Of course, you can choose to ignore these constraints and submit a solution but where is fun in that?

Example

For numberList = [1,2,1,1,3,2,4,6,5], the output should be
GetDuplicates(numberList) = [1,2].
*/

function getDuplicates(numberList){

//Con esto conservamos el orden en el que aparecen, falta eliminar los duplicados, con la condicion del and, eliminamos los duplicados y asi tenemos el mismo orden sin duplicados
var duplicates = numberList.filter((item, index, array) => array.indexOf(item) !== array.lastIndexOf(item) && array.indexOf(item) == index);
  return duplicates;

}

numberList = [2,2,1,1,3,1,4,6,5];
console.log(getDuplicates(numberList));