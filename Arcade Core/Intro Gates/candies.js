/*
n children have got m pieces of candy. They want to eat as much candy as they can, but each child must eat exactly the same amount of candy as any other child. Determine how many pieces of candy will be eaten by all the children together. Individual pieces of candy cannot be split.

Example

For n = 3 and m = 10, the output should be
candies(n, m) = 9.

Each child will eat 3 pieces. So the answer is 9.

https://codefights.com/arcade/code-arcade/intro-gates/DdNKFA3XCX6XN7bNz
*/

function candies(n, m) {
  return m-(m%n)
}

candies = (n,m) => m-(m%n)

 n = 3;
 m = 10;
console.log(candies(n,m))