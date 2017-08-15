/*http://www.geeksforgeeks.org/detect-and-remove-loop-in-a-linked-list/*/

/*
A linked list is said to contain a cycle if any node is visited more than once while traversing the list.

Complete the function provided in the editor below. It has one parameter: a pointer to a Node object 
named that points to the head of a linked list. Your function must return a boolean denoting whether or not there is a cycle in the list. If there is a cycle, return true; otherwise, return false.

Note: If the list is empty,  will be null.
https://www.hackerrank.com/challenges/ctci-linked-list-cycle/problem
*/

<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <base href="/">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
    <!-- build:css(client) app/vendor.css -->
      <!-- bower:css -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <style>
      </style>
  </head>
  <body>
  </body>
  <script>

function List(val, node){
    this.val = val;
    this.next = node || null;
}

function hasCycle(head){
  if(head === null || head.next === null){
    return false;
  }
  var slow = head;
  var fast = head;
  while(slow !== null && fast !== null && fast.next !== null){
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast){
      //return true
      removeLoopOp1(slow, head);
      removeLoopOp2(slow, head);
    }
  }
  return false;
}

function removeLoopOp1(loopNode, head){
  var ptr1 = head;
  var ptr2;
  while(true){
    ptr2 = loopNode;
    while(ptr2.next != loopNode && ptr2.next != ptr1){
      ptr2 = ptr2.next;
    }
    if(ptr2.next === ptr1){
      break;
    }
    ptr1 = ptr1.next;
  }
  ptr2.next = null;
}

/*Better solution*/
function removeLoopOp2(loopNode, head){
  ptr1 = loopNode;
  ptr2 = loopNode;
  var k = 1;
  //Count the nodes in the loop
  while(ptr1.next != ptr2){
    ptr1 = ptr1.next;
    k++;
  }
  //Move both to head
  ptr1 = ptr2 = head;
  for(var i = 0; i < k; i++){
    //Movemos ptr2 k nodos de separación de ptr1
    ptr2 = ptr2.next;
  }
  //Movemos ptr1 y ptr2 hasta que se encuentren
  while(ptr1 !== ptr2){
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }
  //Movemos ptr2 un lugar
  ptr2 = ptr2.next;
  /*Movemos ptr2 un lugar atrás de ptr1 que es el que
  tiene el head del loop*/
  while(ptr2.next !== ptr1){
    ptr2 = ptr2.next;
  }
  //En el while anterior enonctramos el loop y ahora lo eliminamos
  ptr2.next = null;
}

/*Método Opción 2 Optimizado*/

function detectAndRemoveLoop(head){
  if(head === null || head.next === null){
    return false;
  }
  var slow = head;
  var fast = head;
  while(slow !== null && fast !== null && fast.next !== null){
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast){
      break;
    }
  }
  //Si hay un loop
  if(slow === fast){
    //Movemos el slow al head
    slow = head;
    /*Movemos slow and fast hasta que ambos nodos next de estos
    nodos sean el mismo nodo*/
    while(slow.next !== fast.next){
      slow = slow.next;
      fast = fast.next;
    }
    fast.next = null;
  }
}