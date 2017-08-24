/*
https://www.youtube.com/watch?v=MILxfAbIhrE
https://github.com/mission-peace/interview/blob/master/src/com/interview/tree/IsBST.java

*/

function Tree(data, left, right){
  this.data = data;
  this.left = left ? left : null;
  this.right = right ? right : null;
}

function checkBST(tree) {
  return isBST(tree, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

function isBST(node, MIN, MAX){
  if(node === null) return true;
  if(node.data <= MIN || node.data >= MAX) return false;
  return isBST(node.left, MIN, node.data) && isBST(node.right, node.data, MAX);
}

tree = new Tree(4, new Tree(2, new Tree(1), new Tree(3)), new Tree(6, new Tree(5), new Tree(7)));
console.log(checkBST(tree));