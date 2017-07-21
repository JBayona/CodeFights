function Tree(val, left, right){
  this.val = val;
  this.left = left ? left : null;
  this.right = right ? right : null;
}

function treeBST(t){
  console.log('Min Value = ' + findMinValue(t));
  console.log('Max Value = ' + findMaxValue(t));
}

/*Iterative*/
/*function findMaxValue(t){
  if(t === null){
    return "Error";
  }
  while(t.right !== null){
    t = t.right;
  }
  return t.val;
}

function findMinValue(t){
  if(t === null){
    return "Error";
  }
  while(t.left !== null){
    t = t.left;
  }
  return t.val;
}*/

/*Recursion*/
function findMinValue(t){
  if(t === null){
    return "Error";
  }else if(t.left === null){
    return t.val;
  }
  //Search in the left subtree
  return findMinValue(t.left);
}

function findMaxValue(t){
  if(t === null){
    return "Error";
  }else if(t.right === null){
    return t.val;
  }
  //Search in the right subtree
  return findMaxValue(t.right);
}

/*
      15
      /\
    10  20
    /\  / \
   8 12 17 25
*/
tree = new Tree(15, new Tree(10, new Tree(8), new Tree(12)), new Tree(20, new Tree(17), new Tree(25)));
console.log(treeBST(tree));