//Smallest
function Tree(value, left, right){
  this.value = value;
  this.left = left ? left : null;
  this.right = right ? right : null;
}

//Opción 1
function kthLeastInBST(t, k) {
  let result = [];
  inorder(t, result);
  return result[k-1];
}

function inorder(tree, result, k){
  if(tree !== null){
    inorder(tree.left, result);
    result.push(tree.value)
    inorder(tree.right, result);
  }
}

k = 1;
tree = new Tree(-2, null, new Tree(3, new Tree(2)));
console.log(kthLeastInBST(tree, k));

//Opción 2
function Tree(value, left, right){
  this.value = value;
  this.left = left ? left : null;
  this.right = right ? right : null;
}

function kthLeastInBST(t, k) {
  var response = 0;
   //Inorder transversal
   f = (t,k) => {
      if(t.left){
        k = f(t.left, k);
      }
      k--;
      if(k === 0) response = t.value;
      if(t.right){
        k = f(t.right, k);
      };
      return k;
   }
   f(t,k);
   return response;
}

k = 3;
tree = new Tree(3, new Tree(1), new Tree(5, new Tree(4), new Tree(6)));
console.log(kthLeastInBST(tree, k));
