function Node(val, left, right){
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}

function treeInsert(tree, val) {
  if(tree === null) {
    return new Node(val)
  } else {
    if(val < tree.val) {
      tree.left = treeInsert(tree.left, val);
    } else {
      tree.right = treeInsert(tree.right, val);
    }
  }
  return tree;
}

// Si es un BST lo pone en order
function inorder(node) {
  if(node) {
    inorder(node.left);
    console.log(node.val);
    inorder(node.right);
  }
}

function preorder(node) {
  if(node) {
    console.log(node.val);
    preorder(node.left);
    preorder(node.right);
  }
}

function postorder(node) {
  if(node) {
    postorder(node.left);
    postorder(node.right);
    console.log(node.val);
  }
}

function bfs(node){
  let queue = [];
  queue.push(node);
  while(queue.length){
    let node = queue.shift();
    console.log(node.val);
    if(node.left) {
      queue.push(node.left);
    }
    if(node.right) {
      queue.push(node.right);
    }
  }
}

function dfs(node) {
  let stack = [];
  stack.push(node);
  while(stack.length) {
    let node = stack.pop();
    console.log(node.val);
    if(node.left) {
      stack.push(node.left);
    }
    if(node.right) {
      stack.push(node.right);
    }
  }
}

function treeSearch(node, val) {
  if(node) {
    if(node.val === val) {
      return node;
    }
    if(val < node.val) {
      return treeSearch(node.left, val);
    } else {
      return treeSearch(node.right, val);
    }
  }
  return null;
}

tree = null;
array = [6, 4, 9, 2, 5, 7, 10, 1, 3, 8];

for(let i = 0; i < array.length; i++) {
  tree = treeInsert(tree, array[i]);
}

console.log('Inorder');
inorder(tree);
console.log('Preorder');
preorder(tree);
console.log('Postorder');
postorder(tree);
console.log('BFS');
bfs(tree)
console.log('DFS');
dfs(tree);
console.log('Search in tree');
c = treeSearch(tree, 2);
if(c) {
  console.log('Value found:', c)
}else {
  console.log('Value not found');
}

console.log('Tree');
console.log(tree);
