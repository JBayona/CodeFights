function List(val, node){
    this.val = val;
    this.next = node || null;
}

function append(val){
  if(head === null){
    head = new Node(val);
    return;
  }
  var current = head;
  while(current.next){
    current = current.next;
  }
  current.next = new List(val);
  return;
}

function prepend(val){
  var newHead = new List(val);
  newHead.next = head;
  head = newHead;
}

function deleteWithValue(data){
  if(head === null) return;
  if(head.val === data){
    head = head.next;
    return
  }
  var current = head;
  while(current.next){
    if(current.next.val === data){
      current.next = current.next.next;
      return;
    }else{
      current = current.next;
    }
  }
}


head = new List(1, new List(2, new List(3,new List(4, new List(5)))));
console.log(head);
append(6);
console.log(head);
prepend(10);
console.log(head);
deleteWithValue(10);
console.log(head);
deleteWithValue(6);
console.log(head);