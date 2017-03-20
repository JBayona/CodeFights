function Chess(size){
	result = "";
	for(var i = 0; i < size; i++){
  	for(var j = 0; j < size; j++){
		if(i%2 == 0){
			if(j%2 == 0){
				result += '#';
			}else{
				result += ' ';
			}
		}else{
			if(j%2 == 0){
				result += ' ';
			}else{
				result += '#';
			}
		}
    }
    console.log(result);
    result = "";
  }
}

size = 8;
Chess(size);