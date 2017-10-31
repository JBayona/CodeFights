/*
Note: Try to solve this task without using recursion, since this is what you'll be asked to do during an interview.

Given a binary tree of integers t, return its node values in the following format:

The first element should be the value of the tree root;
The next elements should be the values of the nodes at height 1 (i.e. the root children), ordered from the leftmost to the rightmost one;
The elements after that should be the values of the nodes at height 2 (i.e. the children of the nodes at height 1) ordered in the same way;
Etc.

https://codefights.com/interview-practice/task/PhNPP45hZGNwpPchi
*/

//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function traverseTree(t) {
    let levelCount = 1;
    let currentCount = 0;
    let queue = [];
    let result = [];
    if(!t) return result;
    queue.push(t);
    while(queue.length){
        while(levelCount > 0){
            let node = queue.shift();
            result.push(node.value);
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
        levelCount = currentCount;
        currentCount = 0;
    }
    return result;
}
