 var MatrixPerimeter = function(matrix){
    var perimeter = 0;
      for(var i = 0; i < matrix.length; i++){
        for(var j=0; j < matrix[i].length; j++){
          if(matrix[i][j] === true){
              if(!matrix[i][j+1]){ //Next Element, need to check undefined cause it could be one limit (if its false or undefined)
                perimeter++
              }
              if(!matrix[i][j-1]){ //Previous element, need to check undefined cause it could be one limit (if its false or undefined)
                perimeter++;
              }
              if(!matrix[i-1]){ //It's a bottom limit, so we need to count the perimeter (if its false or undefined)
                perimeter++;
              }
              else if (matrix[i-1]){ //if it's not a bottom limit, we need to verify the values (if it's true)
                if(!matrix[i-1][j]){ //(if its false or undefined)
                  perimeter++;
                }
              }
              if(!matrix[i+1]){ //It's a top limit, so we need to count the perimeter
                perimeter++;
              }
              else if (matrix[i+1]){ //if it's not a top limit, we need to verify the values (if it's true)
                if(!matrix[i+1][j]){ //(if its false or undefined)
                  perimeter++;
                }
              }
          }
        }
      }

      return perimeter;
   }

   var matrix = [[true,true,false,true,true]]
  console.log(MatrixPerimeter(matrix));

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

  t = 0
MatrixPerimeter = m =>
    m.map(y => {
        for(j in y)
            t += 2*y[j] << !y[j - 1] - ~~m[j]
            //with | t*2 at the end
            //t += y[j] && !+m[j] + !y[j - 1]
            //t -= -y[j] & ~-m[j] - !y[j - 1]
            //t += 2*y[j] >> m[j] >> y[j - 1]
        m = y
    }) 
    | t

//For each true add 4
//For each union subtract 2
//Just checking unions backwards not ahead since they are considered anyway

//~n = -n - 1 
//i && m[i - 1][j] means evaluate m[i - 1][j] only if i exists otherwise it gives compilation error for indexing undefined
/*
t = 0
MatrixPerimeter = m => 
    m.map((y, i) => 
          y.map((e, j) => 
                t += e && 3 - (i && m[i - 1][j]) + ~y[j - 1] << 1)) 
    | t
//*/