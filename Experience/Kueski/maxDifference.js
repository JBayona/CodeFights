function maxDifference(a){
  let max;
  let flag = false;
  for(let i = 0; i < a.length; i++){
    for(let j = i+1; j < a.length; j++){
      if(i < j && a[i] < a[j]){
        if(!flag){
          max = a[j] - a[i];
          flag = true;
        }else if(flag){
          max = a[j] - a[i] > max ? a[j] - a[i] : max;
        }
      }   
    }
  }
  return max;
}

array = [4,1,2,3];
console.log(maxDifference(array));