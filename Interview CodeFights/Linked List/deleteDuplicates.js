/*
Write code to remove duplicates from an unsorted linked list
*/

function ListNode(val, node){
  this.val = val;
  this.next = node ? node : null;
}

function deleteDuplicates(list){
  var hash = {};
  var prev = null;
  var curr = list;
  while(curr){
    if(curr.val in hash){
      prev.next = curr.next;
    }else{
      hash[curr.val] = true;
      prev = curr;
    }
    curr = curr.next;
  }
  return list;
}

list = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(5, new ListNode(5))))))));
console.log(deleteDuplicate(list));
