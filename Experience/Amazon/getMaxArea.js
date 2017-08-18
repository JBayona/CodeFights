/*
http://www.geeksforgeeks.org/largest-rectangle-under-histogram/
*/

function getMaxArea(array){
  let stack = [];
  let maxArea = 0;
  let top;
  // To store area with top bar as the smallest bar
  /*Area top almacena el area del top, cada vez que sacamos un elemento
  del stack, sacamos su area, al encontrar un elemento mayor al top de 
  nuestro stack, lo metemos a la pila y cuando encontramos un menor, sacamos
  el tope y obtenemos su area multiplicando su valor, es decir array[top] por
  la diferencia del index derecho que es i - el izquierdo que es peek() - 1,
  entonces es array[top] * (isEmpty() ? i : i - peek() - 1*/
  let areaWithTop;

  function peek(){
    return stack[stack.length-1];
  }

  function isEmpty(){
    return stack.length === 0;
  }
  /*Cuando el elemento actual no es mayor al que estamos
  top , sacamos el area del ultimo en nuestro stack*/
  //Iterate over all bar
  let i = 0;
  while(i < array.length){
    /*If the bar is higher than the bar in the top
    of the stack*/
    if(isEmpty() || array[peek()] <= array[i]){
      stack.push(i++);
    }else{
      /*Si el bar es menor que el tope del stack, vamos calculando
      el area del rectangulo tomando en cuenta el menor valor del bar
      que es lo que nos ayuda a sacar el area, "i" es el right index y el
      tope del stack es el right index, con esto podemos sacar el area, en el
      stack solo guardamos los indexs*/
      top = peek();
      stack.pop();
      areaWithTop = array[top] * (isEmpty() ? i : i - peek() - 1);
      if(maxArea < areaWithTop){
        maxArea = areaWithTop;
      }
    }
  }
  /*Ahora solo sacamos las barras restantes del stack y calculamos
  el area con cualquier elemento sacado del stack*/
  while(!isEmpty()){
    top = peek();
    stack.pop();
    areaWithTop = array[top] * (isEmpty() ? i : i - peek() - 1);
      if(maxArea < areaWithTop){
        maxArea = areaWithTop;
      }

  }
  return maxArea;
}


histogram = [6,2,5,4,5,1,6];
console.log(getMaxArea(histogram));