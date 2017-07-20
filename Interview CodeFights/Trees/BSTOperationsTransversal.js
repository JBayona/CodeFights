function Tree(val, left, right){
  this.value = val;
  this.left = left ? left : null;
  this.right = right ? right : null;
}

function BST(tree){
  console.log('DFS');
  dfs(tree);
  console.log('BFS');
  bfs(tree);
  console.log('In order');
  inOrder(tree);
  console.log('Pre order');
  preOrder(tree);
  console.log('Post order');
  postOrder(tree);
}

/*
    B
   / \
  A   C
  Result = A B C
*/

/*Left-Node-Right*/
function inOrder(tree){
  if(tree !== null){
    inOrder(tree.left);
    console.log(tree.value);
    inOrder(tree.right);
  }
}
/*Node Left Right*/
function preOrder(tree){
  if(tree !== null){
    console.log(tree.value);
    preOrder(tree.left);
    preOrder(tree.right);
  }
}

/*Left Right Node*/
function postOrder(tree){
  if(tree !== null){
    postOrder(tree.left);
    postOrder(tree.right);
    console.log(tree.value);
  }
}

/*DFS touch all nodes in the tree*/
function dfs(tree){
  if(tree){
    console.log(tree.value);
    dfs(tree.left);
    dfs(tree.right);
  }
}

/*BFS touch all nodes in layers*/
let queue = [];
function bfs(tree){
  let queue = [];
  //init
  queue.push(tree);
  while(queue.length){
    //Sacamos el elemento de la cola
    let node = queue.shift();
    console.log(node.value);
    if(node.left !== null){
      queue.push(node.left);
    }
    if(node.right !== null){
      queue.push(node.right);
    }
  }
  console.log('Queue final BST');
  console.log(queue);
}

/*
        40
       /  \
      25  78
     /  \
    10  32
*/
tree = new Tree(40, new Tree(25, new Tree(10), new Tree(32)), new Tree(78));
console.log(BST(tree));