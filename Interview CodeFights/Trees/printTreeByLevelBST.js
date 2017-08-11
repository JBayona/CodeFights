function Node(value, left, right){
    this. value = value;
    this.left = left || null;
    this.right = right || null;
  }

function isEmpty(queue){
  return queue.length === 0;
}

//Approach usando dos colas
function printByLevels2Queues(tree){
  if(!tree) return null; 
  let q1 = [];
  let q2 = [];
  q1.push(tree);
  //Mientras las colas no estén vacías vamos a iterar sobre ellas
  /*BST*/
  while(!isEmpty(q1) || !isEmpty(q2)){
    while(!isEmpty(q1)){
      let node = q1.shift();
      console.log(node.value + ' ');
      if(node.left){
        q2.push(node.left);
      }
      if(node.right){
        q2.push(node.right);
      }
    }
    /*Cuando q1 o q2 están vacías es cuando se 
    imprime el espacio en blanco*/
    console.log('\n');
    while(!isEmpty(q2)){
      let node = q2.shift();
      console.log(node.value + ' ');
      if(node.left){
        q1.push(node.left);
      }
      if(node.right){
        q1.push(node.right);
      }
    }
    console.log('\n');
  }
}

//Opción 2 usando delimiter
function printByLevelsDelimiter(tree){
  if(!tree) return null;
  let queue = [];
  queue.push(tree);
  queue.push(null);
  while(queue.length){
    let node = queue.shift();
    //Si es nuestro delimitador (null)
    if(!node){
      //Para evitar ciclos
      if(queue.length){
        queue.push(null);
        console.log('\n');
      }
    }else{
      console.log(node.value + ' ');
      if(node.left){
        queue.push(node.left);
      }
      if(node.right){
        queue.push(node.right);
      }
    }
  }
}

function printByLevelsCounter(tree){
  if(!tree) return null;
  let currenCount = 0 //Cuenta el número de elementos del siguiente nivel
  let queue = [];
  let levelCount = 1;
  queue.push(tree);
  while(queue.length){
    while(levelCount > 0){
      let node = queue.shift();
      console.log(node.value + ' ');
      if(node.left){
        queue.push(node.left);
        currenCount += 1;
      }
      if(node.right){
        queue.push(node.right);
        currenCount += 1;
      }
      levelCount -= 1;
    }
    //si ya imprimimos todos los hijos
    /*Imprimimos una nueva línea y nuestro nivel
    actual tiene el valor del nivel que analizamos*/
    console.log('\n');
    levelCount = currenCount;
    currenCount = 0;
  }
}

tree = new Node(1, new Node(2, new Node(4),null), new Node(3,new Node(5, new Node(6), new Node(7,null, new Node(8)))));
printByLevels2Queues(tree); //Usando dos colas
printByLevelsDelimiter(tree);
printByLevelsCounter(tree);