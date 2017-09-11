/*
Given a binary tree, find the deep­est node in it.

Examples:

Input : Root of below tree
            1
          /   \
         2      3
        / \    / \ 
       4   5  6   7
                   \
                    8
Output : 8

Input : Root of below tree
            1
          /   \
         2      3
               / 
              6  
Output : 6
http://www.geeksforgeeks.org/find-deepest-node-binary-tree/
*/

function Tree(value, left, right){
  this.value = value;
  this.left = left || null;
  this.right = right || null;
}

function deepestNode(tree){
  var result = {max : -1};
  var maxLevel = {max: -1};
  inOrder(tree, 0, maxLevel, result);
  return result.max;
}

function inOrder(tree, level, maxLevel, result){
  if(tree){
    inOrder(tree.left, ++level, maxLevel, result);
    //Update the level
    if(level > maxLevel.max){
      result.max = tree.value;
      maxLevel.max = level;
    }
    //console.log(tree.value);
    inOrder(tree.right, level, maxLevel, result);
  }
}


//tree = new Tree(1, new Tree(2, new Tree(4), new Tree(5)), new Tree(3, new Tree(6), new Tree(7, null, new Tree(8))));
tree = new Tree(1, new Tree(2), new Tree(3, new Tree(6), null));
console.log(deepestNode(tree));