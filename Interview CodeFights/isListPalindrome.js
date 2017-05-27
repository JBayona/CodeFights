/*
Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in l, since this is what you'll be asked to do during an interview.

Given a singly linked list of integers, determine whether or not it's a palindrome.

Example

For l = [0, 1, 0], the output should be
isListPalindrome(l) = true;
For l = [1, 2, 2, 3], the output should be
isListPalindrome(l) = false.

https://codefights.com/interview/jQyCRiwF2BjBMYy7i/topics/linked-lists/description
*/

//Option 2 - Dividir la lista, voltear y comparar

// Definition for singly-linked list:
 function ListNode(x, node) {
   this.value = x;
   this.next = node ? node : null;
 }
//
function isListPalindrome(l) {
  var length = getListLength(l);  
  if (length <= 1) return true;
  // split in 2
  var l1 = l;
  var l2;
  
  var cur = l;
  var prev = null;
  var i = 0;
  while(cur){
    if(i === parseInt(length/2)){ //Hace un round
      //Par
      if(length%2 === 0){
        l2 = cur;
      }else{ //impar
        l2 = cur.next;
      }
      prev.next = null;
      break;
    }
    prev = cur;
    cur = cur.next;
    i++;
  }
  //console.log(l1);
  //console.log(l2);
  //Reverse list
  l2 = reverseList(l2);
  //Compare list
  while(l1 && l2){
    if(l1.value !== l2.value){
      return false;
    }
    l1 = l1.next;
    l2 = l2.next;
  }
  return true;
}

function getListLength(l){
  var length = 0;
  while(l){
    length++;
    l = l.next;
  }
  return length;
}

function reverseList(l) {
    var cur = l;
    var prev = null;
    var next;
    while (cur) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}

l = new ListNode(3,new ListNode(5,new ListNode(3)));
console.log(isListPalindrome(l));

//Option 2 - Stack O(N) complejidad y espacio

// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {
  console.log(l);
  var stack = [];
  var newHead = l;
  var tmp = 0;
  //We iterate over the list and push the elements in the stack
  while(l){
    stack.push(l.value);
    l = l.next;
  }
  //Ponemos la lista al inicio
  l = newHead;
  /*We pop the elements and we compare again, iterating the list
  with the list, if they are different, is not palindrome*/
  while(l){
    tmp = stack.pop()
    if(tmp !== l.value){
      return false;
    }
    l = l.next;
  }
  return true;
}