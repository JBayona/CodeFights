function findCommon(list1, list2){
  return list1.filter((element, index) => list2.includes(element));
}

list1 = [1,4,21,89,11,9,10,23,67,90];
list2 = [2,6,9,3,7,12,10,5,8];

console.log(findCommon(list1,list2));