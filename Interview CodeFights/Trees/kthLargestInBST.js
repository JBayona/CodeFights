//Largest

function Tree(value, left, right){
  this.value = value;
  this.left = left ? left : null;
  this.right = right ? right : null;
}

function kthLargestInBST(t, k) {
  var response = 0;
   f = (t,k) => {
      if(t.right){
        k = f(t.right, k);
      }
      k--;
      if(k === 0) response = t.value;
      if(t.left){
        k = f(t.left, k);
      };
      return k;
   }
   f(t,k);
   return response;
}

k = 4;
tree = new Tree(3, new Tree(1), new Tree(5, new Tree(4), new Tree(6)));
console.log(kthLargestInBST(tree, k));