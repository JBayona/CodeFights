/*
Note: Try to solve this task in O(n) time using O(1) additional space, 
where n is the number of elements in the list, since this is what you'll be asked to do 
during an interview.

Given a singly linked list of integers l and a non-negative integer k, remove all 
elements from list l that have a value equal to k.

Example

For l = [3, 1, 2, 3, 4, 5] and k = 3, the output should be
removeKFromList(l, k) = [1, 2, 4, 5];
For l = [1, 2, 3, 4, 5, 6, 7] and k = 10, the output should be
removeKFromList(l, k) = [1, 2, 3, 4, 5, 6, 7].

https://codefights.com/interview-practice/task/gX7NXPBrYThXZuanm/description
*/

function ListNode(x, node) {
  this.value = x;
  this.next = node ? node : null;
}

function removeKFromList(l, k) {
  var curr = l;
  var prev = null;
  while(curr){
    if(curr.value === k){
      if(!prev){
        l = curr.next;
      }else{
        prev.next = curr.next;
      }
    }else{
      prev = curr;
    }
    curr = curr.next;
  }
  return l;
}

list = new ListNode(3, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))));
//list = new ListNode(3, new ListNode(3));
k = 3;
console.log(removeKFromList(list, 3));