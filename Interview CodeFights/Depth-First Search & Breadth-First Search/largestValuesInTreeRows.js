/*
You have a binary tree t. Your task is to find the largest value in each row of this tree. 
In a tree, a row is a set of nodes that have equal depth. For example, a row with depth 0 is a tree root, a row with depth 1 is composed of the root's children, etc.

Return an array in which the first element is the largest value in the row with depth 0, the second element 
is the largest value in the row with depth 1, the third element is the largest element in the row with depth 2, etc.

https://codefights.com/interview-practice/task/m9vC4ALaAeudkwRTF
*/

function largestValuesInTreeRows(tree){
  let levelCount = 1;
  let currentCount = 0;
  let queue = [];
  let result = [];
  if(!tree) return [];
  let max = Number.MIN_SAFE_INTEGER;
  queue.push(tree);
  while(queue.length){
    while(levelCount > 0){
      let node = queue.shift();
      max = Math.max(node.val, max);
      if(node.left){
        queue.push(node.left);
        currentCount++;
      }
      if(node.right){
          queue.push(node.right);
          currentCount++;
      }
      levelCount -=1;
    }
    result.push(max);
    let max = Number.MIN_SAFE_INTEGER;
    levelCount = currentCount;
    currentCount = 0;
  }
  return result;
}

/*
     1
   2   3
  4 5  6 7
 8 
*/


tree = new TreeNode(1, new TreeNode(2, new TreeNode(4, new TreeNode(8)), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)));
console.log(largestValuesInTreeRows(tree));