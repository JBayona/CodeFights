/*
Implement an algorithm to find the kth to last element of a singly linked list.
*/

/*Complejidad O(n) y time space O(1)*/
function ListNode(val,node){
  this.val = val;
  this.next = node ? node : null;
}

function nthToLast(head, k){
  if(k <= 0) return null;
  var p1 = head;
  var p2 = head;

  for(var i = 0; i < k; i++){
    if(p2 === null) return null;
    p2 = p2.next; 
  }
  //if(p2 === null) return null;
  /*Mover p1 y p2 a la misma velocidad, cuando p2 llegue al final
  p1 estará en el elemento correcto*/
  while(p2 !== null){
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
}


list = new ListNode(2, new ListNode(4, new ListNode(6, new ListNode(8, new ListNode(10)))));
console.log(nthToLast(list,1));