var array1 = [1,4,8,5,6];
var array2 = [1,4,6];
checkSubset(array1,array2);

function checkSubset(array1,array2){
 var index = 0;
 var mainArrayA = [];
 var subAray = [];
 var flag = false;
 
	if(array1.length > array2.length){
  	mainArray = array1;
    subArray = array2;
    flag = true;
  }else{
  	mainArray = array2;
    subArray = array1;
    flag = false;
  }
  
  for(var i = 0; i < mainArray.length; i++){
	  if(mainArray.indexOf(subArray[index]) >= 0){
     		if(index == subArray.length-1){
			  if(flag){
				console.log("A Subset B");
			  }else{
				console.log("A Subset B");
			  }
			  break;
			}
      	index++;
      }else{
      	console.log("None");
        break;
      }
  }
}