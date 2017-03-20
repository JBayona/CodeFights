 //p = 0
    //chainNames = n => //chainNames es el nombre de la funcion y n es la variable que toma todos los parametros, en este caso el array
      //n.map( item => //primera iteracion item=Raymond
        //p = n.find(b => ( //primera vuelta b = Raymond
            //c = a => a.slice(-1).toUpperCase() == b[0], //a tiene Raymond, saca la ultima letra y lo compara 
            //p ? c(p) : !n.some(c) //some checa en el array alguna condicion especificada, regresa true si por lo menos uno lo tiene, false en caso contrario
        //))
      //)

/*
 * Because the condition given, it can be proved that there exists exactly one name
 * that begins with a letter all names don't end with. This is the head of chain.
 * Then again by the condition, the chain can be formed uniquely after the head is identified.
*/


//1era iteracion
/*n.map( item => //primera iteracion item=Raymond
        p = n.find(b => ( //primera vuelta b = Raymond
            c = a => a.slice(-1).toUpperCase() == b[0], //a tiene Raymond, saca la ultima letra y lo compara con b[0] = R
            p ? c(p) : !n.some(c) //some checa en el array alguna condicion especificada, regresa true si por lo menos uno lo tiene, false en caso contrario
        ))
      )*/

/*En este caso es false, despues se va una vuelta y "a" ahora tiene Nora, como no es igual, ahora "a" tiene Daniel y su ultima letra no es igual a la b[0] que en este caso es R de Raymond, llega hasta Peter en donde su ultima letra si es igual a la primera de Raymon, luego b cambia a ser Nora y se intera nuevamente sobre todo el array para encontrar quien tiene su primera letra, es decir N, que en este caso es Esteban
 */   

chainNames = n =>
{
    o = []
    
    // Function tests if name B can follow name A
    F = (A,B) => A.slice(-1).toUpperCase() ===  B[0]
    x = n.findIndex( m => !n.find( n => F( n, m ) ) )
    // Add m to output array and remove from input array
    o.push( n.splice( x , 1 )[0] )
    
    while(n[0])
    {
        // Look for a name that can follow the one we found earlier
        x = n.findIndex( n => F(o[o.length-1],n))
        // Add y to output array and remove from input array
        o.push( n.splice( x , 1 )[0] )
    }
    return o;
}


 var names = ["Raymond", 
 "Nora", 
 "Daniel", 
 "Louie", 
 "Peter", 
 "Esteban"];


/*
My daughter was given the following task: given the first number x and the second number y, find the nth number. The description was quite vague, but my daughter managed to do the task.

Can you?

Example

Turns out, for x = 7, y = 10 and n = 5,
the output should be
nthPlace(x, y, n) = 19.

Encontrar el valor de la serie con n numeros de la serie

x: 7
y: 10
n: 5
Output:
Empty
Expected Output:
19
Console Output:
Empty

*/

function nthPlace(x, y, n) {
    var incr = y-x;
    for(var i=1; i < n; i++){
      x += incr;
    }

  return x;
}

nthPlace = (x, y, n) => (y - x) * --n + x

/*
Some positive integers can be written as the difference of the squares of 2 positive integers, i.e., n = a² - b².

For instance, 3 can be written as 2² - 1².

Some numbers can be written in that format in more than one way. For example, 15 can be written as 4² - 1² or 8² - 7².

Your task is, given a positive integer n, to calculate the number of such pairs (a, b), where n = a² - b² and both a and b are positive integers.

Example

For n = 1, the output should be
MoreTimesLess(n) = 0.

It is impossible to write 1 as a difference of two squares.

For n = 3, the output should be
MoreTimesLess(n) = 1.

3 = 22 - 12.

For n = 15, the output should be
MoreTimesLess(n) = 2.

15 = 42 - 12 = 82 - 72.

Input/Output

[time limit] 4000ms (js)
[input] string n

Constraints:
1 ≤ n ≤ 1013.

[output] integer

The number of pairs (a, b) such that n = a² - b², where a and b are positive integers.

*/

MoreTimesLess = n => {
    r = i = 0
    for(; ++i*i < n;)
        r += n/i%2 == i%2
    return r
}

/*
Given two numbers n and m, find their digital average.

The digital average can be calculated only if all digits in their sum are even. To obtain the digital average, each digit of this sum should be divided by 2.

If the digital average cannot be calculated, return -1 instead.

Example

For n = 273 and m = 415, the output should be
middleNumber(n, m) = 344.

n + m = 688. 6 / 2 = 3, and 8 / 2 = 4. Thus, the answer is 344.

This is my first challenge. Please have fun!

[time limit] 4000ms (js)
[input] integer n

Constraints:
1 ≤ n ≤ 500.

[input] integer m

Constraints:
1 ≤ m ≤ 500.

[output] integer

An integer value which is a middle number of the two given integer else -1 is returned.
*/

middleNumber = (n, m) => -/[51937]/.test(n += m) | n/2

/*
There is a bulding consisting of n floors.

Floor A is called an edge floor if for each floor from 1 to A inclusive if the bottle falls out of the window it does not break, and for each floor from A + 1 to n inclusive the bottle does break if you throw it out from there.

It is known that n cannot be the edge floor, and that the edge floor exists.

You have more than enough bottles. Find the maximum number of times you have to throw the bottles out of the window to find edge floor, assuming that you're using the optimal strategy.

Example

For n = 2, the output should be
Bottles_1(n) = 0.

2 can't be the edge floor, so the edge floor is the first one, and there's no need to throw any bottles.

For n = 3, the output should be
Bottles_1(n) = 1.

The edge floor is either the first, or the second. If you throw a bottle from the second floor it either breaks, which means that the first floor is edge, or doesn't, which means that the second floor is the edge one.

Input/Output

[time limit] 4000ms (js)
[input] integer n

The number of floors.

Constrains:
2 ≤ n ≤ 109.

[output] integer

The maximum number of times you have to throw the bottles assuming you're applying the optimal strategy.

*/

Bottles_1 = n => Math.log2(n - 2) + 1 | 0

/*
First, some preliminary jargon: recall that the depth of a node of a binary tree is the length of the path from the root to the node.

Furthermore, a node of a binary tree is called a leaf if it has no children. Otherwise, the node is said to be an internal node.

A tree is said to be full if every internal node has two children (in other words, no node has exactly one child).

Now, you are given an array that contains the depth of each leaf in the tree in arbitrary order. From this array, determine whether or not the tree is full. Return true if the tree is full, and false otherwise.

Example

For leaf_array = [0], the output should be
treeIsFull(leaf_array) = true.

The given array represents a tree with a single node.

For leaf_arry = [3, 2, 3, 3], the output should be
treeIsFull(leaf_array) = false.

The given array may represent this tree (or similar to it with the same nodes configuration):

Note, that the answer would be the same for the same array with the elements ordered differently.

Input/Output

[time limit] 4000ms (js)
[input] array.integer leaf_array

Array containing the depth of each leaf in a random order.

Constraints:
1 ≤ leaf_array.length ≤ 30,
0 ≤ leaf_array[i] ≤ 10.

[output] boolean

true if the tree is full, false otherwise.
*/

//Expand all leafs to max depth and see if they add up to 1024. Otherwise there are missing leafs
t = 1024
treeIsFull = l => l.map(e => t -= 1 << 10 - e) | !t

/*

You are given a matrix that contains booleans. If an element is true, it means that it is colored black, otherwise it is colored white.

Your task is to find perimeter of the objects colored black.

Example

For

matrix = [[false, false, false,  true, false],
          [false,  true,  true,  true, false],
          [false, false, false,  true, false],
          [false,  true,  true,  true, false],
          [ true,  true, false, false, false]]
the output should be
MatrixPerimeter(matrix) = 22.

Example image

As you can see, perimeter of the area colored black is 22.

*/

var MatrixPerimeter = function(matrix){
    var perimeter = 0;
      for(var i = 0; i < matrix.length; i++){
        for(var j=0; j < matrix[i].length; j++){
          if(matrix[i][j] === true){
              if(matrix[i][j+1] === false || matrix[i][j+1] === undefined){ //Next Element, need to check undefined cause it could be one limit
                perimeter++
              }
              if(matrix[i][j-1] === false || matrix[i][j-1] == undefined){ //Previous element, need to check undefined cause it could be one limit
                perimeter++;
              }
              if(matrix[i-1] == undefined){ //It's a bottom limit, so we need to count the perimeter
                perimeter++;
              }
              else if (matrix[i-1] != undefined){ //if it's not a bottom limit, we need to verify the values
                if(matrix[i-1][j] == false || matrix[i-1][j] == undefined){
                  perimeter++;
                }
              }
              if(matrix[i+1] == undefined){ //It's a top limit, so we need to count the perimeter
                perimeter++;
              }
              else if (matrix[i+1] != undefined){ //if it's not a top limit, we need to verify the values
                if(matrix[i+1][j] == false || matrix[i+1][j] == undefined){
                  perimeter++;
                }
              }
          }
        }
      }

      return perimeter;
   }

   var matrix =  [[false,true], 
 [true,false]]
  MatrixPerimeter(matrix);