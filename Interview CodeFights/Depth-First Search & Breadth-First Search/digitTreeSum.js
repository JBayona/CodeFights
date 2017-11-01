/*
We're going to store numbers in a tree. Each node in this tree will store a single digit (from 0 to 9), and each path 
from root to leaf encodes a non-negative integer.

Given a binary tree t, find the sum of all the numbers encoded in it.

https://codefights.com/interview-practice/task/2oxNWXTS8eWBzvnRB/description
*/

function digitTreeSum(t) {
  return getSum(t,0);
}

function getSum(node,sum){
  sum = 10 * sum + node.val;
  let left = 0;
  let right = 0;
  //Is leaf
  if(node.left === null && node.right === null){
    return sum;
  }
  if(node.left){
    left = getSum(node.left, sum);
  }
  if(node.right){
    right = getSum(node.right, sum);
  }
  return left + right;
}


/*
    1
   0 4
  3 1
  103 + 101 + 14 = 218
*/

tree = new TreeNode(1, new TreeNode(0, new TreeNode(3), new TreeNode(1)), new TreeNode(4));
//tree = new TreeNode(1, null, new TreeNode(4));
console.log(digitTreeSum(tree));