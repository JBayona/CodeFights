function EquationCaptcha(equation) {

    splitEq = equation.split('=');
    leftPart = splitEq[0]; //Parte izquiera de la ecuacion
    rightPart = splitEq[1]; //Parte derecha de la ecuacion

    leftPart = leftPart.replace(/\-/g,'+-').split('+'); //Reemplaza los "-" con "+-" y hace un split con + para tener las constantes de la dos partes de la ecuacion, tanto la izquierda como la de la derecha
    rightPart = rightPart.replace(/\-/g,'+-').split('+');

    formatLeft = formatEquation(leftPart);
    formatRight = formatEquation(rightPart);


    if(formatLeft.join('').indexOf('x') >= 0){
        //if left
        if(formatLeft[0].indexOf('x') >= 0){
            return (parseInt(formatRight[0]) - parseInt(formatLeft[1])) / (parseInt(formatLeft[0]))
        }else if(formatLeft[1].indexOf('x') >= 0){
            return (parseInt(formatRight[0]) - parseInt(formatLeft[0])) / (parseInt(formatLeft[1]))
        }
    }else if(formatRight.join('').indexOf('x') >= 0){
        if(formatRight[0].indexOf('x') >= 0){
            return (parseInt(formatLeft[0]) - parseInt(formatRight[1])) / (parseInt(formatRight[0]))
        }else if(formatRight[1].indexOf('x') >= 0){
            return (parseInt(formatLeft[0]) - parseInt(formatRight[0])) / (parseInt(formatRight[1]))
        }
    }
}

/*Elimina los espacios en blanco por si hay un "" del split por tener un signo negativo en el inicio del array y pone 1x
en caso de tener x solamente, cuando se encuentra un signo de "-" pone "-+ y si es el primer elemento del array, puede que
ponga un "" al hacer el split, esta funcion elimina ese espacio y pone una constante en caso de solo ser x para que sea 1x*/
function formatEquation(eq){
    var arr = [];
    for(var i = 0; i < eq.length; i++){
        if(eq[i] != ''){
            if(eq[i] == 'x'){
                arr.push('1x');
            }else if(eq[i] == '-x'){
                arr.push('-1x');
            }else{
                arr.push(eq[i]);
            }
        }
    }
    return arr;
}

equation = "-8=-21-x";
console.log(EquationCaptcha(equation))
