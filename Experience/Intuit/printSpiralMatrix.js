/* [[1,2,3],
    [4,5,6],
    [7,8,9]]
*/
//1,2,3,6,9,8,7,4,5
//Necesitamos cuatro variables de control, dos para el inicio de row  y del column y otras dos para el final del row y column

function printSpiral(rowFinal, columnFinal, matrix){

  var rowInit = 0, columnInit = 0, i = 0;

  while(rowInit < rowFinal && columnInit < columnFinal){
    //imprime el primer renglon
    for(i = columnInit; i < columnFinal; i++){
      console.log(matrix[rowInit][i]);
    }
    //Incrementamos el init del row ya que ya terminamos con la primera
    rowInit++;
  
    for(i = rowInit; i < rowFinal; i++){
      console.log(matrix[i][columnFinal-1]);
    }
    //Decrementamos la columna final ya que ya la analizamos
    columnFinal--;

    //Ahora imprimimos el ultimo renglon pero al reves para que sea en espiral
    if(rowInit < rowFinal){
      for(i = columnFinal-1; i >= columnInit; i--){
        console.log(matrix[rowFinal-1][i]);
      }
      rowFinal--;
    }

    //Por utilo imprimimos la primer columna tambien al reves, es decir de abajo a arriba
    if(columnInit < columnFinal){
      for(i = rowFinal-1; i >= rowInit; i--){
        console.log(matrix[i][columnInit]);
      }
      columnInit++;
    }
  }
}

matrix = [
            [1,2,3,4],
            [5,6,7,8],
            [9,10,11,12],
            [13,14,15,16]
          ];
printSpiral(4,4,matrix);