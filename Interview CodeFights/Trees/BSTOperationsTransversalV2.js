/*Binary Search Tree Operations*/

function Tree(value, left, right){
    this.value = value;
    this.left = left;
    this.right = right;
  }

function transverseTree(tree) {
  //Transverse DFS recursion
  console.log('DFS');
  dfs(tree);
  //Tranverse BFS with queue
  console.log('BFS');
  bfs(tree);
  console.log('Inorder');
  inorder(tree);
  console.log('Preorder');
  preorder(tree);
  console.log('Postorder');
  postorder(tree);
  console.log('DFS Iterative');
  dfsIterative(tree);
}

function dfs(tree){
  if(tree){
    console.log(tree.value);
    dfs(tree.left);
    dfs(tree.right);
  }
}

function bfs(tree){
  let queue = [];
  queue.push(tree);
  while(queue.length){
    let node = queue.shift();
    console.log(node.value);
    if(node.left){
      queue.push(node.left);
    }
    if(node.right){
      queue.push(node.right);
    }
  }
}

function inorder(tree){
  if(tree){
    inorder(tree.left);
    console.log(tree.value);
    inorder(tree.right);
  }
}

function preorder(tree){
  if(tree){
    console.log(tree.value);
    preorder(tree.left);
    preorder(tree.right);
  }
}

function postorder(tree){
  if(tree){
    postorder(tree.left);
    postorder(tree.right);
    console.log(tree.value);
  }
}

function dfsIterative(tree){
  let stack = [];
  stack.push(tree);
  while(stack.length){
    let node = stack.pop();
    console.log(node.value);
    if(node.left){
      stack.push(node.left);
    }
    if(node.right){
      stack.push(node.right);
    }
  }
}

t1 = new Tree(5, new Tree(2, new Tree(1), new Tree(3)), new Tree(7, new Tree(6), new Tree(8)));
  console.log(transverseTree(t1));