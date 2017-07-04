/*
You're given 2 huge integers represented by linked lists. Each linked list element is a number from 0 to 9999 that represents 
a number with exactly 4 digits. 
The represented number might have leading zeros. 
Your task is to add up these huge integers and return the result in the same format.

https://codefights.com/interview-practice/task/RvDFbsNC3Xn7pnQfH/description
*/

function ListNode(x) {
  this.value = x;
  this.next = null;
}

function addTwoHugeNumbers(a, b) {
  var result = getSum(a,b);
  var tmp = '';
  var newHead = null;
  var newTail = null;
  var node = null;
  var index = 0;
  for(var i = 0; i < result.length; i++){
    tmp = result[i];
    node = new ListNode(tmp);
    if(!newHead){
      newHead = node;
      newTail = node;
    }else{
      newTail.next = node;
      newTail = newTail.next;
    }
  }
  return newHead;
}

function getSum(l1, l2){
  l1 = reverseList(l1);
  l2 = reverseList(l2);
  var sum = [];
  var carry = 0;
  var flag = false;
  while(l1 || l2 || carry){
    var n1 = l1 ? l1.value : 0;
    var n2 = l2 ? l2.value : 0;
    var tmp = n1 + n2 + carry;
    if(tmp >= 10000){
      carry = tmp/10000 | 0;
    }else{
      carry = 0;
    }
    sum.unshift(tmp%10000);
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }
  return sum;
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

l1 = new ListNode(9999);
l2= new ListNode(9999);
console.log(addTwoHugeNumbers(l1,l2));


