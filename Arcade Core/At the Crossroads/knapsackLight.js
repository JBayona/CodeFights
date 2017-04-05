/*
You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?

Example

For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4 and maxW = 8, the output should be
knapsackLight(value1, weight1, value2, weight2, maxW) = 10.

You can only carry the first item.

For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4 and maxW = 9, the output should be
knapsackLight(value1, weight1, value2, weight2, maxW) = 16.

You're strong enough to take both of the items with you.

https://codefights.com/arcade/code-arcade/at-the-crossroads/r9azLYp2BDZPyzaG2
*/

function knapsackLight(value1, weight1, value2, weight2, maxW) {
    if(weight1 + weight2 <= maxW){
        return value1 + value2;
    }else if(weight1 <= maxW && weight2 > maxW){
        return value1;
    }else if(weight2 <= maxW && weight1 > maxW){
        return value2;
    }else if(weight1 <= maxW && weight2 <= maxW){
        return value1 > value2 ? value1 : value2;
    }
    return 0;
}

value1 = 10;
weight1 = 5;
value2 = 6;
weight2 = 4;
maxW = 8;
console.log(knapsackLight(value1,weight1,value2, weight2, maxW));