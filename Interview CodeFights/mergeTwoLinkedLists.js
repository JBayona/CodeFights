/*
Note: Your solution should have O(l1.length + l2.length) time complexity, since this is what you will be asked to accomplish in an interview.

Given two singly linked lists sorted in non-decreasing order, your task is to merge them. In other words, return a singly linked list, also sorted in non-decreasing order, that contains the elements from both original lists.

Example

For l1 = [1, 2, 3] and l2 = [4, 5, 6], the output should be
mergeTwoLinkedLists(l1, l2) = [1, 2, 3, 4, 5, 6];
For l1 = [1, 1, 2, 4] and l2 = [0, 3, 5], the output should be
mergeTwoLinkedLists(l1, l2) = [0, 1, 1, 2, 3, 4, 5].

https://codefights.com/interview-practice/task/6rE3maCQwrZS3Mm2H
*/

//Opción 1

function ListNode(x, node) {
  this.value = x;
  this.next = node ? node : null;
}

function mergeTwoLinkedLists(list1, list2) {
  if (list1 == null) return list2;
  if (list2 == null) return list1;

  if (list1.value < list2.value) {
    list1.next = mergeTwoLinkedLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLinkedLists(list2.next, list1);
    return list2;
  }
}

l1 = new ListNode(1, new ListNode(2, new ListNode(3)));
l2= new ListNode(4, new ListNode(5, new ListNode(6)));
console.log(mergeTwoLinkedLists(l1,l2));

//Opción 2

function ListNode(x, node) {
  this.value = x;
  this.next = node ? node : null;
}

function addNode(val){
  return new ListNode(val);
}

function mergeTwoLinkedLists(list1, list2) {
 var result = null;
 var head = null;
 while(list1 && list2){
    if(list1.value <= list2.value){
      if(!head){
        result = addNode(list1.value);
        head = result;
      }else{
        result.next = addNode(list1.value);
        result = result.next;
      }
      list1 = list1.next;
    }else{
       if(!head){
        result = addNode(list2.value);
        head = result;
      }else{
        result.next = addNode(list2.value);
        result = result.next;
      }
      list2 = list2.next;
    }
  }
  //If l1 is empty
  if(!list1){
    if(!head){
      return list2
    }else{
      result.next = list2;
    }
  }else {
    if(!head){
      return list1
    }else{
      result.next = list1;
    }
  }
  return head;
}

l1 = new ListNode(5, new ListNode(10, new ListNode(15, new ListNode(40))));
l2= new ListNode(2, new ListNode(3, new ListNode(20)));
console.log(mergeTwoLinkedLists(l1,l2));


