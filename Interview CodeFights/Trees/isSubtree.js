/*
Given two binary trees t1 and t2, determine whether the second one is a 
subtree of the first one. A subtree for vertex v in binary tree t is a 
tree consisting of v and all its descendants in t. Your task is to check 
whether there is a vertex v in tree t1 such that a subtree for vertex v in t1 equals t2.

https://codefights.com/interview-practice/task/mDpAJnDQkJqaYYsCg
*/

function Tree(value, left, right){
    this.value = value;
    this.left = left;
    this.right = right;
  }

function isSubtree(t1, t2) {
  //Bases cases
  let flag;
  if(!t2) return true;
  if(!t1) return false;
  //BFS
  let queue = [];
  queue.push(t1);
  while(queue.length){
    //Sacamos el elemento de la cola
    let node = queue.shift();
    if(node.value === t2.value){
      flag = checkSubtreeDFS(node, t2);
      if(flag) return true;
    }
    if(node.left){
      queue.push(node.left);
    }
    if(node.right){
      queue.push(node.right);
    }
    
  }
  return false;
}

function checkSubtreeDFS(t1, t2){
  if(!t1 && !t2) return true;
  if(!t1 || !t2) return false;
  if(t1.value === t2.value){
    return checkSubtreeDFS(t1.left, t2.left) && checkSubtreeDFS(t1.right, t2.right);
  }
  return false;
}

t1 = new Tree(3, new Tree(3, new Tree(5), new Tree(7), new Tree(4)), new Tree(4));
t2 = new Tree(3, new Tree(5), new Tree(7));
  //t1 = new Tree(5, new Tree(10, new Tree(4, new Tree(1), new Tree(2)), new Tree(6, null, new Tree(-1))), new Tree(7));
  //t2 = new Tree(10, new Tree(4, new Tree(1), new Tree(2)), new Tree(6, null, new Tree(-1)));
  console.log(isSubtree(t1, t2));
