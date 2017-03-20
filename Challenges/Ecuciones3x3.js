/*
Max has to do his homework, but he is not very good at math. His task is to solve several equation systems, where the output is guaranteed to be integer.

Can you help Max with this difficult assignment?

Example

For

equations = ["9x+5y+4z=21", 
             "6x+3y-5z=7", 
             "3x-10y+6z=35"]
the output should be
equationSystem(equations) = [3, -2, 1]. //x, y, z

9 * 3 + 5 * (-2) + 4 * 1 = 27 - 10 + 4 = 21, correct;
6 * 3 + 3 * (-2) - 5 * 1 = 18 - 6 - 5 = 7, correct;
3 * 3 - 10 * (-2) + 6 * 1 = 9 + 20 + 6 = 35, correct.
*/

function equationSystem(equations) {
    var matrix = [];
    equations.map(item => matrix.push(parseEquation(item)));
    console.log(matrix);
    detD = getDeterminate(matrix);
    detDReal = evaluateDeterminate(detD);

    if (detDReal == 0) {
        console.log("System has no distinct solution.");
        return;
    }   

    constants = getConstants(matrix);
    
    detX = getDetVar(detD, constants, 1);
    detY = getDetVar(detD, constants, 2);
    detZ = getDetVar(detD, constants, 3);
    
    detXReal = evaluateDeterminate(detX);
    detYReal = evaluateDeterminate(detY);
    detZReal = evaluateDeterminate(detZ);

    return [Math.round(detXReal / detDReal), Math.round(detYReal / detDReal), Math.round(detZReal / detDReal)];
}

function parseEquation(equation){
    result = [];
    // Remove all spaces in problem
    equation = equation.replace(/\s/g,'');

    // Split problem into left and right sides
    var problemArray = equation.split("=");
    var problemLeftSide = problemArray[0]; //Before equality
    var problemRightSide = problemArray[1]; //After equality

     // Add + signs in front of all - signs (only for left part, we want the full right number)
    problemLeftSide = problemLeftSide.replace(/-/gi, "+-");

    var problemLeftSideValues = problemLeftSide.split("+");
    var format = [];
    //Thsi workaround is to avoid if we have the first number like -x we don't want to have in the array something like ['',-x,....]
    problemLeftSideValues.map(item => {
        if(item != '') format.push(item);
    });

    format.map((item) => {
        if(item == 'x' || item == 'y' || item == 'z') result.push(1);
        else if(item == '-x' || item == '-y' || item == '-z') result.push(-1);
        else result.push(parseInt(item));
    });
    result.push(parseInt(problemRightSide));
    return result;
}

function getDeterminate(linearSystem){
    var determinate = [];
    var item = [];

    for(var  i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
            item.push(linearSystem[i][j]);
        }
       determinate.push(item);
       item = [];
    }
    return determinate;
}

function evaluateDeterminate(det){
    var sum = 0.0;
    sum += det[0][0] * det[1][1] * det[2][2];
    sum += det[0][1] * det[1][2] * det[2][0];
    sum += det[0][2] * det[1][0] * det[2][1];
    
    sum -= det[0][2] * det[1][1] * det[2][0];
    sum -= det[0][0] * det[1][2] * det[2][1];
    sum -= det[0][1] * det[1][0] * det[2][2];
    return sum;
}

function getDetVar(detD, constants, columnToReplace){
    var detVar = [];
    var item = [];
    for(var  i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
            item.push(detD[i][j]);
        }
       detVar.push(item);
       item = [];
    }

    columnToReplace--;
    for (var r = 0; r < 3; r++)
        detVar[r][columnToReplace] = constants[r];

    return detVar;
}

function getConstants(linearSystem){
    var constants = [];
    for (var i = 0; i < 3; i++) {
         constants.push(linearSystem[i][3]);
    }
    return constants;
}

equations = ["-x+y+z=0","x-3y-2z=5","5x+y+4z=3"]
console.log(equationSystem(equations));