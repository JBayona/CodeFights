/*
Your favorite restaurant can take reservations for n people. They have an interesting algorithm 
to determine how many tables they will need to set up based on these reservations. 
They take the number of people who have reservations, and then dividing it by ever incrementing integers. 
They start at 1, because they always need to have at least 1 table set up. 
They do this until the number of tables is greater than n. 
So your task is to find out how many times n will be divided until they determine the number of tables they need to set up.

Example
For n = 100, the output should be
dinerTables(n) = 5.

Walk-through:

[100, 1] < We start with 1 table for 100 people (100 / 1);
[100, 2] < 100 people / 2 tables = 50 people per table;
[50, 3] < 50 people / 3 tables = 16 people per table;
[16, 4] < 16 people / 4 tables = 4 people per table;
[4, 5] < 4 people / 5 tables = done.
Since n was divided 5 times before the number of tables was greater than the number of people, the answer is 5.

https://codefights.com/challenge/hiZCrg5MS7mQ3Wy8h
*/

//Opción 1 Iterative
dinerTables = n => {
  c = 1
  while(n >= c){
  n = Math.floor(n/c++);
  }
  return c;
}

//Opción 2 Recursion
c = 1  
dinerTables = n => n >= c ? dinerTables((n/c++)) : c; 

//Opción 3 More compressed recursion
c = 1  
dinerTables = f = n => n >= c ? f(n/c++) : c

n = 100;
console.log(dinerTables(n));