function Tree(data, left, right){
  this.data = data;
  this.left = left ? left : null;
  this.right = right ? right : null;
}

function insert(tree,value){
  if(value <= tree.data){
    if(tree.left === null){
      tree.left = new Tree(value);
    }else{
      insert(tree.left, value);
    }
  }else{
    if(tree.right === null){
      tree.right = new Tree(value);
    }else{
      insert(tree.right, value);
    }
  }
}

function contains(tree, value){
  if(tree.data === value){
    return true;
  }else if(value < tree.data){
    if(tree.left === null) return false;
    else return contains(tree.left, value)
  }else{
    if(tree.right === null) return false;
    else return contains(tree.right, value);
  }
}

tree = new Tree(10, new Tree(5), new Tree(15));
insert(tree, 8);
insert(tree, 20)
console.log(tree);
console.log('Contains 99 = ' + contains(tree,100));
console.log('Contains 20 = ' + contains(tree,20));