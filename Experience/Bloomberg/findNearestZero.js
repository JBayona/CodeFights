//Opcion 1

function findNearestZero(array){
  var after = [];
  var before = [];
  var flag = false;
  var element = 0;
  var countToZero = 0;
  //Loop checking for values before the element
  for(var i = 0; i < array.length; i++){
    element = array[i];
    if(flag){
      if(element == 0){
        countToZero = 0;
        before.push(0);
      }else{
        before.push(++countToZero);
      }
    }else{
      if(element == 0){
        flag = true;
        countToZero = 0;
        before.push(0);
      }else{
        before.push(-1);
      }
    }
  }
  flag = false;
  countToZero = 0;
  //console.log(before);
  //Loop checking for values after the element
  for(var i = array.length-1; i >=0; i--){
    element = array[i];
    if(flag){
      if(element == 0){
        countToZero = 0;
        after.unshift(0);
      }else{
        after.unshift(++countToZero);
      }
    }else{
      if(element == 0){
        flag = true;
        countToZero = 0;
        after.unshift(0);
      }else{
        after.unshift(-1);
      }
    }
  }
  //console.log(after);
  //Format the response
  return before.map(function(item,index){
    if(before[index] == 0 && after[index] == 0) return 0;
    else if(before[index] > 0 && after[index] < 0) return before[index];
    else if(before[index] < 0 && after[index] > 0) return after[index];
    return Math.min(before[index], after[index]);
  });
}

array =  [0,1,1,0,1,1,1];
console.log(findNearestZero(array));


//Opcion 2

function findNearestZero(array){
  var after = [];
  var before = [];
  var flag = false;
  var flagRight = false;
  var elementLeft = 0;
  var elementRight = 0;
  var countToZero = 0;
  var countToZeroRight = 0;
  var j = array.length-1;
  //Loop 
  for(var i = 0; i < array.length; i++){
    //Left check
    elementLeft = array[i];
    if(flag){
      if(elementLeft == 0){
        countToZero = 0;
        before.push(0);
      }else{
        before.push(++countToZero);
      }
    }else{
      if(elementLeft == 0){
        flag = true;
        countToZero = 0;
        before.push(0);
      }else{
        before.push(-1);
      }
    }
    //Right check
    elementRight = array[j];
    if(flagRight){
      if(elementRight == 0){
        countToZeroRight = 0;
        after.unshift(0);
      }else{
        after.unshift(++countToZeroRight);
      }
    }else{
      if(elementRight == 0){
        flagRight = true;
        countToZeroRight = 0;
        after.unshift(0);
      }else{
        after.unshift(-1);
      }
    }
    j--;
  }
  return before.map(function(item,index){
    if(before[index] == 0 && after[index] == 0) return 0;
    else if(before[index] > 0 && after[index] < 0) return before[index];
    else if(before[index] < 0 && after[index] > 0) return after[index];
    return Math.min(before[index], after[index]);
  });
}

//array =  [0,1,1,0,1,1,1];
array =  [1,1,1,0,1,0,1,1,1,1,0];
console.log(findNearestZero(array));
