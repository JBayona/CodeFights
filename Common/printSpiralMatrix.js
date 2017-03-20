/*
Given a 2D array, print it in spiral form. See the following examples.

Input:
        1    2   3   4
        5    6   7   8
        9   10  11  12
        13  14  15  16
Output: 
1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10 


Input:
        1   2   3   4  5   6
        7   8   9  10  11  12
        13  14  15 16  17  18
Output: 
1 2 3 4 5 6 12 18 17 16 15 14 13 7 8 9 10 11
*/

function spiralPrint(m, n, a){ // m=row, n=column
    var i, k = 0, l = 0;
    /*  k - starting row index , m - ending row index ,l - starting column index, n - ending column index, i - iterator
    */
    while (k < m && l < n){
        /* Print the first row from the remaining rows */
        //Imprimimos la primera columna de la matriz
        //En la primer vuelta k = 0, entonces el row empieza desde el inicio de la matriz
        for (i = l; i < n; ++i){
            console.log(a[k][i]);
        }
        k++; //Avanzamos de row
 
        /* Print the last column from the remaining columns */
        //En este ciclo imprime todos los elementos de la derecha, los ultimos elementos de la columna por
        //el espiral
        for (i = k; i < m; ++i){
            console.log(a[i][n-1]);
        }
        n--; //Ya analizamos la última columna, entonces ahora a la siguiente vuelta empieza del elemento
        //anterior analizado, para eso le bajamos uno

        /* Print the last row from the remaining rows */
        //Si k es menor a significa que debemos de imprimir el último renglón de la matriz
        if ( k < m){
            for (i = n-1; i >= l; --i) //Se imprime al reves la columna
            {
                console.log(a[m-1][i]);
            }
            m--; //Reducimos m ya que ya terminamos con el último renglón
        }
 
        /* Print the first column from the remaining columns */
        //Ahora recorremos la primer columna de la matriz, empezando de atrás para adelante
        if (l < n){
            for (i = m-1; i >= k; --i)
            {
                console.log(a[i][l]);
            }
            l++; //Aumentamos el index de la columna que analizaremos
        }        
    }
}
var a = [ [1,2,3],
        [4,5,6],
        [7,8,9]
    ]; 
spiralPrint(3, 3, a);// row, column, array