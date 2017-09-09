/*
Given some number, return the max number I can get.
*/

function getHighestNumber(n){
return [...''+n].map(Number).sort((a,b) => b - a).join('');
}

n = 62832; //86322
console.log(getHighestNumber(n));