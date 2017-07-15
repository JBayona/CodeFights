/*Tenemos tres datos, n que indica el número de vértices, "from" que es un arreglo que nos dice
desde que nodo apuntamos y "to" que va a los otros nodos, tenemos que encontrar el valor menor y 
mayor del nodo para hacer la maxima diferencia, podemos tener otros componentes, ver imágenes*/

let graph = {};
function graphMaximunDifference(n, fromArray, toArray){
  //Form graph O (V + E)
  //Set vertices
  for(let i = 1; i <= n; i++){
    graph[i] = [];
  }
  //Fill edges
  for(let i = 0; i < fromArray.length; i++){
    if(!(fromArray[i] in graph)){
      graph[fromArray[i]] = [toArray[i]];
    }else{
      graph[fromArray[i]].push(toArray[i]);
    }
  }
  let statistics = {max: 0, min: 0}
  let numComp = 0;
  let answer = 0;
  //Necesitamos localizar los componentes, sabemos que n 5 nodos
  let color = new Array(n).fill(0);
  /*Vamos a checar cada nodo y ver sus vertices adyacentes
  si están en color == 0 significa que no han sido clasificados*/
  for(let node in graph){
    if(color[node-1] === 0){
      statistics.max = parseInt(node);
      statistics.min = parseInt(node);
      color[node-1] = ++numComp;
      dfs(node, color, statistics);
      answer = Math.max(answer,statistics.max - statistics.min);
    }
  }
  console.log(color, statistics);
  return answer;
}
//Dfs y etiquetamos los componentes
function dfs(node,color, statistics){
  //Aquí visitaremos todos los nodos
  for(v of graph[node]){
    /*Con esto evitamos que se cicle y etiquetamos por
    componente los que no están etiquetados*/
    if(color[v-1] === 0){
      //Visitamos sus vertices y los marcamos
      color[v-1] = color[node-1];
      statistics.min = Math.min(statistics.min, v);
      statistics.max = Math.max(statistics.max, v);
      //Hacemos este proceso recursivo
      dfs(v, color, statistics)
    }
  }
}


var n = 10;
//var fromArray = [1,1,2,2,3,4];
//var toArray =   [2,3,3,4,4,5];
//var fromArray = [1,3,4];
//var toArray =   [2,4,5];
var fromArray = [1,1,6,6,9,9,2,2,8,8,8,4,4,10,3,5,7];
var toArray =   [9,6,1,9,1,6,4,8,4,10,2,2,8,8,0,7,5];
console.log(graphMaximunDifference(n, fromArray, toArray));
