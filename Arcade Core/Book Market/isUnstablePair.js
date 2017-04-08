/*
Some file managers sort filenames taking into account case of the letters, others compare strings as if all of the letters are of the same case. That may lead to different ways of filename ordering.

Call two filenames an unstable pair if their ordering depends on the case.

To compare two filenames a and b, find the first position i at which a[i] ≠ b[i]. If a[i] < b[i], then a < b. Otherwise a > b. If such position doesn't exist, the shorter string goes first.

Given two filenames, check whether they form an unstable pair.

Example

For filename1 = "aa" and filename2 = "AAB", the output should be
isUnstablePair(filename1, filename2) = true.

Because "AAB" < "aa", but "AAB" > "AA".

For filename1 = "A" and filename2 = "z", the output should be
isUnstablePair(filename1, filename2) = false.

Both "A" < "z" and "a" < "z".

https://codefights.com/arcade/code-arcade/book-market/Ky2mjgmxnWLi6KNPp
*/

function isUnstablePair(filename1, filename2) {
  /*Verificamos si inicialmente un archivo es mayor que otro y si si, verificamos el otro haciendolo
  pero ahora conviriendo en mayusculas el primero, si esto se cumple significa que si depende
  de las mayusculas, hacemos la misma verificacion pero ahora con el segundo archivo*/
    return (filename2 < filename1 && filename2 > filename1.toUpperCase()) ||
        (filename1 < filename2 && filename1 > filename2.toUpperCase())
}


filename1 = "aa";
filename2 = "AAB"
console.log(isUnstablePair(filename1, filename2));