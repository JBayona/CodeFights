/*
You are climbing a staircase that has n steps. You can take the steps either 1 or 2 at a time. 
Calculate how many distinct ways you can climb to the top of the staircase.

Example

For n = 1, the output should be
climbingStairs(n) = 1;

For n = 2, the output should be
climbingStairs(n) = 2.

You can either climb 2 steps at once or climb 1 step two times.

https://codefights.com/interview-practice/task/oJXTWuwEZiC6FTw3A
*/

function climbingStairs(n) {
    let array = [];
    array[0] = 0;
    array[1] = 1;
    array[2] = 2;
    for(let i = 3; i <= n; i++){
        array[i] = array[i-1] + array[i-2];
    }
    return array[n];
}

n = 3;
console.log(climbingStairs(n));