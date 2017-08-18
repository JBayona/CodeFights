// This is the text editor interface. 
// Anything you type or change here will be seen by the other person in real time.


var input = [1,2,3,[4,[5]], {a: 1, b: 2}, 6, [[7], 8, []]];
// var output = [1,2,3,4,5,{a: 1, b: 2}, 6,7,8];

console.log([...[4,...[5]]])

// function flatten(input){
//     let result = [];
//     for(let i = 0; i < input.length; i++){
//         if(Array.isArray(input[i])){
//             let tmp = [] 
//             //result = result.concat(input[i]);
                // WHILe (ARRAY has an array inside)  {
                    // flattenOneLevelOfArray()
                // }
//             while(Array.isArray())
//             while
//         }else{
//             result.push(input[i]);
//         }
//     }
//     return result;
// }

flatten = input => input.reduce((acum, val) => acum.concat(Array.isArray(val) ? flatten(val) : val),[]);


var output = flatten(input);
console.log(output);

Gaurav Shrivastava - gsh@uber.com
